var page = require('webpage').create();
var detailPage = require('webpage').create();
page.open('http://lol.qq.com/web201310/info-heros.shtml', function () {
    //page.render('lol.png');
    //var path = "http://lol.qq.com/web201310/";
    // 获取path页面，所有英雄详情页面的地址
    var herosPath = page.evaluate(function () {
        var heros = [],
            hero = null,
            doms = document.getElementById('jSearchHeroDiv').children;
        for(var i=0, len=doms.length; i<len; i++){
            hero = doms[i].getElementsByTagName('a')[0].href;
            heros.push(hero);
        }
        return heros;
    });

    // var herosInfo = page.evaluate(function(herosPath){
    //     var heros = [],
    //         hero = null,
    //         doms = null;
    //     for(var i=0,len=herosPaht.length; i<1; i++){
    //         detailPage.open(herosPath[i], function(){
    //             heroInfo = detailPage.evaluate(function(){

    //             }) 
    //         })
    //     }
    // },herosPath);
    
    console.log(JSON.stringify(herosPath));
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