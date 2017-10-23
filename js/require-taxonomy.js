( function ($) {
    $(document).ready(function () {
        $('#bio_typesdiv > h2').append('<span class="acf-required">*</span>');
        $('body').on('submit.edit-post', '#post', function () {
            if (!$('input[name="tax_input[bio_types][]"]').is(":checked")) {
                $('#rct_error').remove();
                $('<div id="rct_error" class="error notice is-dismissible"><p>Please select a taxonomy term.</p></div>').insertAfter('.wp-header-end');
                $('#bio_typesdiv').addClass('error');
                $('#major-publishing-actions .spinner').hide();
                $('#major-publishing-actions').find(':button, :submit, a.submitdelete, #post-preview').removeClass('disabled');
                $("a[href$='bio_types-all']").focus();
                return false;
            }
        });
    });
}(jQuery) );