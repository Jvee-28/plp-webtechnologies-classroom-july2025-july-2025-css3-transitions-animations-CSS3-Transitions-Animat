let animationActive = false;

function calculateSize(base, factor) {
  return base * factor; // Demonstrating return value
}

function toggleAnimation(element) {
  animationActive = !animationActive;
  if (animationActive) {
    element.classList.add('animated-box');
  } else {
    element.classList.remove('animated-box');
  }
}

document.getElementById('animateBtn').addEventListener('click', function() {
  const box = document.getElementById('box');
  toggleAnimation(box);
  console.log("Calculated size:", calculateSize(100, 1.5));
});
