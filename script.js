let flexContainer = document.getElementById('flexContainer');
flexContainer.style.display = 'flex';
flexContainer.style.flexDirection = 'column';
flexContainer.style.alignItems = 'center';

let container = document.getElementById('container');
container.style.width = '600px';
container.style.height = '600px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

for (let i = 0; i < 100; i++) {
  let box = document.createElement('box');
  box.classList.add('boxes');
  container.appendChild(box);
  box.style.display = 'flex';
  box.style.outline = '1px solid black';
  box.style.width = '10%';
  box.style.height = '10%';
  box.onmouseover = function () {
    box.style.backgroundColor = 'black';
  };
};

let boxRef = document.getElementsByClassName('boxes');

function wipe () {
  while (boxRef.length > 0)
  boxRef[0].remove();
};

let refreshBtn = document.querySelector('#refresh');
refreshBtn.style.padding = '2%';
refreshBtn.style.marginTop = '1%';
refreshBtn.style.fontSize = '200%'
refreshBtn.style.backgroundColor = 'beige';

refreshBtn.addEventListener('click', () => {
  wipe();
  let newCanvasStr = prompt('Enter canvas length/width between 1-100');
  let newCanvasNum1 = Number(newCanvasStr);
  let newCanvasNum2 = Math.round(newCanvasNum1)
  let newDimensions = (100 / newCanvasNum2 + '%');
  if (isNaN(newCanvasNum2) || newCanvasNum2 > 100 || newCanvasNum2 < 1) {
    alert('Input must be a number between 1-100');
  }
  else {
    for (let i = 0; i < (newCanvasNum2 * newCanvasNum2); i++) {
      let box = document.createElement('box');
      box.classList.add('boxes');
      container.appendChild(box);
      box.style.display = 'flex';
      box.style.outline = '1px solid black';
      box.style.width = newDimensions;
      box.style.height = newDimensions;
      box.onmouseover = function () {
        box.style.backgroundColor = 'black';
      }
    };
  };
});