const SumOne = document.getElementById('SumOne');
const SumTwo = document.getElementById('SumTwo');
const addBtn = document.querySelector('.add-btn');
const clearBtn = document.querySelector('.clear-btn');
const resultBox = document.querySelector('.result');
const alert = document.querySelector('.alert');

// Function to show alert.
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=> {
        alert.style.display = "none";
    }, 2000);
}

// Function adding the values.
const addNumber = () => {
    let valOne = SumOne.value;
    let valTwo = SumTwo.value;

    // if there is no value then we will alert.
    if(valOne === "" && valTwo === "" ) {
        displayAlert("...Plz fill the input field.");
    } else {
        let storedOne = 0;
        if(valOne === "" || isNaN(valOne)) {
            valOne = storedOne;
            displayAlert("...Plz Enter Sum-1 field operand.");
        } else {
            valOne = parseInt(SumOne.value);
        }

        let storedTwo = 0;
        if(valTwo === "" || isNaN(valTwo)) {
            valTwo = storedTwo;
            displayAlert("...Plz Enter Sum-2 field operand.");
        } else {
            valTwo = parseInt(SumTwo.value);
        }
    }

    let finalResult = valOne + valTwo;
    resultBox.textContent = finalResult;
    SumOne.value = "";
    SumTwo.value = "";
}

//Function to Addinput value.
addBtn.addEventListener('click', () => {
    addNumber();
});

// Function to clear result.
clearBtn.addEventListener('click', () => {
    SumOne.value = "";
    SumTwo.value = "";
    resultBox.textContent = "...";
});