import requests

hero_page_path = open('../hero-page-path.js','r')
content = hero_page_path.read()[18:-2]
hero_page_path.close()
urls = content.split(',')
base_url = "http://lol.qq.com/biz/hero/"
for url in urls:
	hero_name = url.split('=')[1][0:-1]
	webdata = requests.get(base_url + hero_name + '.js').text
	hero_detail = open(hero_name+'.js','w+')
	hero_detail.write('module.exports'+webdata[67:])
	hero_detail.close()

