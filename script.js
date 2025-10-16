'use stric'

// GENERATOR

const input = document.getElementById('input');
const weekday = document.querySelector('.weekday');
const result = document.querySelector('.result');
const displayTitle = document.querySelector('.display-title');
const display = document.querySelector('.display');
const btnReset = document.querySelector('.btn-reset');



const week = {
  monday: ['Today is going to be blue =(', 'It can all fall apart', "Today's black", 'Hold your head'],
  tuesday: ["Today's gonna be grey", "It's going to break your heart", "Be careful of heart attacks", "Let's stay in bed"],
  wednesday: ["Today's grey, just like Tuesday", "Your heart it's going to be broken", "Did you have a heart attack?", "Just stay in bed"],
  thursday: ["We don't care about thursdays", "Let's not even start", "Don't look back!", "Maybe watch the walls"],
  friday: ["You're in love!"],
  saturday: ["WAIT", "WAAAIT"],
  sunday: ["Too late now"],
};

const calcNumber = (arrLength) => Math.floor(Math.random() * arrLength);

const toggleHidden = () => {
  result.classList.toggle('hidden');
  weekday.classList.toggle('hidden');
  input.classList.toggle('hidden');
  displayTitle.classList.toggle('hidden');
};

input.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    let day = input.value.toLowerCase();
    let i;
    let phrase;

    const returnPhrase = (dayInput) => {
      const arr = week[dayInput];

      if(!arr) {
        alert('Please enter a valid weekday');
        input.value = '';
        input.blur();
        day = '';
        return;
      };

      i = calcNumber(arr.length);
      phrase = week[dayInput][i];
      result.textContent = phrase;
      weekday.textContent = day.toUpperCase();
      toggleHidden();

      if(day === 'friday') display.classList.add('correct');

      input.value = '';
      day = '';
      phrase = '';
    }

    returnPhrase(day);

    // switch(day) {
    //   case 'monday':
    //     i = calcNumber(week.monday.length);
    //     phrase = week.monday[i];
    //     break;
    //   case 'tuesday':
    //     i = calcNumber(week.tuesday.length);
    //     phrase = week.tuesday[i];
    //     break;
    //   case 'wednesday':
    //     i = calcNumber(week.wednesday.length);
    //     phrase = week.wednesday[i];
    //     break;
    //   case 'thursday':
    //     i = calcNumber(week.thursday.length);
    //     phrase = week.thursday[i];
    //     break;
    //   case 'friday':
    //     i = calcNumber(week.friday.length);
    //     phrase = week.friday[i];
    //     break;
    //   case 'saturday':
    //     i = calcNumber(week.saturday.length);
    //     phrase = week.saturday[i];
    //     break;
    //   case 'sunday':
    //     i = calcNumber(week.sunday.length);
    //     phrase = week.sunday[i];
    //     break;
    //   default:
    //     alert('Please enter a valid weekday');
    //     return;
    // }
    
    // result.textContent = phrase;
    // weekday.textContent = day.toUpperCase();
    // toggleHidden();

    // if(day === 'friday') display.classList.add('correct');

    // input.value = '';
    // day.value = '';
    // phrase = '';
  }});


// MUSIC PLAYER

const song = document.querySelector('.song');
const progress = document.querySelector('.progress');
const playBtn = document.querySelector('.btn-play');
const iconPlayPause = document.getElementById('icon-play-pause');
const btnBackwards = document.querySelector('.btn-backwards');
const btnFoward = document.querySelector('.btn-foward');

song.addEventListener('loadeddata', () => {
  progress.max = song.duration;

  console.log(song.duration)
  progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    if (iconPlayPause.getAttribute('name') === 'play') iconPlayPause.setAttribute('name', 'pause');
  };

  song.ontimeupdate = () => {
    progress.value = song.currentTime;
  };

  playBtn.addEventListener('click', () => {
  if(song.paused) {
    song.play();
    iconPlayPause.setAttribute('name', 'pause');
    setInterval(()=>{
    progress.value = song.currentTime;
  }, 1000)
  } else {
    song.pause();
    iconPlayPause.setAttribute('name', 'play');
  };
  });

  btnBackwards.addEventListener('click', () => {
    song.currentTime-= 10;
  });
  btnFoward.addEventListener('click', () => {
    song.currentTime+= 10;
  });
});


// RESET BUTTON

btnReset.addEventListener('click', () => {
  result.textContent = '';
  weekday.textContent = '';
  toggleHidden();
  display.classList.remove('correct');
});