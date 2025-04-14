class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.currentSymbol = [...container.querySelectorAll('.symbol')];
    this.timerCount = document.querySelector('#timer');
    this.intervalID = null;
    this.duration = null;

    this.reset();
    this.registerEvents();

  }


  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timerCount.textContent = 0;
  }

  startTimer() {
    this.timerCount.textContent = this.duration;
    let countTimer = this.duration;
    this.intervalId = setInterval(() => {
      this.timerCount.textContent = String(countTimer--);

      if (countTimer < -1) {
        this.fail();
      }
    }, 1000)
  }

  registerEvents() {
    document.addEventListener( 'keydown', e => {
      const symbol = this.currentSymbol.textContent;
      const getSymbol = (e.key);
      if(getSymbol.toLowerCase() === symbol.toLowerCase()) {
        this.success();
      } else {
        this.fail();
      }
    })
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.duration = word.length;
    this.renderWord(word);
    clearInterval(this.intervalId);
    this.startTimer(this.duration);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))