console.log("Hello world.")

const constantstring = "Trongle"
const constantnum = 123.45
const constantboolean = true
console.log(constantstring)
console.log(constantnum)
console.log(constantboolean)

var variable1 = 8
let variable2 = 5

console.log(variable1)

variable1 = 33

console.log(variable1)

const suma = variable1 + variable2
console.log(suma)

const concatenar = "hello" + " " + "world"
console.log(concatenar)

const ej = "1" + 1
console.log(ej)

const entrega1 = 4
const entrega2 = 3
const entrega3 = 3.5
const labs = 3

const sumanotas = entrega1 + entrega2 + entrega3 + labs
const notafinal = sumanotas/4
console.log(notafinal)

let mensaje = ""
if(notafinal >=3){
    mensaje = "pasaste con " + notafinal
} else {
    mensaje = "oof"
}
console.log(mensaje)

alert(mensaje)