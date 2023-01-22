const buttonLength = document.querySelectorAll(".drum").length;
for (var i=0; i<buttonLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        this.style.color = "white";



        // var var1 = document.querySelector(".drum").innerHTML;
// switch(var1){
//     case (var1==="w") :{
//         let audio = new Audio("./sounds/tom-1.mp3");
//         audio.play();
//         break;}
//     case (var1==="a") : {
//         let audio = new Audio("./sounds/tom-2.mp3");
//         audio.play();
//         break;
//     }
//     case (var1==="s") : {
//         let audio = new Audio("./sounds/tom-3.mp3");
//         audio.play();
//         break;
//     }
//     case (var1==="d") : {
//         let audio = new Audio("./sounds/tom-4.mp3");
//         audio.play();
//         break;
//     }
//     case (var1==="j") : {
//         let audio = new Audio("./sounds/crash.mp3");
//         audio.play();
//         break;
//     }
//     case (var1==="k") : {
//         let audio = new Audio("./sounds/snare.mp3");
//         audio.play();
//         break;
//     }
//     case (var1==="l") : {
//         let audio = new Audio("./sounds/kick-bass.mp3");
//         audio.play();
//         break;
//     }
// }

    });

}


