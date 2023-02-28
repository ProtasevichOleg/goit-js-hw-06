const fontSizeRangeControllerEl = document.querySelector('#font-size-control');

const textOnControl = document.querySelector('#text');

textOnControl.style.fontSize = '16px';
fontSizeRangeControllerEl.value = 16;

const onRangeControl = () => {
  textOnControl.style.fontSize = `${fontSizeRangeControllerEl.value}px`;
};

fontSizeRangeControllerEl.addEventListener('input', onRangeControl);
