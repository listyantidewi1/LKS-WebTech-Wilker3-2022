function myMove() {
    start = document.getElementById("start");
    start.remove();
    let id = null;
    const elem = document.getElementById("runner");   
    let pos = 0;
    let up = 100;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 4700) {
        clearInterval(id);
      } else {
        pos++; 
        //elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
        document.addEventListener("keydown", function (e) {
          // left arrow key
          if (e.which === 38) {
            keydown = true;
            elem.style.bottom = (up + 25) + "px"; 
          }
          // right arrow key
          else if (e.which === 40) {
            keydown = true;
            elem.style.bottom = (up - 25) + "px"; 
          }
        });
      }
    }
  }