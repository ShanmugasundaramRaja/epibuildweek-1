let position = 0;

let questions = [
    { "question": "A variable in JS is declared as:", "options": ["let", "Int", "String", "New"] },
    { "question": "Which one is not a Primitive DataType?", "options": ["number", "defined", "boolean", "char"] },
    { "question": "How to call function named foo?", "options": ["foo()();", "foo();", "function foo()", "foo;"] },
    { "question": "Role of JS in Web development?", "options": ["Style", "None", "Structure", "Behaviour"] }
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
        </div>`
}


let nextQuestion = document.getElementById("nextbutton")
nextQuestion.addEventListener("click", function (e) {
    if (position >= questions.length - 1) {
        window.location = "./buildproject.html"
    } else {
        position++
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