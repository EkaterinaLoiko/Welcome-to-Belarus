var myMap;
ymaps.ready(init);

function init() {    
    var myMap = new ymaps.Map("map", {
        center: [53.9, 27.5667],
        zoom: 6,
        'innerHeight': "600px"
        }, {
            searchControlProvider: 'yandex#search'
        }, 
        ),    
        myGeoObject = new ymaps.GeoObject( {
            preset: 'islands#blackStretchyIcon',            
            draggable: true
        })
    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([53.6877, 26.8627], {
            balloonContent: '',
            balloonContentBody: '<img src="index2/img/IMG_1797.jpg" height="150" width="200"> <br/> ' +
            '<b>Рубежевичи</b> <br/>Расстояние от Минска: 60 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
          }))
        .add(new ymaps.Placemark([54.0406762, 27.2922893], {
            balloonContentBody: '<img src="index2/img/b23c185b10caffd3de6136109cacdcd9.jpg" height="150" width="200"> <br/> ' +
            '<b>Линия Сталина</b> <br/>Расстояние от Минска: 20 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
          }))
        .add(new ymaps.Placemark([54.0006, 27.2768], {
            balloonContentBody: '<img src="index2/img/zaslavl.jpg" height="150" width="200"> <br/> ' +
            '<b>Историко-культурный музей-заповедник "Заславль"</b> <br/>Расстояние от Минска: 25 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
          }))
        .add(new ymaps.Placemark([53.2188, 26.6841], {
            balloonContentBody: '<img src="index2/img/3cc1ad96ae5b88bc7.jpg" height="150" width="200"> <br/> ' +
            '<b>Национальный музей-заповедник «Несвиж»</b> <br/>Расстояние от Минска: 120 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0090b6'
          }))
        .add(new ymaps.Placemark([53.7099, 28.8224], {
            balloonContentBody: '<img src="index2/img/8678c2dd264944eb03f6276deb4d695e.jpg" height="150" width="200"> <br/> ' +
            '<b>Костёл Божьего Тела в Богушевичах </b> <br/>Расстояние от Минска: 100 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
          }))
        .add(new ymaps.Placemark([53.8417, 27.3922], {
            balloonContentBody: '<img src="index2/img/691c9c079fc925f92c1dbf2946bdc7fb.jpg" height="150" width="200"> <br/> ' +
            '<b>Музей народной архитектуры и быта "Строчицы"</b> <br/>Расстояние от Минска: 17 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
          }))
        .add(new ymaps.Placemark([51.813736, 29.159605], {
            balloonContentBody: '<img src="index3/img/elsk.jpg" height="150" width="200"> <br/> ' +
            '<b>Ельск</b> <br/>Расстояние от Минска: 320 км',        
        }, {
            preset: 'islands#icon',
            iconColor: '#C71585'
          }))
        .add(new ymaps.Placemark([51.8749555, 29.7943989], {
            balloonContentBody: '<img src="index3/img/b352dfb7917055d47c4ab1765e7faded.jpg" height="150" width="200"> <br/> ' +
            '<b>Борисовщина</b> <br/>Расстояние от Минска: 320 км',
        }, {
          preset: 'islands#icon',
          iconColor: '#C71585'
          }))
        .add(new ymaps.Placemark([52.9164, 30.9179], {
            balloonContentBody: '<img src="index3/img/Chechersk.jpg" height="150" width="200"> <br/> ' +
            '<b>Чечерск</b> <br/>Расстояние от Минска: 290 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#C71585'
        }))
        .add(new ymaps.Placemark([52.0405, 27.4405], {
            balloonContentBody: '<img src="index3/img/b287idjxlwl730w6y6pnz4ipaz9b7ik1.jpg" height="150" width="200"> <br/> ' +
            '<b>Туров</b> <br/>Расстояние от Минска: 250 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#C71585'
          }))
        .add(new ymaps.Placemark([51.943109, 29.526943], {
            balloonContentBody: '<img src="index3/img/957498ee2e0330b914d55fc6c7696282.jpg" height="150" width="200"> <br/> ' +
            '<b>Юровичи</b> <br/>Расстояние от Минска: 300 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#C71585'
          }))
        .add(new ymaps.Placemark([52.352342, 31.110698], {
            balloonContentBody: '<img src="index3/img/0_15385e_8f48caf7_XXXL.jpg" height="150" width="200"> <br/> ' +
            '<b>Усадьба в деревне Кореневка</b> <br/>Расстояние от Минска: 295 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#C71585'
          }))
        .add(new ymaps.Placemark([52.1310, 23.4425], {
            balloonContentBody: '<img src="index4/img/296A1785%20copy.jpg" height="150" width="200"> <br/> ' +
            '<b>Чернавчицы</b> <br/>Расстояние от Минска: 350 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#DC143C'
          }))
        .add(new ymaps.Placemark([ 52.1565553, 23.63153], {
            balloonContentBody: '<img src="index4/img/s296A2361.jpg" height="150" width="200"> <br/> ' +
            '<b>Скоки</b> <br/>Расстояние от Минска: 360 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#DC143C'
          }))
        .add(new ymaps.Placemark([52.4022, 23.8098], {
            balloonContentBody: '<img src="index4/img/s296A4430.jpg" height="150" width="200"> <br/> ' +
            '<b>Каменец</b> <br/>Расстояние от Минска: 340 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#DC143C'
          }))
        .add(new ymaps.Placemark([52.573333333, 23.798333333], {
            balloonContentBody: '<img src="index4/img/296A4809.jpg" height="150" width="200"> <br/> ' +
            '<b>Беловежская пуща</b> <br/>Расстояние от Минска: 360 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#DC143C'
          }))
        .add(new ymaps.Placemark([52.0975, 23.6877], {
            balloonContentBody: '<img src="index4/img/296A5725.jpg" height="150" width="200"> <br/> ' +
            '<b>Брест</b> <br/>Расстояние от Минска: 350 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#DC143C'
          }))
        .add(new ymaps.Placemark([52.4529, 25.0919], {
            balloonContentBody: '<img src="index4/img/1%20(1).jpg" height="150" width="200"> <br/> ' +
            '<b>Коссовский замок</b> <br/>Расстояние от Минска: 230 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#DC143C'
          }))
        .add(new ymaps.Placemark([53.4847, 23.5119], {
            balloonContentBody: '<img src="index5/img/gozha.jpg" height="150" width="200"> <br/> ' +
            '<b>Гожа</b> <br/>Расстояние от Минска: 290 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0000CD'
          }))
        .add(new ymaps.Placemark([53.7978, 23.6638], {
            balloonContentBody: '<img src="index5/img/1sviatsk2.jpeg" height="150" width="200"> <br/> ' +
            '<b>Святск</b> <br/>Расстояние от Минска: 300 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0000CD'
          }))
        .add(new ymaps.Placemark([ 53.6229, 24.2206], {
            balloonContentBody: '<img src="index5/img/1kashubnicy4.jpeg" height="150" width="200"> <br/> ' +
            '<b>Кашубинцы</b> <br/>Расстояние от Минска: 250 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0000CD'
          }))
        .add(new ymaps.Placemark([53.6884, 23.8258], {
            balloonContentBody: '<img src="index5/img/7be5fd98bac6a3428d57a9b27cd6ff1f.jpg" height="150" width="200"> <br/> ' +
            '<b>Коложская церковь</b> <br/>Расстояние от Минска: 277 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0000CD'
          }))
        .add(new ymaps.Placemark([53.891667, 25.302254], {
            balloonContentBody: '<img src="index5/img/20170625-IMG_3829.jpg" height="150" width="200"> <br/> ' +
            '<b>Лидский замок</b> <br/>Расстояние от Минска: 170 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0000CD'
          }))
        .add(new ymaps.Placemark([53.5996, 24.981], {
            balloonContentBody: '<img src="index5/img/c5c451ce692738d404f30cb912e81917.jpg" height="150" width="200"> <br/> ' +
            '<b>Усадьба Святополк-Четвертинских в Желудке</b> <br/>Расстояние от Минска: 210 км',
        }, {
            preset: 'islands#icon',
            iconColor: '#0000CD'
          })) 
        .add(new ymaps.Placemark([ 55.6152, 27.6242], {
            balloonContentBody: '<img src="index6/img/maxresdefault.jpg" height="150" width="200"> <br/> ' +
            '<b>Миоры</b> <br/>Расстояние от Минска: 230 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF4500'
          }))
        .add(new ymaps.Placemark([55.23676, 26.37621], {
            balloonContentBody: '<img src="index6/img/001522_205741-min.jpg" height="150" width="200"> <br/> ' +
            '<b>Троицкий костел в поселке Видзы</b> <br/>Расстояние от Минска: 200 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF4500'
          }))
        .add(new ymaps.Placemark([55.0700, 26.4957], {
            balloonContentBody: '<img src="index6/img/87769c53477f3ecf0d7e017c76744c4e.jpg" height="150" width="200"> <br/> ' +
            '<b>Поставы</b> <br/>Расстояние от Минска: 165 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF4500'
          }))
        .add(new ymaps.Placemark([55.2916, 28.4708], {
            balloonContentBody: '<img src="index6/img/1642736850_29-vsegda-pomnim-com-p-sofiiskii-sobor-polotsk-foto-32.jpg" height="150" width="200"> <br/> ' +
            '<b>Софийский собор</b> <br/>Расстояние от Минска: 240 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF4500'
          }))
        .add(new ymaps.Placemark([ 55.473454360214134, 27.789587146025337], {
            balloonContentBody: '<img src="index6/img/vfj59j2p55y86ovuewkmaroe9g7ij1yj.jpg" height="150" width="200"> <br/> ' +
            '<b>Республиканский ландшафтный заказник «Ельня» </b> <br/>Расстояние от Минска: 250 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF4500'
          }))
        .add(new ymaps.Placemark([55.1323, 27.2739], {
            balloonContentBody: '<img src="index6/img/152.jpg" height="150" width="200"> <br/> ' +
            '<b>Костел святой Анны в деревне Мосар</b> <br/>Расстояние от Минска: 200 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF4500'
          }))
        .add(new ymaps.Placemark([ 53.5825, 30.0840], {
            balloonContentBody: '<img src="index7/img/20150814-IMG_7166.jpg" height="150" width="200"> <br/> ' +
            '<b>Княжицы</b> <br/>Расстояние от Минска: 185 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#228B22'
          }))
        .add(new ymaps.Placemark([ 54.12299988, 30.17129984], {
            balloonContentBody: '<img src="index7/img/027d0ee8450dda886c23201d1c030575.jpg" height="150" width="200"> <br/> ' +
            '<b>Ратуша в Шклове</b> <br/>Расстояние от Минска: 215 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#228B22'
          }))
        .add(new ymaps.Placemark([ 54.10167, 31.745], {
            balloonContentBody: '<img src="index7/img/891c02fab2cb3b5c31187e5225078998.jpg" height="150" width="200"> <br/> ' +
            '<b>Пустынский монастырь</b> <br/>Расстояние от Минска: 310 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#228B22'
          }))
        .add(new ymaps.Placemark([ 53.4244, 31.4301], {
            balloonContentBody: '<img src="index7/img/7c3865179b452edbc8314dcdedd27e75-thumb-1260x0-w.jpg" height="150" width="200"> <br/> ' +
            '<b>Дворец Потёмкина в Кричеве</b> <br/>Расстояние от Минска: 300 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#228B22'
        }))
        .add(new ymaps.Placemark([53.0600, 29.1300], {
            balloonContentBody: '<img src="index7/img/179f2ba9012ad96cfbe8e0696e791a15.jpg" height="150" width="200"> <br/> ' +
            '<b>Дом купчихи Каценельсон в Бобруйске</b> <br/>Расстояние от Минска: 150 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#228B22'
          }))
        .add(new ymaps.Placemark([53.5142, 30.1515], {
            balloonContentBody: '<img src="index7/img/7338ce89387cd53e68e71f56700872a6.jpg" height="150" width="200"> <br/> ' +
            '<b>Мемориальный комплекс «Буйничское поле»</b> <br/>Расстояние от Минска: 205 км'
        }, {
            preset: 'islands#icon',
            iconColor: '#228B22'
          }))

myMap.events.add('click', function (e) {
    if (!myMap.balloon.isOpen()) {
        var coords = e.get('coords');
        myMap.balloon.open(coords, {
            contentHeader:'Привет!',
            contentBody:'<p>Вы находитесь здесь?</p>' +
                '<p>Координаты: ' + [
                coords[0].toPrecision(6),
                coords[1].toPrecision(6)
                ].join(', ') + '</p>',
            contentFooter:'<sup>Щелкните еще раз</sup>'
        });
    }
    else {
        myMap.balloon.close();
    }
});

myMap.events.add('contextmenu', function (e) {
    myMap.hint.open(e.get('coords'), 'Вы щелкнули правой кнопкой, лучше пользоваться левой :)');
});

myMap.events.add('balloonopen', function (e) {
    myMap.hint.close();
});
}


