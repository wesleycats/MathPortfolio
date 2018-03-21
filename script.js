var exercises = ["Draw The Line", "Inequality", "Perpendicular Line", "Outercircle", "Innercircle", "Bouncing Ball", "Vector Operations", "Vector Shooter", "To And Fro"];

window.addEventListener('keydown',(evt)=>{
  switch (evt.keyCode) {
    case 37:
      CheckPageTitle();
      break;
    case 39:
      CheckPageTitle();
      break;
  }
});

function CheckPageTitle() {
  for(let i = 0; i < exercises.length; i++)
  {
    if(exercises[i] == document.title)
    {
      console.log(exercises[i] + " at index " + exercises.indexOf(exercises[i]));
    }
  }
}

function ChangePage() {
  
}
