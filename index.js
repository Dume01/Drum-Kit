
var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++) //querySelectorAll("button").length This gives the length of the number of query with button as tag
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    console.log(this.innerHTML);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(event){
  var buttonInnerHTML=event.key;
  console.log(buttonInnerHTML);
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});


function makeSound(k)
{
  switch (k) {
    case 'w':
              var audio=new Audio('sounds/tom-1.mp3');
              audio.play();
              break;
    case 'a':
              var audio=new Audio('sounds/tom-2.mp3');
              audio.play();
              break;
    case 's':
              var audio=new Audio('sounds/tom-3.mp3');
              audio.play();
              break;
    case 'd':
              var audio=new Audio('sounds/tom-4.mp3');
              audio.play();
              break;
    case 'j':
              var audio=new Audio('sounds/snare.mp3');
              audio.play();
              break;
    case 'k':
              var audio=new Audio('sounds/crash.mp3');
              audio.play();
              break;
    case 'l':
              var audio=new Audio('sounds/kick-bass.mp3');
              audio.play();
              break;
    default:
              console.log("Wrong Input");
  }
}

function buttonAnimation(k)
{
  var activeBut = document.querySelector("."+k);
  activeBut.classList.add("pressed");
  setTimeout(function(){activeBut.classList.remove("pressed");},100);
}
