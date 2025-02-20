function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
   boxesContainer.innerHTML = '';
   let boxSize = 30;
  let boxes = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      boxSize += 10; 
    }

    boxesContainer.append(...boxes);
  }

    function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; 
  }

   document.querySelector('[data-create]').addEventListener('click', () => {
    const input = document.querySelector('input');
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    }

    input.value = '';
  });

  document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
