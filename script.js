let url = "https://economia.awesomeapi.com.br/last/USD-BRL"




function converter(){
    let input = document.getElementById("ivalor");

    let valor = input.value;

    



fetch(url)
    .then((res) => {

        return res.json()

    })

    .then((data) => {
        
        let valordol = data.USDBRL.ask 

        let convertido = valor / valordol

        let convertidoformat = new Intl.NumberFormat('us-EN', {style: 'currency', currency: 'USD'}).format(convertido)

        let valorconvertido = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor)
     
        let resultado = `Com ${valorconvertido} você consegue = ${convertidoformat}`



        document.getElementById("convertido").innerHTML = resultado


        

    })      

}

