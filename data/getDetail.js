var paths = require('./hero-page-path.js');
var page = require('webpage').create();

paths.forEach(function(path){
    page.open(path, function(){
        var heroInfo = page.evaluate(function(){
            var i=0,
                len = 0;
        
            var name = document.getElementById('DATAname').innerText,
                tilte = title = document.getElementById('DATAtitle').innerText;
            // 英雄定位 
            var tags =[];
            var tagDoms = document.getElementById('DATAtags').children;
            for(i=0,len=tagDoms.length; i<len; i++){
                tags.push(tagDoms[i].innerText)
            }

            // 英雄属性
            var property = [];
            var proDoms = document.querySelectorAll('#DATAinfo dd i');
            for(i=0,len=proDoms.length; i<len; i++){
                property.push(proDoms[i].style.width);
            }

            // 英雄皮肤
            var skin = [];
            var skinDoms = document.querySelectorAll('#skinBG li img');
            for(i=0, len=skinDoms.length; i<len; i++){
                skin.push(skinDoms[i].src)
            }

            // 背景故事
            var store = document.getElementById('#DATAlore').innerText;

            // 技能介绍
            

        })
    })    
})
    
