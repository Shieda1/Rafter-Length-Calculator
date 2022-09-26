// https://www.omnicalculator.com/construction/rafter-length

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const rafterlengthRadio = document.getElementById('rafterlengthRadio');
const riseRadio = document.getElementById('riseRadio');
const runRadio = document.getElementById('runRadio');

let rafterlength;
let rise = v1;
let run = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

rafterlengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Rise';
  variable2.textContent = 'Run';
  rise = v1;
  run = v2;
  result.textContent = '';
});

riseRadio.addEventListener('click', function() {
  variable1.textContent = 'Rafter length';
  variable2.textContent = 'Run';
  rafterlength = v1;
  run = v2;
  result.textContent = '';
});

runRadio.addEventListener('click', function() {
  variable1.textContent = 'Rafter length';
  variable2.textContent = 'Rise';
  rafterlength = v1;
  rise = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(rafterlengthRadio.checked)
    result.textContent = `Rafter length = ${computerafterlength().toFixed(2)}`;

  else if(riseRadio.checked)
    result.textContent = `Rise = ${computerise().toFixed(2)}`;

  else if(runRadio.checked)
    result.textContent = `Run = ${computerun().toFixed(2)}`;
})

// calculation

// rafter length = √(rise² + run²).

function computerafterlength() {
  return Math.sqrt(Math.pow(Number(rise.value), 2) + Math.pow(Number(run.value), 2));
}

function computerise() {
  return Math.sqrt(Math.pow(Number(rafterlength.value), 2) - Math.pow(Number(run.value), 2));
}

function computerun() {
  return Math.sqrt(Math.pow(Number(rafterlength.value), 2) - Math.pow(Number(rise.value), 2));
}