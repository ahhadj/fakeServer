# fakeServer
1. 安装json-server:
```console
npm install -g json-server
```
2. 安装依赖：
```console
npm install .
```
3. 启动Server，选择需要的生成数据，例如要生成资源数据就选择resources.js；指定页面的router，比如进行UserPortal页面的开发就选择对应的router文件UserPortal.json；指定port 
```console
json-server resources.js --routes UserPortal.json  --port 3002
```
4. 服务器使用了JSON Server,具体使用可以参考文档[JSON Server](https://github.com/typicode/json-server).
5. 数据生成使用了Faker,具体使用可以参考文档[Faker](https://github.com/Marak/faker.js).
6. 服务器接口定义:
  - [SystemAdmin](http://119.3.139.5:1004/swagger-ui.html#!/)  
  - [UserAdmin](http://119.3.139.5:1005/swagger-ui.html#!/) 
  - [UserPortal](http://119.3.139.5:1006/swagger-ui.html#!/) 
  - [ResourceAdmin](http://119.3.139.5:1007/swagger-ui.html#!/) 
  - [PolicyAdmin](http://119.3.139.5:1008/swagger-ui.html#!/)
