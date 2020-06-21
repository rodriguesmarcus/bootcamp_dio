function consultaCep() {
    $('.barra-progresso').show();

    var inputCep = document.getElementById('inputCep').value
    
    var url =  `https://viacep.com.br/ws/${inputCep}/json/`

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            // document.getElementById('uf').innerHTML = response.uf
            // document.getElementById('localidade').innerHTML = response.localidade
            // document.getElementById('bairro').innerHTML = response.bairro
            // document.getElementById('logradouro').innerHTML = response.logradouro
            // outra forma de fazer
            $("#uf").html(response.uf)
            $("#localidade").html(response.localidade)
            $("#bairro").html(response.bairro)
            $("#logradouro").html(response.logradouro)
            $("#tituloCep").html(`CEP ${response.cep}`)
            $('.cep').show();
            $('.barra-progresso').hide();
            // se fossem classes, teríamos .logradouro, por ex.
        }
    })
}

$(function (){
    $('.cep').hide();
    $('.barra-progresso').hide();
})
