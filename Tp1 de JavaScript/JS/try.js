document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".number, .operator, .decimal");
    const calculateBtn = document.getElementById("calculate");
    const clearBtn = document.getElementById("clear");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function() {
        const value = button.textContent;
        display.value += value;
      });
    });
  
    calculateBtn.addEventListener("click", function() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    });
  
    clearBtn.addEventListener("click", function() {
      display.value = "";
    });
  });
  