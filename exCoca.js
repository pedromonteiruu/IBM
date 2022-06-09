//Fazer um algoritmo que imprima os numeros de 0 a 100 sem função e com função

// for(let i=0;i<=100;i++){
//     console.log(i)
// }


// const zeroToHundred = max =>{
//     for(i=0;i<=max;i++){
//         console.log(i)
//     }
// }
// zeroToHundred(100)

//Fazer um algoritmo que imprima os numeros pares de 0 a 100 sem função e com função

// for(let j=0;j<=100;j++){
//         if(j%2 == 0 ) console.log(j)
//     }
// console.log('\n\n')
// const soPares = _ =>{
//     for(j=0;j<=100;j++){
//         if(j%2 == 0 ) console.log(j)
//     }
// }
// soPares()


//Fazer um algoritmo que imprima os numeros impares de 0 a 100 sem função e com função

// for(let imp=0;imp<=100;imp++){
//     if(imp%2 == 1 ) console.log(imp)
// }
// console.log('\n\n')

// const soImpares = _ =>{
//     for(imp=0;imp<=100;imp++){
//         if(imp%2 == 1 ) console.log(imp)
//     }
// }
// soImpares()

//Fazer um algoritmo que imprima os numeros primos de 0 a 100 sem função e com função

// for(primo=2; primo<100;primo++){
//     let count = 0
//     for(valor=0;valor<=primo;valor++){
//         if(primo%valor==0) count++
//     }
//     if(count<=2) console.log(primo)
// }
// console.log('\n\n')
// const soPrimos = _ =>{
//     for(primo=2; primo<100;primo++){
//         count = 0
//         for(valor=0;valor<=primo;valor++){
//             if(primo%valor==0) count++
//         }
//         if(count<=2) console.log(primo)
//     }   
// }
// soPrimos()

//Fazer um algoritmo que imprima os numeros multiplos de 5 de 0 a 100 sem função e com função


// for(let valor=0;valor<=100;valor++){
//     if(valor%5==0) console.log(valor)
// }

// const multDeX = x =>{
//     for(let valor=0;valor<=100;valor++){
//         if(valor%x==0) console.log(valor)
//     }
// }
// multDeX(5)

//Fazer um funcao que recebe 2 parametros numericos e imprima os valores entre esses numeros

// const doisParametros = (start,end)=>{
//     if(start>end) [start,end] = [end,start]
//     for(i=start;i<end;i++){
//         console.log(i)
//     }
// }
// doisParametros(10,100)

//Fazer uma funcao que receba um array e retorne os numeros pares desse array sem usar o filter e usando filter


// const arrTest = [0,1,2,3,4,5,6,7,8,9,10]
// const numParSemFilter = arr =>{
//     let pares = []
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]%2==0) pares.push(arr[i])
//     }
//     return pares
// }
// console.log(numParSemFilter(arrTest))

// console.log(arrTest.filter(value=>{
//     if(value%2==0) return value
// }))

//Fazer uma funcao que receba um array e retorne os numeros impares desse array sem usar o filter e usando o filter

// const arrTest2 = [0,1,2,3,4,5,6,7,8,9,10]

// const numImparSemFilter = arr =>{
//     let impares = []
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]%2==1) impares.push(arr[i])
//     }
//     return impares
// }
// console.log(numImparSemFilter(arrTest2))

// console.log(arrTest2.filter(value=>{
//     if(value%2==1) return value
// }))

//Fazer uma funcao que receba um array e retorne os numeros primos desse array sem usar o filter e usando o filter


// const arrTest3 = [0,1,2,3,4,5,6,7,8,9,10]

// const numPrimos = arr =>{
//     const arrPrimos = []
//     for(let i =1; i<arr.length;i++){
//         primo = arr[i]
//         let count = 0
//         for(valor=0;valor<=primo;valor++){
//             if(primo%valor==0) count++
//         }
//         if(count<=2) arrPrimos.push(primo)
//     }
//     return arrPrimos
// }
// console.log(numPrimos(arrTest3))

// console.log(arrTest3.filter(value=>{
//     let count =0
//     for(let i=0;i<=value;i++){
//         if (value%i==0) count++
//     }
//     if(count<=2) return value
// }))

//Fazer uma funcao que receba um array e retorne um novo array e para cada posicao desse array que tiver um numero par retorne o numero com - par na frente e para cada posicao que tenha um impar retorne o numero com - impar na frente e quando for zero retorne a string zero ao invés do numero 0.
// const arrTest4 = [0,1,2,3,4,5,6,7,8,9,10,11,13,15,17,19,20,22,24]
// const retornoNovoArray = arr =>{
//     return arr.map(value=>{
//         if(value==0) return 'zero'
//         if(value%2==0) return `${value} - par`
//         if(value%2==1) return `${value} - impar`
//     })
// }
// console.log(retornoNovoArray(arrTest4))