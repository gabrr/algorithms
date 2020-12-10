const choices = document.querySelectorAll(".choice")
const resultDiv = document.getElementById("result")
let userPoints = 0
let compPoints = 0

const highlight = (e, time = 300) => {
    e.classList.add("clicked");
    setTimeout(() => {
        e.classList.remove("clicked");
    }, time)
}
choices.forEach(c => {
    c.addEventListener("click", () => {
        highlight(c)
        const computerChoice = Math.floor(Math.random() * 3);
        const result = `${c.value}${computerChoice}`
        switch (result) {
            case "01":
            case "12":
            case "20":
                resultDiv.innerHTML = "User won";
                userPoints += 1
                document.getElementById("userPoints").innerHTML = userPoints
                break;
            case "02":
            case "10":
            case "21":
                resultDiv.innerHTML = "Computer Won";
                compPoints += 1
                document.getElementById("compPoints").innerHTML = compPoints
                break;
            default:
                resultDiv.innerHTML = "You are even";
        }
    })
})