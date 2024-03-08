//Realizar un programa que liste todos los números abundantes...
//...hasta un numero ingresado con una función llamada EsAbundante(n) que devuelve un valor boolean.

function esAbundante(number){
    let add = 0;
    let flag = 'No es abundante.';

    for(let i = 0; i < number; i++){
        if(number % i == 0){
            add += i;
        }
    }

    if(add > number){
        flag = 'Es abundante.';
    }

    return flag;
}

let input;
input = prompt('Ingrese su número: ', '');
document.write(esAbundante(input));