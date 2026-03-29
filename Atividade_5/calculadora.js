const valor_conta = 100
const percentual_gorjeta = 15

let valor_gorjeta = valor_conta * (percentual_gorjeta/100)

let valor_total = valor_conta + valor_gorjeta

console.log("Valor da Conta: " + valor_conta + ", Gorjeta ("+ percentual_gorjeta +
    "%): R$"+ valor_gorjeta +", Total a pagar: R$"+ valor_total +"")