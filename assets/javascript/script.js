const hideWords = () =>
    onmouseover



op Nav bar gloabl variables from HTML elements

const navBarTop = document.getElementsByClassName('li');

const navBarTopLinks = () => {

}


navBarTop.addEventListener('click', clearNames)

resumeLink = () => {
    document.getElementById('resume-link').href= "https://www.cnn.com/";
    
}
resumeLink.addEventListener('click');

// Global variables from HTML elements
const randomNameButton = document.getElementById('random-names-button');
const clearButton = document.getElementById('clear-list');
const ol = document.getElementById('names-list');


// Function to generate random names
const generateNames = () => {
    ol.innerHTML = '';

    //Get number value form input
    let numOfNames = document.getElementById('number-of-names').value;

    // Get text box from HTML
    let textBox = document.getElementById('text-box');
    //Get names from text box and separate them at each comma and put them in an array
    let namesArr = textBox.value.split(',');

    //Select random name form namesArray
    if(numOfNames > namesArr.length) {
        alert('Please enter a number less than the total names')
    } else {
        for(let i = 0; i < numOfNames; i++) {
            let randomName = namesArr[Math.floor(Math.random() * namesArr.length)];
            let li = document.createElement('li')
            li.innerHTML = randomName
            ol.appendChild(li)
        }
    }

    //Build names list in browser
}


//Clear function
const clearNames = () => {
    ol.innerHTML = '';
}


// Button click events

randomNameButton.onclick = generateNames;
clearButton.addEventListener('click', clearNames)