App.Handlers.jogar_click = $('#jogar').click(function(){
    if (document.getElementById('canvasOne').getContext) {
        App.Objects.game = new App.Classes.Game('canvasOne', 'confirm_button');
        setTimeout(function() { App.Objects.game.chamar_proximo_frame() }, 2000);
        $('.card').addClass('flipped');
    } else {
        console.error('Canvas not supported');
    }
});

App.Handlers.confirm_click = $('#confirm_button').click(function(){
    
});

App.Handlers.submit_click = $('#submit').click(function(){
    // TODO Alterar audio somente se ouve mudanças

    $("#confirmation-alert").hide('fast');
    $("#confirmation-alert").show('fast');
    
});

App.Handlers.nav_click = $('.nav-button').click(function(){
    switch( parseInt( $(this).data("value") ) ) {
        case 1:
            $('#instructions').slideToggle('slow');
            break;
        case 2:
            $('#about').slideToggle('slow');
            break;
        case 3:
            $('#options').slideToggle('slow');
            $("#confirmation-alert").hide('slow');
            break;
        case 4:
            if(App.Objects.game.pausar_jogo === true) {
                App.Objects.game.pausar_jogo = false;
                $(this).find('img').attr('src', 'app/assets/images/pause-3-icon-32.png');
            } else {
                App.Objects.game.pausar_jogo = true;
                $(this).find('img').attr('src', 'app/assets/images/play-3-icon-32.png');
            }
    }
    
});