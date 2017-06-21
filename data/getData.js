var page = require('webpage').create();
page.open('http://lol.qq.com/web201310/info-heros.shtml', function () {
    //page.render('lol.png');
    var path = "http://lol.qq.com/web201310/";
    var herosinfo = page.evaluate(function () {
        var heros = [],
            hero = null,
            doms = document.getElementById('jSearchHeroDiv').children;
        for(var i=0, len=doms.length; i<len; i++){
            hero = doms[i].getElementsByTagName('a')[0].href;
            heros.push(hero);
        }
        return JSON.stringify(heros);
    });
    console.log(herosinfo);

    phantom.exit();
});


// var heros = [];
// var hero = null
// var doms = document.getElementsByClassName('itemContent__3ol')
// for (var i = 0, len = doms.length; i < len; i++) {
//     hero = {
//         url: doms[i].children[0].style.backgroundImage,
//         position: doms[i].children[0].style.backgroundPosition,
//         name: doms[i].children[1].firstElementChild.innerText,
//         area: doms[i].children[1].lastElementChild.innerText
//     }
//     heros.push(hero)
// } 
// JSON.stringify(heros)