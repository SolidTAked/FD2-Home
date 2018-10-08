function initMap() {
    var options = {
        center: { lat:53.903754, lng:27.556666 },
        scrollwheel:true,
        zoom: 10
    }
    // новая карта

    var map = new
    google.maps.Map(document.getElementById("map"), options);

    // делаем маркер
    var marker = new google.maps.Marker({
        position: { lat:53.903754, lng:27.556666 },
        map: map
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<h1>Я нахожусь тут</h1>'
    });

    marker.addListener('click', function(){
        InfoWindow.open(map, marker);

        var getType = document.getElementById('aside1');
        getType.innerHTML ='Statement';

        var shortGeo = document.getElementById('aside2');
        shortGeo.innerHTML ='Belarus';

        var adress = document.getElementById('aside3');
        adress.innerHTML ='Belarus Minsk 222160';

        var email = document.getElementById('aside4');
        email.innerHTML ='<a href="">' + 'tell@yandex.ru' + ' </a>';

        var expiere = document.getElementById('aside5');
        expiere.innerHTML ='Statement';

        var privacy = document.getElementById('aside6');
        privacy.innerHTML ='Enable';

        var herb = document.getElementById('aside__block1__logo');
        herb.innerHTML = '<img src="img/herb.png" alt="">';

        var herb = document.getElementById('aside__block1__id');
        herb.innerHTML = 'Nemiga'+'<br>'+'<a href="">ID:12386838674446632</a> ';

        var blockText = document.getElementById('contentBlockInfo__Text');
        blockText.innerHTML ='<h2>Geo Message</h2>' + 'В минске прошли выборы и соответственно мы ведем подсчеты всех голосов. Благодарим за ожидание вас!'
    })
}

