const ShowResult = document.querySelector(".Result")
const AllButtons = document.querySelectorAll(".But")
var buttonType = ""
var NumToCalculate = '0';
var Result = "0"
var Action = ''


// listen for events in all buttons
AllButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const clicked = event.target;
        buttonType = clicked.className.split(" ")
      
        // add the number to the NumToCalculate Var
        if (buttonType[0] === "NumButton") {
            if (NumToCalculate === "0") {
                NumToCalculate = ""
            } 
            //add more numbers in the same string
            NumToCalculate = NumToCalculate + buttonType[1] 
            ShowResult.textContent = NumToCalculate
        } else if (buttonType[0] === "DelAndBack") {
            // Delete
            if (buttonType[1] ==="Delete") {
                NumToCalculate = "0"
                ShowResult.textContent = NumToCalculate
            } 
            // Back space
            else if (buttonType[1] === "BackSpace") {
                if (NumToCalculate.length === 1) {
                    NumToCalculate = "0"
                    ShowResult.textContent = NumToCalculate
                } else {
                    NumToCalculate = NumToCalculate.slice(0, -1)
                    ShowResult.textContent = NumToCalculate
                }
            }
            } else if (buttonType[0] === "MathFunction") {
                // Math functions
                if (buttonType[1] !== "Equals") {
                    ShowResult.textContent = "0"
                    Result = Number(NumToCalculate)
                    NumToCalculate = "0"
                // Ramember the action the user selected
                    Action = buttonType[1];
                } else { // the user selected a math function
                    if (Action === "Division") {
                        Result = Number(Result) / Number(NumToCalculate)
                    } else if (Action === "Multiplication") {
                        Result = Number(Result) * Number(NumToCalculate)
                        NumToCalculate = Result
                    } else if (Action === "Subtraction") {
                        Result = Number(Result) - Number(NumToCalculate)
                        NumToCalculate = Result
                    } else if (Action === "Add") {
                        Result = Number(Result) + Number(NumToCalculate)
                        NumToCalculate = Result
                    }        
                        ShowResult.textContent = Result
                        NumToCalculate = Result
                        Result = 0
                    
                    
                }}
})})


