// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import rules from './modules/rules';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
rules();

const fullPageScroll = new FullPageScroll();
const body = document.body;

fullPageScroll.init();
// introTitleString.prepareText();

window.addEventListener('load', () => {
    body.classList.add('page__ready');

    // let paths = document.querySelectorAll('.result--negative path');

    // console.log(paths);

    // paths.forEach((path) => {
    //     console.log(path.getTotalLength());
    // })
});
