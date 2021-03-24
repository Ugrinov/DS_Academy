$(function () {
    $('form').submit(function (e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            console.log('success');
        }).fail(function () {
            console.log('fail');
        });
        e.preventDefault();
        document.querySelector(".form").reset();
    });
});
