$(document).ready(function () {

    emailjs.init("user_d5YOhq2lPZOSZcNXgB5vb");

    $(".hamburger").click(function () {
        $(this).toggleClass("_active");
        $('.nav-mobile-list').toggleClass('_active');
    });

    $('.js-form-submit').click(function (e) {

        e.preventDefault()

        var $name = $('#js-name');
        var nameVal = $name.val();
        var $email = $('#js-email');
        var emailVal = $email.val();
        var $phone = $('#js-phone');
        var phoneVal = $phone.val();
        var $profile = $('#js-profile');
        var profileVal = $profile.val();
        var $what = $('#js-what');
        var whatVal = $what.val();

        if (nameVal === "") {
            $name.parent('.form-field').addClass('_error');
            $name.focus();
        }
        else {
            $name.parent('.form-field').removeClass('_error');
        }

        if (emailVal === "" || !validateEmail(emailVal)) {
            $email.parent('.form-field').addClass('_error');
            $email.focus();
        }
        else {
            $email.parent('.form-field').removeClass('_error');
        }

        if (phoneVal === "") {
            $phone.parent('.form-field').addClass('_error');
            $phone.focus();
        }
        else {
            $phone.parent('.form-field').removeClass('_error');
        }

        if (profileVal === "") {
            $profile.parent('.form-field').addClass('_error');
            $profile.focus();
        }
        else {
            $profile.parent('.form-field').removeClass('_error');
        }

        if (whatVal === "") {
            $what.parent('.form-field').addClass('_error');
            $what.focus();
        }
        else {
            $what.parent('.form-field').removeClass('_error');
        }


        if (nameVal !== "" && phoneVal !== "" && emailVal !== "" && profileVal !== "" && whatVal !== "") {

            // $('.loader-container').removeClass('hide');
            // $('.submit-btn').addClass('hide');

            $name.parent('.form-field').removeClass('_error');
            $email.parent('.form-field').removeClass('_error');
            $phone.parent('.form-field').removeClass('_error');
            $profile.parent('.form-field').removeClass('_error');
            $what.parent('.form-field').removeClass('_error');

            var templateParams = {
                name: nameVal,
                email: emailVal,
                phone: phoneVal,
                profile: profileVal,
                what: whatVal
            };

            emailjs.send('service_011qhag', 'template_6jwryox', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    $('.success-msg').addClass('_show');

                    $name.val('');
                    $email.val('');
                    $phone.val('');
                    $profile.val('');
                    $what.val('');

                    setTimeout(function () {
                        $('.success-msg').removeClass('_show')
                    }, 5000);

                }, function(error) {
                    console.log('FAILED...', error);
            });
        }
    })
});

var validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};