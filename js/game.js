var attempts = 1;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var target = ev.target;

  if (target.classList.contains("image-container")) {
    target.appendChild(document.getElementById(data));
    attempts--;
  }
}

function checkWin() {
  var imageContainers = document.querySelectorAll('.image-container');
  var win = true;
  
  for (var i = 0; i < imageContainers.length; i++) {
    if (!imageContainers[i].contains(document.getElementById('img' + (i + 1)))) {
      win = false;
      break;
    }
  }

  if (win && attempts === 0) {
    document.getElementById("winMessage").innerText = "Congratulations! You won a discount!";
  } else {
    document.getElementById("winMessage").innerText = "Sorry, you did not win this time.";
  }
}
