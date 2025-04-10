<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', 'php_errors.log');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// تكوين CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// معالجة طلب preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    // تحقق من أن الطلب هو POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('يجب أن يكون الطلب POST');
    }

    // استلام البيانات
    $name = $_POST['name'] ?? '';
    $birthDay = $_POST['birth-day'] ?? '';
    $birthMonth = $_POST['birth-month'] ?? '';
    $birthYear = $_POST['birth-year'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $address = $_POST['address'] ?? '';
    $allergies = $_POST['allergies'] ?? '';
    $foodPreferences = $_POST['food_preferences'] ?? '';
    $heardAbout = $_POST['heard_about'] ?? '';

    // تحقق من البيانات المطلوبة
    if (empty($name) || empty($phone) || empty($address)) {
        throw new Exception('جميع الحقول المطلوبة يجب ملؤها');
    }

    // تنسيق تاريخ الميلاد
    $birthDate = sprintf('%02d/%02d/%04d', $birthDay, $birthMonth, $birthYear);

    // تجهيز محتوى الرسالة HTML
    $emailBody = "
    <html dir='rtl'>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { padding: 20px; }
            .header { background-color: #029A0C; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #029A0C; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>طلب اشتراك جديد - برنامج لو كارب</h2>
            </div>
            <div class='content'>
                <div class='field'><span class='label'>الاسم:</span> {$name}</div>
                <div class='field'><span class='label'>تاريخ الميلاد:</span> {$birthDate}</div>
                <div class='field'><span class='label'>رقم الهاتف:</span> {$phone}</div>
                <div class='field'><span class='label'>العنوان:</span> {$address}</div>
                <div class='field'><span class='label'>الحساسية:</span> " . ($allergies ?: 'لا يوجد') . "</div>
                <div class='field'><span class='label'>الأصناف غير المفضلة:</span> " . ($foodPreferences ?: 'لا يوجد') . "</div>
                <div class='field'><span class='label'>كيف سمع عنا:</span> {$heardAbout}</div>
                <div class='field'><span class='label'>وقت التقديم:</span> " . date('Y-m-d H:i:s') . "</div>
            </div>
        </div>
    </body>
    </html>";

    // إنشاء كائن PHPMailer
    $mail = new PHPMailer(true);

    // إعدادات السيرفر
    $mail->isSMTP();
    $mail->Host = 'mail.i-fit.ly';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@i-fit.ly';
    $mail->Password = 'YOUR_PASSWORD'; // استبدل بكلمة المرور الحقيقية
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';

    // إعدادات البريد
    $mail->setFrom('info@i-fit.ly', 'i.Fit Website');
    $mail->addAddress('info@i-fit.ly');
    $mail->isHTML(true);
    $mail->Subject = "طلب اشتراك جديد من {$name}";
    $mail->Body = $emailBody;
    $mail->AltBody = strip_tags(str_replace(['<br>', '</div>'], "\n", $emailBody));

    // إرسال البريد
    $mail->send();

    // حفظ البيانات في ملف للنسخ الاحتياطي
    $logFile = 'applications.log';
    file_put_contents($logFile, date('Y-m-d H:i:s') . " - " . json_encode($_POST, JSON_UNESCAPED_UNICODE) . "\n\n", FILE_APPEND);

    // إرسال الرد
    echo json_encode([
        'success' => true,
        'message' => 'تم استلام طلبك بنجاح وسيتم التواصل معك قريباً'
    ]);

} catch (Exception $e) {
    error_log("Error in submit_application.php: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'حدث خطأ في إرسال الطلب. الرجاء المحاولة مرة أخرى.'
    ]);
}
?> 