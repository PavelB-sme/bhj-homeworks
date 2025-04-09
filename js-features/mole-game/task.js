let deathCounter = document.getElementById("dead");
let missCounter = document.getElementById("lost");


function getHole() {
  for (let i = 1; i <= 9; i++) {
    let hole = document.getElementById(`hole${i}`)
    hole.addEventListener('click', () => {
      if (hole.classList.contains('hole_has-mole')) {
        deathCounter.textContent = String(Number(deathCounter.textContent) + 1);
      } else {
        missCounter.textContent = String(Number(missCounter.textContent) + 1);
      }
      if(Number(deathCounter.textContent) === 10) {
        stop();
        alert('Вы победили');
        deathCounter.textContent = '0';
        missCounter.textContent = '0';
      }
      if (Number(missCounter.textContent) === 5) {
        stop();
        alert('Вы проиграли');
        deathCounter.textContent = '0';
        missCounter.textContent = '0'
      }
    })
  }
}
getHole();









