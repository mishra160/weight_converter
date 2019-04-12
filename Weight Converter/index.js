const Input = document.getElementById("lbsInput");
const Output = document.getElementById("output");
const gramsOutput = document.getElementById("gramsOutput");
const kilogramsOutput = document.getElementById("kilogramsOutput");
const ounceOutput = document.getElementById("ounceOutput");


// hiding the Outputcards
Output.style.visibility = "hidden";

//Listening Event on Input
Input.addEventListener("input", inputButton);

function inputButton(e) {

    Output.style.visibility = "visible";
    let pounds = e.target.value;
    gramsOutput.innerHTML = pounds / 0.0022046;
    kilogramsOutput.innerHTML = pounds / 2.2046;
    ounceOutput.innerHTML = pounds * 16;

}