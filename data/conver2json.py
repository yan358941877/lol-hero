import os

pathDir = os.listdir("heroDetail")

for path in pathDir:
  herofile = open("heroDetail/"+path,"r")
  heroinfo = herofile.readlines()
  print(heroinfo.index("\"data\""))
  break
