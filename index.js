for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    btnAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var w = new Audio("sound/crash.mp3");
      w.play();
      break;
    case "a":
      var a = new Audio("sound/kick-bass.mp3");
      a.play();
      break;
    case "s":
      var s = new Audio("sound/snare.mp3");
      s.play();
      break;
    case "d":
      var d = new Audio("sound/tom-1.mp3");
      d.play();
      break;
    case "j":
      var j = new Audio("sound/tom-2.mp3");
      j.play();
      break;
    case "k":
      var k = new Audio("sound/tom-3.mp3");
      k.play();
      break;
    case "l":
      var l = new Audio("sound/tom-4.mp3");
      l.play();
      break;
  }
}

function btnAnimation(key) {
  var button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
