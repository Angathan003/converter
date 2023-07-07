let select = document.querySelectorAll('.currency');
let btn = document.getElementById('btn');
let input = document.getElementById('input');

fetch('https://api.frankfurter.app/currencies')
  .then(res => res.json())
  .then(res => dropdown(res));

function dropdown(res) {
  let cur = Object.entries(res);
  for (let currency of cur) {
    let opt = `<option value="${currency[0]}">${currency[0]}</option>`;
    select[0].innerHTML += opt;
    select[1].innerHTML += opt;
  }
}

btn.addEventListener('click', () => {
  let cur1 = select[0].value;
  let cur2 = select[1].value;
  let inputVal = input.value;
  if (cur1 === cur2) {
    alert('Please select different currencies.');
  } else {
    convert(cur1, cur2, inputVal);
  }
});

function convert(cur1, cur2, inputVal) {
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${cur1}&to=${cur2}`)
    .then(resp => resp.json())
    .then(data => {
      document.getElementById('result').value = Object.values(data.rates)[0];
    });
}
