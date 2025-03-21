// Create buttons as Array
const buttonValues = ["C", "%", "+/-", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

const topSymbols = ["C", "%", "+/-"];
const rightSymbols = ["÷", "×", "-", "+", "="];

const display = document.getElementById("display");

let A = 0;
let operator = null;
let B = null;

function clearAll() {
    A = 0;
    operator = null;
    B =null;
}
// For loop for all buttons
for(let i = 0; i < buttonValues.length; i++) {
    // create buttons
    let value = buttonValues[i]; // [0]= "C"
    let button = document.createElement("button");
    button.innerText = value;

    // Add button style

    if(value == "0") {
        button.style.width = "200px";
        button.style.gridColumn = "span 2"
    }

    if(rightSymbols.includes(value)) {
        button.style.background =" #ff9500"
    }
     else if (topSymbols.includes(value)) {
        button.style.background = "#d4d4d2";
        button.style.color = "#1c1c1c";
    }

    // Process button clicks
    button.addEventListener('click', function() {
        if(rightSymbols.includes(value)) {
            if(value == "=") {
                if(A != null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if(operator == "÷") {
                        display.value = numA / numB;
                    }
                    else if (operator == "×") {
                        display.value = numA * numB;
                    }
                    else if(operator == "-") {
                        display.value = numA - numB;
                    }
                    else if(operator == "+") {
                        display.value = numA + numB;
                    }
                    clearAll()
                }

            }
            else {
                operator = value;
                A = display.value;
                display.value = "";
            }

        } 
        else if (topSymbols.includes(value)){
            if(value == "C") {
                display.value = "";

            }
            else if(value == "+/-") {
                if(display.value !== "" && display.value != "0") {
                    if(display.value[0] == "-") { 
                        display.value = display.value.slice(1); // Remove (-)
                    }
                    else {
                        display.value = "-"  + display.value;
                    }
                }

            }
            else if(value == "%") {
                display.value = Number(display.value) / 100;
            }
        }
        else { // Numbers and (.)
            if(value == ".") {
                if(display.value !== "" && !display.value.includes(value)) {
                    display.value += value;
                }
            } 
            else if (display.value == "0") {
                display.value = value;
            }
            else {
                display.value += value;
               
            }
        }
        
    })  
    

    // Add buttons to calculator
    document.getElementById("buttons").appendChild(button);
}
