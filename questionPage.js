let position = 0
let quesNum = 1

let questions = [
    { "question": "A variable in JS is declared as:", "options": ["let", "Int", "String", "New"] },
    { "question": "Which one is not a Primitive DataType?", "options": ["number", "defined", "boolean", "char"] },
    { "question": "How to call function named foo?", "options": ["foo()();", "foo();", "function foo()", "foo;"] },
    { "question": "Role of JS in Web development?", "options": ["Style", "None", "Structure", "Behaviour"] },
    { "question": "Tag used to set text for Title?", "options": ["title", "header", "heading", "head"] },
    { "question": "Attribute used to add link to <a>?", "options": ["target", "alt", "href", "src"] },
    { "question": "HTML tages are wrapped by?", "options": ["< and >", "[ and ]", "<? and >", "{ and }"] },
    { "question": "Tag used to create drop-down list?", "options": ["<select>", "<list>", "<option>", "<dropdown>"] },
    { "question": "Rule that is more specific important?", "options": [".test.second", ".test div p", "#myid", ".test div"] },
    { "question": "Which is NOT a valid value for height?", "options": ["100%", "100px", "100vh", "100wn"] }
]

const displayQuestions = function () {
    let questionNode = document.querySelector(".questions");
    questionNode.style.display = "visible"
    let questionNum = questions[position];
    questionNode.innerHTML = `
        <div class="questions${position}">
            <p>${questionNum.question}</p>
            <div id="answer-buttons" class="btn-grid">
                <input type="button" class="button1" value="${questionNum.options[0]}" />
                <input type="button" class="button2" value="${questionNum.options[1]}" />
                <input type="button" class="button3" value="${questionNum.options[2]}" />
                <input type="button" class="button4" value="${questionNum.options[3]}" />
            </div>
        </div>
        
        <div class="footer-text">
        <footer>QUESTION ${quesNum} <span>/ 10</span></footer>
        </div>`
}


let nextQuestion = document.getElementById("nextbutton")
nextQuestion.addEventListener("click", function (e) {
    if (position >= questions.length - 1) {
        window.location = "./buildproject.html"
    } else {
        position++
        quesNum++
        displayQuestions()
    }
})

window.onload = function () {
    displayQuestions()
}




/*function next() {
    let nextbutton = document.getElementById("nextbutton")
    let option1 = document.getElementById("option1")
    let option2 = document.getElementById("option2")
    let option3 = document.getElementById("option3")
    let option4 = document.getElementById("option4")

    nextbutton.addEventListener("click", function (e) {
        location.href = "questionPage2.html"
    })
}

window.onload = function (e) {
    next();
}*/