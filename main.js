

//outputField.textContent = selectedOption.value;

//start

//getting html elements
let inputField = document.getElementById('inputField');
let outputField = document.getElementById('outputField');
let selectedOption = document.getElementById('operation');
let submitButoon = document.getElementById('submit');
let resetButton = document.getElementById('btn-reset')


//to store results of each operation
let upResult
let downResult 
let minResult
let maxResult
let sumResult
let medianResult
let meanResult
let stdevResult

//function to set values of each Result as null
const nullSetter = () => {
    upResult = null
    downResult = null
    minResult = null
    maxResult = null
    sumResult = null
    medianResult = null
    meanResult = null
    stdevResult = null
}

//to get input from input field
let arr = []
inputField.addEventListener('input', () => {
    let inputValue = inputField.value;
    arr = inputValue.split(' ').map(Number); //split string based on spaces and convert them to number
    nullSetter()
})

resetButton.addEventListener('click', () => {
    inputField.value = ""
    outputField.value = ""
    nullSetter()
    arr = []
})


//function implementations
function up(o) {
    if(upResult === null && arr.length !== 0) {
        upResult = [...arr.sort((a, b) => {
            return a-b
        })]
    }
    if(o==1) outputField.textContent = upResult;
    else return upResult;
    
}

function down() {
    if(downResult === null) {
        downResult = [...arr.sort((a, b) => {
            return b-a
        })]
    }
    outputField.textContent = downResult
}

function max() {
    if(maxResult === null) {
        outputField.textContent = Math.max(...arr)
    } else {
        outputField.textContent = maxResult
    }
}
function min() {
    if(minResult === null) {
        outputField.textContent = Math.min(...arr)
    } else {
        outputField.textContent = minResult
    }
}
function sum(o) {
    if(sumResult === null) {
        let sum = 0
        const result = arr.reduce((acc, item) => {
            return acc + item
        })
        if(o==1) outputField.textContent = result;
        else return result;
        
    } else {
        if(o==1) outputField.textContent = sumResult;
        else return sumResult;
    }
}
function median() {
    const sortedArray = up(2)
    const mid = Math.floor(sortedArray.length / 2)
    //if even no. of elements then median will be average of two middle values
    if(sortedArray.length % 2 === 0) {
        outputField.textContent = (sortedArray[mid-1] + sortedArray[mid]) / 2
    } else {//if odd no of values then the middle value is the median
        outputField.textContent = sortedArray[mid]
    }
}
function mean(o) {
    const sumOfArray = sum(2)
    if(o==1) outputField.textContent = (sumOfArray / arr.length).toFixed(3); //to print mean upto 3 decimal points
    else return (sumOfArray / arr.length).toFixed(3);
}
function stddev() {
    const m = mean(2)
    const result = arr.reduce((acc, item) => {
        return acc + Math.pow(item - m, 2)
    }, 0) 
    outputField.textContent = (Math.sqrt(result / arr.length)).toFixed(3)
}

//mapping functions to keyWords


submitButoon.addEventListener('click', () => {
    var operationEntered = selectedOption.value;

    if(arr.length==0){
        alert('Enter a valid input');
    }
    else{
        switch (operationEntered) {
            case "up":
              up(1);
              break;
            case "down":
              down(1);
              break;
            case "min":
               min(1);
              break;
            case "max":
              max(1);
              break;
            case "sum":
              sum(1);
              break;
            case "mean":
              mean(1);
              break;
            case "median":
              median(1);
              break;
            case "std":
              stddev(1);  
          }
    }
    
})