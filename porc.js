var qtdAdc = window.document.getElementById('qtdAdc')
var vlrProdAdc = window.document.getElementById('vlrProdAdc')
var prodDescAdc = window.document.getElementById('prodDescAdc')
var selAdc = window.document.getElementById('selAdc')


function adcionar(){
    if(prodDescAdc.value == 0){
        window.alert('FAVOR INFORME O VALOR DO PRODUTO COM DESCONTO')
        prodDescAdc.focus()
    } else if (vlrProdAdc.value == 0){
        window.alert('FAVOR INFOME O VALOR DO PRODUTO')
        vlrProdAdc.focus()
    }else{
        let vlrDesc = (Number(prodDescAdc.value)*100) / Number(vlrProdAdc.value) 
        vlrDesc = 100 - vlrDesc
        
        let vlrTot = Number(vlrProdAdc.value) * Number(qtdAdc.value)

        let vlrDif = (vlrTot * vlrDesc) / 100
        
        selAdc.innerHTML += `<option value = "teste">DESCONTO EM "%" = ${vlrDesc}<br></option>`
        selAdc.innerHTML += `<option value = "teste">DESCONTO EM "VALOR" = ${vlrDif} <br></option>`
        selAdc.innerHTML += `<option value = "teste">------------------------------<br></option>`

    }
    
}
function limpar(){
    location.reload()
}