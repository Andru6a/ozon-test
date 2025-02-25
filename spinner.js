const valueInput = document.querySelector('.spinner__control-input--number');
const ckeckboxes = document.querySelectorAll('input[type="checkbox"]');

const spinner = document.querySelector('.spinner__svg');
const spinnerSvg = document.querySelector('.spinner__svg svg');

// default values on loading
ckeckboxes[0].checked = true;
spinnerSvg.style.animation = 'rotation 2s linear infinite';
valueInput.value = 60;


function hide(checked) {
  if (checked) {
    spinner.style.visibility = 'hidden';
    spinner.style.opacity = '0';
  } else {
    spinner.style.visibility = 'visible';
    spinner.style.opacity = '1';
  }
}

function animation(checked){
  if (!checked) {
    spinnerSvg.classList.add('paused');
  } else {
    spinnerSvg.classList.remove('paused');
  }
}

function changeValue(value) {
  const circle = spinner.querySelector('circle');
  
  circle.style.strokeDashoffset = `${350-350*value/100+3}`;
}

ckeckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    if (e.target.getAttribute('data-input') === 'Hide') {
      hide(e.target.checked);
    }
    if (e.target.getAttribute('data-input') === 'Animate') {
      animation(e.target.checked);
    }
    if (e.target.getAttribute('data-input') === 'Animate') {
    }
  });
});

valueInput.addEventListener('input', (e) => {
  const value = e.target.value;
  let valueValidate = 0;

  if(value >= 100){
    e.target.value = 100;
    valueValidate = 100;
  } else if(value <= 0 || value === 0 || value.substr(0, 1) == 0){
    e.target.value = 0;
    valueValidate = 0;
  } else {
    valueValidate = value;
  }
  changeValue(valueValidate);
});
