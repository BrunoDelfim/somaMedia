let arrSum = [23, 99, 4, 78, 2, 4] // Criando variável do tipo array(objeto)

//----------------------------------------------

function sum() { // Criando a função que soma os argumentos recebidos.
    // Criando a variável que irá receber o resultado.
    let acumulador = 0
    for (let prop in arguments) { // para cada argumento recebido
        if (typeof arguments[prop] === "object") { // verifique se é  do tipo objeto
            for (x of arguments[prop]) { // se for,
                acumulador += x // some o valor de todos os itens do objeto e armazene em acumulador.
            }
        } else { // caso contrário,
            acumulador += arguments[prop] // some todos  os argumentos recebidos e armazene em acumulado. 
        }
    }
    if (typeof acumulador !== "number") { // Verifique se o resultado não é do tipo número,
        return 'Insira somente números.' // se for verdade pare a execução e retorne a mensagem: Insira somente números.
    } else if (acumulador == 0) { // verifique se o resultado é zero,
        return 'Insira um valor maior "0".' // se for verdade pare a execução e retorne a mensagem: Insira um valor maior "0".
    }
    return acumulador // Caso o resultado seja do tipo número e diferente de zero pare a execução e  retorne a soma dos argumentos passados.
}

console.log('Sum usando array: ', sum(arrSum)) // Executa a função possando uma variável do tipo array.
console.log('Sum usando numeros: ', sum(2, 2, 3, 4)) // Executa a função passando argumentos válidos do tipo número.
console.log(sum([2, 8, 5], [2,2])) // Executa a função passando duas arrays literais.

//----------------------------------------------

function evarege() { // Criando a função calcula a média dos argumentos recebidos.
    let resultado = 0 // Criando a variável que irá receber o resultado.
    let indice = 0 // Criando a variável que irá receber o número de argumentos passados.
    for (let prop in arguments) { // Para cada elemento passado,
        if (typeof arguments[prop] === "object") { // se for do tipo objeto,
            for (n of arguments[prop]) { //  para cada proprieade do objeto
                if (typeof n !== "number") { // verifique se seu valor não é do tipo número,
                    return 'Insira somente números.' // se verdade pare a execução e retorne a mensagem: 'Insira somente números.
                }
                resultado += n // some o valor de todos os itens do objeto passado e armazene em resultado.
                ++indice // adicione 1 ao contador de argumentos passados.
            }
        } else { // senão,
            if (typeof arguments[prop] !== "number") { // verifique se cada item do argumento passado é do tipo número,
                return 'Insira somente números.' // se verdade pare a execução e retorne a mensagem: Insira somente números.
            }
            resultado += arguments[prop] // some o valor de todos os itens do objeto passado e armazene em resultado.
            ++indice // adicione 1 ao contador de argumentos passados.
        }
    }
    if (isNaN(resultado / indice) || (resultado / indice) == 0) { // Verifica se a média é do tipo não númerico ou se o resultado é igual a zero,
        return 'Insira apenas valores maiores que "0".' // se verdade, pare a execução e retorne a mensagem: 'Insira apenas valores maiores que "0".'
    }
    return resultado / indice // caso contrário pare a execução e retorne a média.
}

console.log('Evarege usando array: ', evarege(arrSum)) // Executa a função passando uma variável do tipo array.
console.log('Evarege usando numeros: ', evarege(2, 2, 4, 2)) // Executa a função passando argumentos válidos do tipo número.
console.log(evarege([7,3], [5, 2, 3])) // Executa a função passando duas arrays literais.