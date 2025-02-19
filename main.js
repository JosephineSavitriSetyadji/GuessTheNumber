let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0

const guessNumber = document.getElementById('guessNumber') 
const guessBtn = document.getElementById('guessBtn')
const message = document.getElementById('message')
const guessAttempts = document.getElementById('guessAttempts')

guessBtn.addEventListener('click', function() {
    let userAttempts = parseInt(guessInput.value)
    attempts++

    if(isNaN(userAttempts) || userAttempts < 1 || userAttempts > 100){
        message.textContent = "Please enter a valid number between 1 and 100."
        return;
    }

    if(userAttempts === randomNumber){
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`
        guessBtn.disabled = true
        guessAttempts.textContent = attempts
    } else if(userAttempts < randomNumber){
        message.textContent = "Too low! Try again."
    } else {
        message.textContent = "Too high! Try again."
    }

}
    
)