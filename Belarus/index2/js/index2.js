 fetch("https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=9098d3b033821066d5ffbc651a3627c2")
  .then(function(resp) {return resp.json() })
  .then(function(data) {
    console.log(data);
    document.querySelector('#temperature-minsk').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('#wind-minsk').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('#humidity-minsk').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
  })
  .catch(function() {

  })

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Gomel&appid=9098d3b033821066d5ffbc651a3627c2")
  .then(function(resp) {return resp.json() })
  .then(function(data) {
    console.log(data);
    document.querySelector('#temperature-gomel').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('#wind-gomel').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('#humidity-gomel').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
  })
  .catch(function() {

  })

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Brest&appid=9098d3b033821066d5ffbc651a3627c2")
  .then(function(resp) {return resp.json() })
  .then(function(data) {
    console.log(data);
    document.querySelector('#temperature-brest').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('#wind-brest').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('#humidity-brest').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
  })
  .catch(function() {

  })

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Grodno&appid=9098d3b033821066d5ffbc651a3627c2")
  .then(function(resp) {return resp.json() })
  .then(function(data) {
    console.log(data);
    document.querySelector('#temperature-grodno').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('#wind-grodno').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('#humidity-grodno').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
  })
  .catch(function() {

  })

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Vitebsk&appid=9098d3b033821066d5ffbc651a3627c2")
  .then(function(resp) {return resp.json() })
  .then(function(data) {
    console.log(data);
    document.querySelector('#temperature-vitebsk').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('#wind-vitebsk').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('#humidity-vitebsk').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
  })
  .catch(function() {

  })

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Mogilev&appid=9098d3b033821066d5ffbc651a3627c2")
  .then(function(resp) {return resp.json() })
  .then(function(data) {
    console.log(data);
    document.querySelector('#temperature-mogilev').innerHTML = 'Температура: ' + Math.round(data.main.temp - 273) + '&deg;' + ' C';
    document.querySelector('#wind-mogilev').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с';
    document.querySelector('#humidity-mogilev').innerHTML = 'Влажность: ' + data.main.humidity + ' %';
  })
  .catch(function() {

  })