$(document).ready(function (){

    $('.lista_filtros .filtro[categoria="Todo"]').addClass('filtro_activo');

    $('.filtro').click(function () {
        var category = $(this).attr('categoria');

        $('.filtro').removeClass('filtro_activo');
        $(this).addClass('filtro_activo');


        $('.ganga').css('transform', 'scale(0)');
        function ocultarGanga() {
            $('.ganga').hide();
        } setTimeout(ocultarGanga,300); //300 ms (cuando termina la transicion css)



        function verGanga() {
            $('.ganga[categoria="'+category+'"]').show();
            $('.ganga[categoria="'+category+'"]').css('transform', 'scale(1)');
        } setTimeout(verGanga,300);


    });

    $('.filtro[categoria="Todo"]').click(function () {
        function verTodasGangas() {
            $('.ganga').show();
            $('.ganga').css('transform', 'scale(1)');
        } setTimeout(verTodasGangas,300);

    });
});