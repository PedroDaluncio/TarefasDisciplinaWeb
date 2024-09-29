const tratadorDeCliqueExercicio4 = () => {
    const numero = Number(prompt("digite um numero"))
    switch (true){
        case (numero >= 30 && numero <= 50):
            console.log(`${numero} está no intervalo [30,50]`)
            break
        case (numero >= 60 && numero <= 100):
            console.log(`${numero} está no intervalo [60,100]`)
            break
        default:
            console.log("O número informado não está em nenhum dos dois intervalos.")
    }
}