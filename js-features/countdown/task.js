document.addEventListener("DOMContentLoaded", () => {
  let startTimer = document.getElementById('timer');

  let countTimer = Number(startTimer.textContent)
  let intervalID = setInterval(() => {
    startTimer.textContent = String(countTimer);
    countTimer--;

    if (countTimer < 0) {
      clearInterval(intervalID);
      setTimeout(() => {alert('Вы выиграли')}, 0)
    }
  }, 1000);


  let startTimerHh = document.getElementById('hh');
  let startTimerMm = document.getElementById('mm');
  let startTimerSs = document.getElementById('ss');

  let countTimerHh = Number(startTimerHh.textContent);
  let countTimerMm = Number(startTimerMm.textContent);
  let countTimerSs = Number(startTimerSs.textContent);

  let intervalIdTwo = setInterval(() => {
    startTimerHh.textContent = String(countTimerHh);
    startTimerMm.textContent = String(countTimerMm);
    startTimerSs.textContent = String(countTimerSs);
    countTimerSs--;

    if(countTimerHh === 0 && countTimerMm === 0 && countTimerSs <= 0) {
      clearInterval(intervalIdTwo);

      setTimeout(() => {
        alert('Вы снова выиграли))')
        const link = document.createElement('a');
        link.href = "https://impult.ru/preview/r/456x456/upload/iblock/6da/w83h460byaflbly4y0lvgz5umtaxzlsg.jpg";
        link.download = '1.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); /*не получается реализовать начало загрузки файла,
         буду благодарен если подскажите в чем причина*/
      }, 0)
    }

    if(countTimerSs < 10) {
      startTimerSs.textContent = countTimerSs.toString().padStart(2, '0')
    }

    if(countTimerMm < 10) {
      startTimerMm.textContent = countTimerMm.toString().padStart(2, '0')
    }

    if(countTimerHh < 10) {
      startTimerHh.textContent = countTimerHh.toString().padStart(2, '0')
    }


    if(countTimerSs <= 0) {
      countTimerMm--;
      countTimerSs = 59;
    } if(countTimerMm < 0) {
      countTimerHh--;
      countTimerMm = 59;
    }
  },1000)
})



/*
for(let i = startTimer; i <= 0; i--) {
  alert()
}
*/
