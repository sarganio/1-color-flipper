const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
//generate a random index from the range of it length
const randomIndex = Math.floor(Math.random() * colors.length);
//set the color in background to the random color picked earlier
document.body.style.backgroundColor = colors[randomIndex];
//change the name of the color in the page accordingly
color.textContent = colors[randomIndex];
console.log(randomIndex);
});
