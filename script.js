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
        

        let resultado = `Com R$${valor} você consegue = $${convertido.toFixed([2])}`

        document.getElementById("convertido").innerHTML = resultado


        

    })      

}

