let pos = 0;

let questions = [
    { "question": "A variable in JS is declared as:", "options": ["let", "Int", "String", "New"], "answer": "let" },
    { "question": "Which one is not a Primitive DataType?", "options": ["char", "defined", "boolean", "number"], "answer": "char" },
    { "question": "How to call function named foo?", "options": ["foo()();", "foo();", "function foo()", "foo;"], "answer": "push()" },
    { "question": "Role of JS in Web development?", "options": ["Style", "None", "Structure", "Behaviour"], "answer": "Behaviour" }
];

const displayQuestions = function () {
    let wrap = document.querySelector(".questions");
    wrap.style.display = "visible"
    const question = questions[pos];
    wrap.innerHTML = `
        <div class="questions${pos}">
            <p>${question.question}</p>
            <div id="answer-buttons" class="btn-grid">
                <input type="button" class="button1" value="${question.options[0]}" />
                <input type="button" class="button2" value="${question.options[1]}" />
                <input type="button" class="button3" value="${question.options[2]}" />
                <input type="button" class="button4" value="${question.options[3]}" />
            </div>
        </div>`;
}

function next() {
    let nextQuestion = document.getElementById("nextbutton")
    nextQuestion.addEventListener("click", function (e) {
        pos++
        displayQuestions()
    })
}

next()




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