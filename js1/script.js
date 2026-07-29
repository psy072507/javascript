const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("result");
let sumBtn = document.getElementById("sumBtn");

function calculateSum() {
    if(!(num1Txt.value !== "" && num2Txt.value !== "")) {
        
        resultTxt.innerHTML = parseFloat(num1Txt.value) + parsefloat(num2Txt.value);
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";

}

