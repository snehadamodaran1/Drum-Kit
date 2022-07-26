// document.querySelector("button").addEventListener("click",handleClick) //Dont put parenthesis cause it will be a function call and not a like passing a function as an input 
// function handleClick(){
//     alert("Hey sneha")
// }  OR
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0 ; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        console.log(this.innerHTML)
        switch (this.innerHTML){
            case "w": 
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            case "a": 
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            case "s": 
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            case "d": 
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
        }

    })
}