function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora
    // atual no seguinte formato:
    const horaAtual = new Date()
    const horaFormatoUs = horaAtual.toLocaleTimeString('en-US', {
        hour: '2-digit',
        hour12: true // Isso define o formato de 12 horas
      })

    alert(`${horaFormatoUs} : ${horaAtual.getMinutes()}m : ${horaAtual.getSeconds()}s`)

    // Horário: 8 PM : 40m : 28s
    console.log('adicionar código na função tratadorDeCliqueExercicio2() em ./js/exercicio2.js')
}