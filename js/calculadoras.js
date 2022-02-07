function calcular1(n1, n2){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)

    selector = document.getElementById("selector").value
    
    switch(selector){
        case '+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado é = ${calculo}`
            break
        
        case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado é = ${calculo}`
            break
        
        case '*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado é = ${calculo}`
            break

        case '/':
            calculo = Math.round((n1 / n2))
            if(Number.isNaN(calculo)){
                document.getElementById("resultado").innerHTML = `Insira um divisível válido!`
            } else{
                document.getElementById("resultado").innerHTML = `O resultado é = ${calculo}`
                break
            }      
    }
}

function calcular2(n1, n2){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)

    calculo = (n1 * n2 / 100)
    document.getElementById("resultado").innerHTML = `${n1}% de ${n2} é = ${calculo}`
}

function calcular3(n1, n2){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)

    calculo = (n1 ** n2)
    document.getElementById("resultado").innerHTML = `O resultado da potência é = ${calculo}`
}