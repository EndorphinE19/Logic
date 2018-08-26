$(document).ready(function(){
// скрываем контейнер с формами
    if ($('div').hasClass('login')) {
        $('.container-form').css('display','none')
    }
    $('.registr-disp').click(changeRegistr);
    $('.logIn-disp').click(changeLogIn);

    function changeRegistr() {
        if ($('.registr .container').css('display') == 'none') {
            $('.registr .container').css('display','block')
        } else {
            $('.registr .container').css('display','none')
        }
    }

    function changeLogIn() {
        if ($('.logIn .container').css('display') == 'none'){
            $('.logIn .container').css('display','block')
        } else {
            $('.logIn .container').css('display','none')
        }
    }
})