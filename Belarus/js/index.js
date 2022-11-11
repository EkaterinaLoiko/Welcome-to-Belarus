// Слайдер

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container-slider');
const option =  document.querySelector('.options');
const photos = document.querySelector('.photos-belarus');
const facts = document.querySelector('.facts-about');
const map = document.querySelector('.map');

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
});

downBtn.addEventListener('click', () => {
    changeSlide('down')
});

function changeSlide(direction) {
    if (direction ==='up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

function show()  {
    document.getElementById('cards-1').style.display = 'block';
    document.getElementById('cards-2').style.display = 'block';
} 

setTimeout(show, 5000)

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
  }
  
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.grid');
  
  for (let elm of elements) {
      observer.observe(elm);
  }

  // Weather

fetch("https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=9098d3b033821066d5ffbc651a3627c2")
.then(function(resp) {return resp.json() })
.then(function(data) { 
    document.querySelector('.temperature-minsk').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('.wind-minsk').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('.humidity-minsk').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
})
.catch(function() {
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Gomel&appid=9098d3b033821066d5ffbc651a3627c2")
.then(function(resp) {return resp.json() })
.then(function(data) {
    document.querySelector('.temperature-gomel').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('.wind-gomel').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('.humidity-gomel').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
})
.catch(function() {
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Brest&appid=9098d3b033821066d5ffbc651a3627c2")
.then(function(resp) {return resp.json() })
.then(function(data) {
    document.querySelector('.temperature-brest').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('.wind-brest').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('.humidity-brest').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
})
.catch(function() {
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Vitebsk&appid=9098d3b033821066d5ffbc651a3627c2")
.then(function(resp) {return resp.json() })
.then(function(data) {
    document.querySelector('.temperature-vitebsk').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('.wind-vitebsk').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('.humidity-vitebsk').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
})
.catch(function() {
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Grodno&appid=9098d3b033821066d5ffbc651a3627c2")
.then(function(resp) {return resp.json() })
.then(function(data) {
    document.querySelector('.temperature-grodno').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('.wind-grodno').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('.humidity-grodno').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
})
.catch(function() {
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Mogilev&appid=9098d3b033821066d5ffbc651a3627c2")
.then(function(resp) {return resp.json() })
.then(function(data) {
    document.querySelector('.temperature-mogilev').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('.wind-mogilev').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('.humidity-mogilev').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
})
.catch(function() {
})

// Authorization

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { auth } from './firebase.js';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registrBtn = document.getElementById('registr-btn');
const exitBtn = document.getElementById('exit');
const loginBtn = document.getElementById('login-btn');
const entered = document.getElementById('enter');
const registration = document.querySelector('.registration');
const h4Registr = document.getElementById('h4-registr');
const secondQuest = document.querySelector('.second-question');
const commentSection = document.querySelector('.comments');
const regionsNav = document.getElementById('regions-nav');
const factsNav = document.getElementById('facts-nav');
const mapsNav = document.getElementById('map');
const regionsNavBrg =  document.getElementById('regions-nav-brg');
const enteredBrg = document.getElementById('enter-brg');
const exitBtnBrg = document.getElementById('exit-brg');
const factsNavBrg = document.getElementById('facts-nav-brg');
const mapsNavBrg = document.getElementById('maps-nav-brg');
const footer = document.getElementById('footer');

entered.addEventListener( "click", () => {
    if (entered.textContent != "Войти" ) {
        return;
    }
    else { 
        loginBtn.style.background = "rgb(170, 138, 66)";
        loginBtn.style.width = "190px";
        loginBtn.style.width = "170px";
        registration.style.display = "block";}
})

enteredBrg.addEventListener( "click", () => {
    if (entered.textContent != "Войти" ) {
        return;
    }
    else { 
        loginBtn.style.background = "rgb(170, 138, 66)";
        loginBtn.style.width = "190px";
        loginBtn.style.width = "170px";
        registration.style.display = "block";}
})

// Регистрация
registrBtn.addEventListener('click', () => {
    createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((data) => {  
        actionShow (); 
        document.querySelector('h5').textContent = "Поздравляю, Вы зарегистрировались" ;  
    })
    .catch((error) => { 
        actionShow ();       
        document.querySelector('h5').textContent = "Ошибка! Будьте внимательны " + error.message;
        console.log(error);
    });
});

// Проверка вошедшего пользователя
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.querySelector('h5').textContent = "Поздравляю, Вы вошли в ситему" ; 
    } else {
        console.log('Пользователь не найден');   
    }
});

// Вход в систему
loginBtn.addEventListener('click', () => { 
    signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((data) => {
        console.log(emailInput.value, passwordInput.value);
        actionShow ();
        document.querySelector('h5').textContent = "Поздравляю, Вы вошли в ситему" ; 
        option.style.display = "block";
        photos.style.display = "block";
        facts.style.display = "block";
        map.style.display = "block";
        entered.style.fontSize = '15px';
        entered.classList.add('active');
        entered.textContent = `Привет, ${data.user.email}`;
        registration.style.display = "none";
        exitBtn.style.display = "inline-block";
        exitBtnBrg.style.display = "inline-block";
        commentSection.style.display = 'block';
        footer.style.display = "block";
        enteredBrg.textContent = `Привет, ${data.user.email}`;
        enteredBrg.style.fontSize = '15px';
        enteredBrg.classList.add('active');
    })
    .catch((error) => {
        actionShow ();       
        document.querySelector('h5').textContent = "Ошибка! Будьте внимательны " + error.message;error.message;
    });
});

// Выход из системы
exitBtn.addEventListener('click', () => {
    signOut(auth)
    .then(() => {
        actionShow (); 
        document.querySelector('h5').textContent = "Вы вышли из системы" ; 
        option.style.display = "none";
        photos.style.display = "none";
        facts.style.display = "none";
        map.style.display = "none";  
        entered.style.fontSize = '20px';
        entered.textContent = "Войти";
        secondQuest.append(h4Registr);
        exitBtn.style.display = 'none';
        exitBtnBrg.style.display = 'none';
        commentSection.style.display = 'none';
        footer.style.display = 'none';
        enteredBrg.style.fontSize = '20px';
        enteredBrg.textContent = "Войти";
    })
    .catch((error) => {
        actionShow ();       
        document.querySelector('h5').textContent = "Ошибка! Будьте внимательны " + error.message;
    });
});

exitBtnBrg.addEventListener('click', () => {
    signOut(auth)
    .then(() => {
        actionShow (); 
        document.querySelector('h5').textContent = "Вы вышли из системы" ; 
        option.style.display = "none";
        photos.style.display = "none";
        facts.style.display = "none";
        map.style.display = "none";  
        entered.textContent = "Войти";
        enteredBrg.textContent = "Войти";
        secondQuest.append(h4Registr);
        exitBtn.style.display = 'none';
        exitBtnBrg.style.display = 'none';
        commentSection.style.display = 'none';
    })
    .catch((error) => {
        actionShow ();       
        document.querySelector('h5').textContent = "Ошибка! Будьте внимательны " + error.message;
    });
});

let closePopupButton = document.querySelector('#ok');
let popupBg = document.querySelector('.popup'); 
let popup = document.querySelector('.popup-content'); 

function actionShow () {  
    popupBg.classList.add('active'); 
    popup.classList.add('active'); 
} 

closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});

regionsNav.addEventListener('click', () => {
    if (entered.textContent != "Войти" ) {
        return;
    }
    else {
        actionShow ();
        document.querySelector('h5').textContent = "Войдите в систему" ; 
    };    
})

factsNav.addEventListener('click', () => {
    if (entered.textContent != "Войти" ) {
        return;
    }
    else {
        actionShow ();
        document.querySelector('h5').textContent = "Войдите в систему" ; 
    };    
})

mapsNav.addEventListener('click', () => {
    if (entered.textContent != "Войти" ) {
        return;
    }
    else {
        actionShow ();
        document.querySelector('h5').textContent = "Войдите в систему" ; 
    };    
})

//Comments

let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function(){
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');
    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }
    commentName.value = '';
    commentBody.value = '';

    if ((comment.name != '') && (comment.body != '')) { 
        comments.push(comment);
        saveComments();
        showComments();
    }
    else {
        actionShow ();       
        document.querySelector('h5').textContent = "Заполните всего 2 поля ввода :)" ;
    }
}

function saveComments(){ 
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
        showComments();
}

function showComments () {  
    let commentField = document.getElementById('comment-field');
    let out = '';    
    if (comments.name == '') { 
        return }
        else {
            comments.forEach(function(item){
            out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
            out += `<p class="posts-name" role="alert">${item.name}</p>`;
            out += `<p class="posts" role="alert">${item.body}</p>`;
        });
        commentField.innerHTML = out;  
    }
}

function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}


