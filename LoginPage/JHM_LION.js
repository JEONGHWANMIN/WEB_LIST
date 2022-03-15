const buttons = document.querySelectorAll('.socioal-button');
const loginCheck = document.querySelector('.login-check');

const [google, facebook, naver, kakao] = buttons;

// Loin MainTain Check
let mainTainLogined = true;

function loginCheckEvent(e, state) {
  if (state === true) {
    e.target.src = 'http://127.0.0.1:5500/JHM_LION_img/icon_check.png';
    mainTainLogined = false;
  } else if (state === false) {
    e.target.src = 'http://127.0.0.1:5500/JHM_LION_img/icon_check_empty.png';
    mainTainLogined = true;
  }
}

loginCheck.addEventListener('click', (e) => {
  loginCheckEvent(e, mainTainLogined);
});

// button click event
function moveHomePage(url) {
  location.href = url;
}

google.addEventListener('click', () => {
  moveHomePage('https://www.google.com/');
});
facebook.addEventListener('click', () => {
  moveHomePage('https://www.facebook.com/');
});
naver.addEventListener('click', () => {
  moveHomePage('https://www.naver.com/');
});
kakao.addEventListener('click', () => {
  moveHomePage('https://www.kakaocorp.com/page/');
});
