const result = document.querySelector("#result");
document.querySelectorAll("#opts a").forEach((a) =>
    a.addEventListener("click", (e) => {
        computerChoice(e);
    })
);

function computerChoice(e) {
    let choices = ["Rock", "Paper", "Scissors"];

    result.innerHTML = choices[Math.floor(Math.random() * choices.length)];

    if (e.target.innerText.trim() == result.innerHTML) {
        setTimeout(() => alert("Draw"), 100);
        setTimeout(() => console.log("Draw"), 100);
    }

    if (
        (e.target.innerText.trim() == "Rock" && result.innerHTML == "Scissors") ||
        (e.target.innerText.trim() == "Paper" && result.innerHTML == "Rock") ||
        (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Paper")
    ) {
        setTimeout(() => alert("You win"), 100);
        setTimeout(() => console.log("You win"), 100);
    }

    if (
        (e.target.innerText.trim() == "Rock" && result.innerHTML == "Paper") ||
        (e.target.innerText.trim() == "Paper" && result.innerHTML == "Scissors") ||
        (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Rock")
    ) {
        setTimeout(() => alert("Computer wins"), 100);
        setTimeout(() => console.log("Computer win"), 100);
    }
}