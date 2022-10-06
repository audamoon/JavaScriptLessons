function messagesDemo() {

    let userAnswer = confirm("Do you want to enter your name?");

    if (userAnswer == true) {
        let userName =prompt("What is your name?", "enter your name here");

        if (userName != null) {
            alert(`Hello, ${userName}! :D`);
        } else {
            alert("Error, try again >:c");
        }

    } else {
        alert("Okay, sorry :c");
    }
    
    
    
};
/*
Или можно использовать 
document.getElementById('elementId').function name(params) {
    
}
и добавить id к тегу <button>
*/