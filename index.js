var n=document.querySelectorAll("button");
for(var i=0;i<n.length;i++)
{

  n[i].addEventListener("click", function (){
    var expression=this.innerHTML;
       /*to present object this w a s d j k l we cannot write n[i].innerHTML because loop is for adding listener when it is called we dont know the value of i thats why this is use to select current object and its property innerHTML*/
    switch(expression)
    {
      case "w":
                var a=new Audio("sounds/crash.mp3");
                a.play();
                break;
      case "a":
                var a=new Audio("sounds/kick-bass.mp3");
                a.play();
                break;
      case "s":
                var a=new Audio("sounds/snare.mp3");
                a.play();
                break;
      case "d":
                var a=new Audio("sounds/tom-1.mp3");
                a.play();
                break;
      case "j":
                var a=new Audio("sounds/tom-2.mp3");
                a.play();
                break;
      case "k":
                var a=new Audio("sounds/tom-3.mp3");
                a.play();
                break;
      case "l":
                var a=new Audio("sounds/tom-4.mp3");
                a.play();
                break;
      default:  console.log(expression);

    }
      buttonAnimation(expression);
  }
  );
}






/*using keyboard button*/















  document.addEventListener("keypress", function (event){   /*annymous function and we are the object naming event*/
     /*to present object this w a s d j k l we cannot write n[i].innerHTML because loop is for adding listener when it is called we dont know the value of i thats why this is use to select current object and its property innerHTML*/

    switch(event.key)
    {
      case "w":
                var a=new Audio("sounds/crash.mp3");
                a.play();
                break;
      case "a":
                var a=new Audio("sounds/kick-bass.mp3");
                a.play();
                break;
      case "s":
                var a=new Audio("sounds/snare.mp3");
                a.play();
                break;
      case "d":
                var a=new Audio("sounds/tom-1.mp3");
                a.play();
                break;
      case "j":
                var a=new Audio("sounds/tom-2.mp3");
                a.play();
                break;
      case "k":
                var a=new Audio("sounds/tom-3.mp3");
                a.play();
                break;
      case "l":
                var a=new Audio("sounds/tom-4.mp3");
                a.play();
                break;
      default:  console.log(expression);

    }
    buttonAnimation(event.key);
  }
  );


/*** creating a funtion that change the animation*/

function buttonAnimation(calls)
{
  var expression=calls;
  document.querySelector("."+expression).classList.add("pressed");   /***adding pressed class to element which is clicked or pressed*/
  setTimeout(function(){document.querySelector("."+expression).classList.remove("pressed");},100);
}



  /******self created addEventListener function *///


//   function anotherAddEventListener(typOfEvent,callback)
// {
//     /**creating a  event object after every event*/
//     var eventThatHappened={
//         eventType:"keypress",
//         noOfselect:2,
//         key:"p",
//     }
//     if(eventThatHappened.eventType==typeOfEvent)
//     {
//         callback(eventThatHappened);
//     }
// }
