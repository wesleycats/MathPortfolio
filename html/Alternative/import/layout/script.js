const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function Update() {
  requestAnimationFrame(Update);

  context.clearRect(0,0,800,450);
}

Update();
