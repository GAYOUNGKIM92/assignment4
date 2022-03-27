
function OpenMenu(){
    document.getElementById("mySidebar").style.height = "100%";
    document.querySelector('nav>ul').style.display = "block";
}

function CloseMenu() {
    document.querySelector('nav>ul').style.display = "none";
    document.getElementById("mySidebar").style.height = "0";
}

function ShowSpecific(work){
  document.getElementById('modal').style.display = "block";
  var image = document.getElementById('modalImage');
  var explanation = document.querySelector("#modal>div>p");
  switch(work){
    case "work1":
      image.src = "images/g1.jpg";
      explanation.innerHTML = "In this work, my team analyze the effectiveness of a simple neural network for the task of determining, by sound, if small unmanned vehicles are carrying potentially harmful payloads. <br> I attended an woman scientist and enginner conference and presented by project<br>" ;
      break;
    case "work2":
      image.src = "images/g2.jpg";
      explanation.innerHTML = "I entered the mock imo assembly and presented agenda about fouling";
      break;
    case "work3":
      image.src = "images/g3.jpg";
      explanation.innerHTML = "I did team project for 2 months at purdue university.";
      break;
    case "work4":
      image.src = "images/g4.jpg";
      explanation.innerHTML = "I made this clock for my cad term project using catia 3d modeling program<br> ";
      break;    
    case "work5":
      image.src = "images/g5.jpg";
      explanation.innerHTML = "I made this forestry truck for my term project using creo 3d modeling program";
      break;
    default:
      image.src = "images/g6.jpg";
      explanation.innerHTML = "When I was watching a sports game, I was inspired by the audience cheering for the team with cell phone lights and created a cheering app using cell phone lights. This is the principle of inserting a high frequency into the cheering song to light up when the application recognizes the high frequency.";
  }
}

window.onclick = windowOnclick;
function windowOnclick(event) {
  if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = "none";
  }
}