const xhr = new XMLHttpRequest();
const tittleAnswer = document.getElementById('poll__title');
const answersPoll = document.getElementById('poll__answers');

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
xhr.responseType = "text";
xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    const response = JSON.parse(xhr.responseText);
    tittleAnswer.textContent = response.data.title;
    const pollAnswers = [...response.data.answers];
    for(let answer of pollAnswers) {
      const btn = document.createElement('button');
      btn.className = 'poll__answer'
      btn.textContent = answer;
      answersPoll.appendChild(btn);
    }
    const buttonsAnswer = document.querySelectorAll('.poll__answer')
    buttonsAnswer.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const btnIndex = e.target.dataset.index;
        alert('Спасибо, ваш голос засчитан!')
        const voteXhr = new XMLHttpRequest();
        voteXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        let data = `vote=${response.id}&answer=${btnIndex}`;

        voteXhr.setRequestHeader('Content-type',
          'application/x-www-form-urlencoded');
        voteXhr.send(data)
        voteXhr.onload = () => {
          if (voteXhr.status === 201) {
            const statResponse = JSON.parse(voteXhr.responseText);
            let votesSum = statResponse.stat.reduce((sum, item) => sum + Number(item.votes), 0);
            answersPoll.innerHTML = '';
            [...statResponse.stat].forEach(stat => {
              const percent = ((100 / votesSum) * stat.votes).toFixed(0);
              const statAnswer = document.createElement('div');
              statAnswer.innerHTML = `<strong>${stat.answer}</strong>: <span>${percent}%</span>`;
              answersPoll.appendChild(statAnswer);
            })
          }
        }
      })
    })
  }
})








