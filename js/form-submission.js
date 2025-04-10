document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lowCarbForm');
    if (!form) {
        console.error('Form not found');
        return;
    }

    // Add validation function
    function validateForm() {
        const requiredFields = {
            'name': 'الاسم',
            'birth-day': 'يوم الميلاد',
            'birth-month': 'شهر الميلاد',
            'birth-year': 'سنة الميلاد',
            'phone': 'رقم الهاتف',
            'email': 'البريد الإلكتروني',
            'weight': 'الوزن',
            'height': 'الطول',
            'target': 'الهدف',
            'allergies': 'الحساسية',
            'address': 'العنوان'
        };

        for (const [fieldId, fieldName] of Object.entries(requiredFields)) {
            const field = document.getElementById(fieldId);
            if (!field || !field.value.trim()) {
                throw new Error(`الرجاء ملء حقل ${fieldName}`);
            }
        }

        // Validate email
        const email = document.getElementById('email').value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('الرجاء إدخال بريد إلكتروني صحيح');
        }

        // Validate phone (Libyan phone number format)
        const phone = document.getElementById('phone').value;
        if (!/^(09|091|092|094)[0-9]{7}$/.test(phone.replace(/\s/g, ''))) {
            throw new Error('الرجاء إدخال رقم هاتف ليبي صحيح');
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submission started');
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        try {
            // Validate form first
            validateForm();

            // Disable button and show loading
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> جاري الإرسال...';

            // Prepare form data
            const formData = {
                name: document.getElementById('name').value,
                birth_day: document.getElementById('birth-day').value,
                birth_month: document.getElementById('birth-month').value,
                birth_year: document.getElementById('birth-year').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                weight: document.getElementById('weight').value,
                height: document.getElementById('height').value,
                target: document.getElementById('target').value,
                health_issues: document.getElementById('health_issues').value || 'لا يوجد',
                experience: document.getElementById('experience').value || 'لا يوجد',
                allergies: document.getElementById('allergies').value,
                food_preferences: document.getElementById('food_preferences').value || 'لا يوجد',
                heard_about: document.getElementById('heard_about').value || 'لم يتم التحديد',
                address: document.getElementById('address').value
            };

            console.log('Sending form data:', formData);

            // Send to PHP endpoint
            fetch('submit_application.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                console.log('Response status:', response.status);
                return response.text().then(text => {
                    try {
                        return JSON.parse(text);
                    } catch (e) {
                        console.error('Error parsing response:', text);
                        throw new Error('Invalid server response');
                    }
                });
            })
            .then(data => {
                console.log('Server response:', data);
                if (data.success) {
                    Swal.fire({
                        title: 'تم إرسال الطلب بنجاح!',
                        text: 'سيتم التواصل معكم قريباً',
                        icon: 'success',
                        confirmButtonText: 'حسناً'
                    });
                    form.reset();
                } else {
                    throw new Error(data.message || 'حدث خطأ أثناء إرسال الطلب');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'خطأ!',
                    text: error.message || 'حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.',
                    icon: 'error',
                    confirmButtonText: 'حسناً'
                });
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            });

        } catch (error) {
            console.error('Validation error:', error);
            Swal.fire({
                title: 'تنبيه!',
                text: error.message,
                icon: 'warning',
                confirmButtonText: 'حسناً'
            });
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
});