
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {

        var keys = this.innerHTML;

        playSound(keys);

        buttonAnimation(keys);
        
    });
}

document.addEventListener("keydown", function(event) {
    
    playSound(event.key);

    buttonAnimation(event.key);
})

function playSound(key) {

    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "g":
            var tom5 = new Audio("sounds/tom-5.mp3");
            tom5.play();
            break;  

        case "h":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default: console.log(keys);
    }

}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." +currentKey);

    activeButton.classList.add("pressed");

    setTimeout (function() {
        activeButton.classList.remove("pressed");
    }, 100);

}