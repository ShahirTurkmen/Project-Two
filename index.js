const login = document.querySelector('.login');
const submit = document.querySelector('#submit');
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
playButtonAudio();
otherThings();
function otherThings() {
    submit.addEventListener('click', () => {
        if (inputPassword.value === '12345678901') {
            div.innerHTML = `<h1 style='color:green;' id='div1'>Ho!!! Ho!!! Correct Password😯😯🔥😺😺🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳!!!</h1>`;
            login.append(div);
            setTimeout(() => {
                login.remove()
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
}

function audio(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
    return audio.attributes.item(1).ownerElement.currentSrc = soundFile;
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