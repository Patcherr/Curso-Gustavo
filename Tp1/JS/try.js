window.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("displayvalue");
  const buttons = Array.from(document.querySelectorAll(".number,.operator, .decimal"));
  const calculateBtn = document.getElementById("calculate");
  const clearBtn = document.getElementById("clear");

  function eventButtom(event){
    const buttomValue = event.target.innerText
    display.innerHTML += buttomValue
  }


  buttons.forEach(function(button)  {
    button.addEventListener("click", eventButtom) 
          
  });

  calculateBtn.addEventListener("click", function() {
    try {
      display.innerHTML = eval(display.innerHTML);
    } catch (error) {
      display.innerHTML = "Error";
    }
  });

  clearBtn.addEventListener("click", function() {
    display.innerHTML = "";
  });
});
