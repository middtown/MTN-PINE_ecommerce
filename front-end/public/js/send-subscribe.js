(function ($) {

    "use strict";


    /* =================================
    ===  SUBSCRIBE fORM             ====
    =================================== */
    $("#subscribe-form").validate({
        errorPlacement: function(){
            return false;  // suppresses error message text
        },
        submitHandler: function (form) {
            //$(form).find('.input-group-addon').find('.icon-email2').removeClass('icon-email2').addClass('icon-line-loader icon-spin');
            $(form).ajaxSubmit({
                target: '#subscribe-result',
                success: function () {
                    // $(form).find('.input-group-addon').find('.icon-line-loader').removeClass('icon-line-loader icon-spin').addClass('icon-email2');
                    $('#subscribe-form').find('.subscribe-form-control').val('');
                    $('#subscribe-result').attr('data-notify-msg', $('#subscribe-result').html()).html('');
                    SEMICOLON.widget.notifications($('#subscribe-result'));
                }
            });
        }
    });




})(jQuery);


