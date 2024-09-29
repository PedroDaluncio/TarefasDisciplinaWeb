const tratadorDeCliqueExercicio6 = () =>{
    const string = prompt("digite uma string")
    const arrayString = string.split("")
    const arrayStringInvertida = []
    for (let indice = arrayString.length - 1; indice >=0; indice--){
        arrayStringInvertida.push(arrayString[indice])
    }
    const stringInvertida = arrayStringInvertida.join("")
    alert(stringInvertida)
}

/**
 * stringInvertida = string.split("").reverse().join("")
 */