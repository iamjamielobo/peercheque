$(document).ready(function () {

    // emailjs.init("user_d5YOhq2lPZOSZcNXgB5vb");

    $(".hamburger").click(function () {
        $(this).toggleClass("_active");
        $('.nav-mobile-list').toggleClass('_active');
    });


    // $('.submit-btn').click(function (e) {

    //     e.preventDefault()

    //     var $name = $('#name');
    //     var nameVal = $name.val();
    //     var $email = $('#email');
    //     var emailVal = $email.val();
    //     var $why = $('#why');
    //     var whyVal = $why.val();
    //     var package = $('.cost-block._selected').data('package');

    //     if (nameVal === "") {
    //         $name.parent('.form-field').addClass('_error');
    //         $name.focus();
    //     }
    //     else {
    //         $name.parent('.form-field').removeClass('_error');
    //     }

    //     if (emailVal === "" || !validateEmail(emailVal)) {
    //         $email.parent('.form-field').addClass('_error');
    //         $email.focus();
    //     }
    //     else {
    //         $email.parent('.form-field').removeClass('_error');
    //     }

    //     if (whyVal === null) {
    //         $why.parent().parent('.form-field').addClass('_error');
    //         $why.focus();
    //     }
    //     else {
    //         $why.parent().parent('.form-field').removeClass('_error');
    //     }


    //     if (nameVal !== "" && emailVal !== "" && whyVal !== null) {

    //         $('.loader-container').removeClass('hide');
    //         $('.submit-btn').addClass('hide');
    //         $name.parent('.form-field').removeClass('_error');
    //         $email.parent('.form-field').removeClass('_error');
    //         $why.parent().parent('.form-field').removeClass('_error');

    //         var templateParams = {
    //             name: nameVal,
    //             email: emailVal,
    //             imTrainingFor: whyVal,
    //             packageType: package
    //         };

    //         emailjs.send('service_011qhag', 'template_8akb9so', templateParams)
    //             .then(function(response) {
    //                 console.log('SUCCESS!', response.status, response.text);
    //                 $('.loader-container').addClass('hide');
    //                 $('.submit-btn').removeClass('hide');
    //                 $('#success_tic').modal('show');
    //                 $name.val('');
    //                 $email.val('');
    //                 $why.val(0);
    //                 $('.cost-block').removeClass('_selected');
    //                 $('.cost-block').eq(0).addClass('_selected');
    //             }, function(error) {
    //                 console.log('FAILED...', error);
    //         });
    //     }
    // })
});

var validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};