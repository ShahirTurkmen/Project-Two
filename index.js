const modal = document.querySelector("#modal");
const img12 = document.querySelectorAll("#img12");
const closeButton = document.getElementById("closeButton");
const overlay = document.querySelector("#overlay");
const modal1 = document.querySelector("#modal1");
const overlay1 = document.querySelector("#overlay1");
const login = document.querySelector('.login');
const img2 = document.querySelector('#img2');
const taskbar = document.querySelector('.taskbar');
const submit = document.querySelector('#submit');
const webweb = document.querySelector('.webweb');
const webweb1 = document.querySelector('.webweb1');
const img = document.querySelector('#img');
const inputPassword = document.querySelector('#password');
const div = document.querySelector('#div');
const button = document.querySelector('#button');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
taskbar.style.display = 'none';

const Pic = ['./images/1.webp', './images/2.webp', './images/3.webp', './images/4.webp', './images/5.webp', './images/6.webp', './images/7.webp', './images/8.webp'];
playButtonAudio();
otherThings();
function otherThings() {
    submit.addEventListener('click', () => {
        if (inputPassword.value === 'Muhammad-Shahir') {
            div.innerHTML = `<h1 style='color:green;' id='div1'>Ho!!! Ho!!! Correct Password😯😯🔥😺😺🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳!!!</h1>`;
            login.append(div);
            setTimeout(() => {
                login.remove();
                audio('./utils/startup2.mp3');
            }, 2000);
        } else {
            audio('./utils/error.mp3');
            div.innerHTML = `<h1 style='color:red;' id='div1'>Incorrect 👿👿👿🤬🤬🤬👺👺👺👺</h1>`;
            setTimeout(() => {
                login.removeChild(div);
            }, 3000);
            login.appendChild(div);
        }
    });
    document.addEventListener('contextmenu', function (e) {
        setTimeout(() => {
            for (let i = 0; i < Pic.length; i++) {
                console.log(Pic[i]);
                this.body.style.background = `url("${Pic[i]}") no-repeat`;
            }
            this.body.style.backgroundSize = 'cover';
            taskbar.style.display = 'block';
        }, 2000);
        e.preventDefault();
    });
    img2.addEventListener('click', () => {
        modal.classList.toggle("open");
        // modal1.classList.add('open');
        // modal1.classList.add('open')
    });

    webweb1.addEventListener('click', () => {
        // overlay1.classList.add('open1');
        // modal1.classList.add('open1');
        modal1.classList.toggle('open1');
        overlay1.classList.toggle('open1');

    });
    closeButton.addEventListener('click', () => {
        overlay1.classList.toggle('open1');
    });
    img12.forEach((e) => {
        e.addEventListener('click', function () {
            document.body.style.background = `url("${e.src}") no-repeat`;
            document.body.style.backgroundSize = 'cover'
            console.log();
        });
    });

}

function audio(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

function playButtonAudio() {
    button.addEventListener('click', () => {
        audio('./utils/error.mp3');
    });

    button1.addEventListener('click', () => {
        audio('./utils/ding.mp3');
    });

    button2.addEventListener('click', () => {
        audio('./utils/startup.mp3');
    });

    button3.addEventListener('click', () => {
        audio('./utils/shutdown.mp3');
    });

    button4.addEventListener('click', () => {
        audio('./utils/notif.mp3');
    });

    button5.addEventListener('click', () => {
        audio('./utils/navigate.mp3');
    });

    button6.addEventListener('click', () => {
        audio('./utils/startup2.mp3');
    });
}

