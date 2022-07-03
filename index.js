var prevBtns = document.querySelectorAll('.btn-prev');
var nextBtns = document.querySelectorAll('.btn-next');
var progress = document.getElementById('progress');
var formSteps = document.querySelectorAll('.form-step');


let formStepsNum = 0;

for (let index = 0; index < nextBtns.length; index++) {
  const element = nextBtns[index];
  element.addEventListener('click', function() {
    formStepsNum++;
    updateFormSteps();
  })
}

function updateFormSteps() {
  formSteps.forEach( function(formStep) {
    formStep.classList.contains('form-step-active') && formStep.classList.remove('form-step-active');
  })
  formSteps[formStepsNum].classList.add('form-step-active');
}