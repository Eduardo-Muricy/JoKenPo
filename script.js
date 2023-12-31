const choice = document.querySelector('.choice')
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
 let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGanme(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGanme = (human, machine) => {
    console.log(' Humano: ' + human + ' maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if ((human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')) {
            humanScoreNumber++
            humanScore.innerHTML= humanScoreNumber
        result.innerHTML = "Você ganhou"
    } else {
        machineScoreNumber++
        machineScore.innerHTML= machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa"
    }
    choice.innerHTML=`Você escolheu: ${human} <br> Alexa escolheu: ${machine}`
}