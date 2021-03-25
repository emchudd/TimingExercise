//Timing Events/Methods Exercise

//1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

//2
setTimeout(() => {
const divTM = document.querySelector(`#timeout-nesting`);
const p1 = document.createElement(`p`);
p1.innerText = `One`;
div1.append(p1);

setTimeout(() => {
    const p2 = document.querySelector(`p`);
    p2.innerText = `Two`;
    divTM.append(p2);
  }, 1000);
}, 2000);

//3a
let time = 0;
const clock = setInterval(() => {
    console.log(time);
    time++;
}, 1000);
//3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(clock);
});

//BONUS
//4
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 120;

setInterval(() => {
    startingSeconds--;
    p4.innerText = Math.floor(startingSeconds % 60);
    p4.innerText

}, 1000);