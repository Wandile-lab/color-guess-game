const colors = ["red", "blue", "purple", "orange", "lightblue", "green"] 

let getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
};

const buttonColorShuffle = () => { 
    const shuffledColors = colors.sort(() => Math.random() - 0.5); 
    colorBtns.forEach((colorBtn, index) => {
    colorBtn.style.backgroundColor = shuffledColors[index]; 
    });
};

//generate random colour
let randomColor = getRandomItem(colors);
console.log(randomColor);

const colorBoxDisplay = document.querySelector(".colorBoxDisplay");
colorBoxDisplay.style.backgroundColor = randomColor;

const colorBtns = document.querySelectorAll(".colorChoice");
const gameStatus = document.querySelector(".gameStatus");

const displayScore = document.getElementById("displayScore");
let score = 0;

buttonColorShuffle(); 

colorBtns.forEach((colorBtn) => {
    colorBtn.addEventListener("click", (event) => {
        console.log("button clicked")

        gameStatus.classList.remove("fade-out", "celebrate");

        if (colorBtn.style.backgroundColor === randomColor) {
            gameStatus.textContent = "Great Job, You Guessed Correctly!";
            gameStatus.classList.add("celebration");
            score++;
            displayScore.textContent = "Your Score: " + score;

            randomColor = getRandomItem(colors);
            colorBoxDisplay.style.backgroundColor = randomColor;
            console.log(randomColor);

            buttonColorShuffle();
            setTimeout(() => {
                gameStatus.classList.remove("celebration");
            }, 600);
        }else {
            gameStatus.textContent = "Oops, Wrong Guess!";
            gameStatus.classList.add("fade-out");
        }
    })
});

//reset button
const resetBtn = document.getElementById("newGameButton")
resetBtn.addEventListener("click", () => {
    score = 0
    displayScore.textContent = "Your Score: " + score
    gameStatus.textContent = "";
    randomColor = getRandomItem(colors);
    colorBoxDisplay.style.backgroundColor = randomColor;
    console.log(randomColor)

    buttonColorShuffle(); 
});



