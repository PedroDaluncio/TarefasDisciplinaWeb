const tratadorDeCliqueExercicio3 = () => {
    const string = prompt("escreva algo")
    const a = string.split("")
    a.splice(0,1)
    a.splice(-1, 1)
    alert(a.join(""))
}