// Menu functions
// https://www.w3schools.com/howto/howto_js_progressbar.asp
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function newLife() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innnerText = option.text
            button.classList.add('optBtn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return newLife()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Wooo, a child is born! Welcome to the world Tina. It is important to make a good first impression little one.',
        options: [
            {
                text: 'Scream',
                setState: { scream: true},
                nextText: 2
            },
            {
                text: 'Cry',
                setState: { cry: true},
                nextText: 2
            },
            {
                text: 'Stay quiet',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You arrive home with your parents from the hopsital.',
        options: [
            {
                text: 'Have a bottle',
                requiredState: (currentState) => currentState.hunger,
                setState: {hunger: false},
                nextText: 3
            },
            {
                text: 'Go to sleep',
                requiredState: (currentState) => currentState.sleepy,
                setState: {sleepy: false},
                nextText: 3
            }
        ]
    }
]
newLife()

function sound() {
// need to mute and unmute the website
}

function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}

function openWin() {
    window.open("", "myWindow", "width=200, height =100"); // Opens a new window
}

function closeWin() {
    window.close(); // Closes the new window
}