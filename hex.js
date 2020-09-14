const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const HEX_LEN = 6;
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
  let randomColor = "#";
  //generate a random hex number of length HEX_LEN
  for(let i=0;i<HEX_LEN;i++)
    randomColor += hex[Math.floor(Math.random()*hex.length)];
  //set the color in background to the random color picked earlier
  document.body.style.backgroundColor = randomColor;
  //change the name of the color in the page accordingly
  color.textContent = randomColor;
  //console.log(randomColor);//for D'bug
});
