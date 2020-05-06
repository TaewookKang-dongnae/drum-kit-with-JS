var drums =document.querySelectorAll(".drum");

for(var i =0; i < drums.length; ++i) 
{
    drums[i].addEventListener('keypress', (event) => {
        playSound(event.key);
        buttonAnimation(event.key)
    });

    drums[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

function playSound(key){
    switch (key) {
        case 'w': {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }

        case 'a': {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case 's': {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case 'd': {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        case 'j': {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case 'k': {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }
        case 'l': {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.toggle("pressed");

    setTimeout(function() {
        activeButton.classList.toggle("pressed");
    }, 100);
}