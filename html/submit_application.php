<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log access attempt
error_log('Received request to submit_application.php');
error_log('Request Method: ' . $_SERVER['REQUEST_METHOD']);

// Set headers
header('Content-Type: application/json; charset=UTF-8');

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Log raw POST data
        error_log('POST data: ' . print_r($_POST, true));
        
        // Validate required fields
        $required = ['name', 'email', 'phone'];
        foreach ($required as $field) {
            if (empty($_POST[$field])) {
                throw new Exception("Required field missing: $field");
            }
        }

        // Prepare email
        $to = 'ahmednaffati24@gmail.com';
        $subject = 'طلب جديد - برنامج لو كارب';
        
        // Create message
        $message = "معلومات الطلب الجديد:\n\n";
        foreach ($_POST as $key => $value) {
            $message .= "$key: " . ($value ?: 'لا يوجد') . "\n";
        }

        // Set email headers
        $headers = array(
            'From: webform@' . $_SERVER['HTTP_HOST'],
            'Reply-To: ' . $_POST['email'],
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit'
        );

        // Log attempt
        error_log('Attempting to send email to: ' . $to);
        
        // Send email
        $mail_sent = mail($to, $subject, $message, implode("\r\n", $headers));
        
        // Log result
        error_log('Mail send result: ' . ($mail_sent ? 'Success' : 'Failed'));

        if ($mail_sent) {
            echo json_encode([
                'success' => true,
                'message' => 'تم إرسال الطلب بنجاح'
            ]);
        } else {
            throw new Exception('Failed to send email');
        }

    } catch (Exception $e) {
        error_log('Error: ' . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?> 