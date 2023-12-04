let intervalId;
let colors = [];
let currentIndex = 0;

function startColorChange() {
  colors = [
    document.getElementById('color1').value,
    document.getElementById('color2').value,
    document.getElementById('color3').value
  ];

  let interval = document.getElementById('interval').value * 1000;

  changeBackgroundColor(interval);
}

function changeBackgroundColor(interval) {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }, interval);
}

function stopColorChange() {
  clearInterval(intervalId);
}