# tuanzu-angular
### tuanzu angular 2
使用docker run：
安装: docker run -it --rm --name angular -v "$PWD":/usr/src/app -w /usr/src/app -p 3000:3000 -p 3001:3001 node:7.7.1-slim npm install
更新: docker run -it --rm --name angular -v "$PWD":/usr/src/app -w /usr/src/app -p 3000:3000 -p 3001:3001 node:7.7.1-slim npm update
运行: docker run -it --rm --name angular -v "$PWD":/usr/src/app -w /usr/src/app -p 3000:3000 -p 3001:3001 node:7.7.1-slim npm start