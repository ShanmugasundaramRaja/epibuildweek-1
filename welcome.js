function proceed() {
    let checkbox = document.getElementById("checkbox")
    let proceed = document.getElementById("button")
    proceed.addEventListener("click", function (e) {
        if (checkbox.checked === false) {
            alert("Please make sure that checkbox is checked to proceed!")
        } else if (checkbox.checked === true) {
            location.href = "questionPage.html"
        }
    })
}

window.onload = function (e) {
    proceed();
}


