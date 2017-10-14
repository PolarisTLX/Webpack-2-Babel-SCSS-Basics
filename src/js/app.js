import '../css/main.scss';
import '../users.html';
import { RandomGenerator } from './random-generator';
import 'jquery';


// const outputParagraph = document.querySelector('#outputParagraph');
//jquery version of above, just replace document.querySelector with the $
const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    // outputParagraph.textContent = RandomGenerator.randomInteger();
    //jQuery version:
    outputParagraph.text (RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    // outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
    ////jQuery version:
    outputParagraph.text (RandomGenerator.randomRange(1, 500));
};

// const buttonRndInt = document.querySelector('#randomInt');
// const buttonRndRange = document.querySelector('#randomRange');
//jQuery version:  ("jQuery" instead of the $ ???")
const buttonRndInt = jQuery('#randomInt');
const buttonRndRange = jQuery('#randomRange');

// buttonRndInt.addEventListener('click', outputRandomInt);
// buttonRndRange.addEventListener('click', outputRandomRange);
//jQuery version:
buttonRndInt.click(outputRandomInt);
buttonRndRange.click(outputRandomRange);
