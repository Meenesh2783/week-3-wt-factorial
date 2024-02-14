let inputele = document.getElementById("inputele");
let paraText = document.getElementById("para-text");

function get() {
    let inputVal = parseInt(inputele.value);
    let invalidText = "Please enter a number";
    if (inputele.value === "") {
        paraText.textContent = invalidText;
        paraText.style.color = "red";
    } else {
        let fact = 1;
        for (let i = 1; i <= inputVal; i++) {
            fact = fact * i;
        }
        let text = "the factorial of " + inputVal + " is " + fact;
        paraText.textContent = text;
    }

}

function reset() {
    inputele.value = " ";
    paraText.textContent = "";
}