FROM node:7.7.1-slim

MAINTAINER MaingBen <280561543@qq.com>

COPY ./ /usr/src/app

WORKDIR /usr/src/app

RUN npm config set registry https://registry.npm.taobao.org npm info underscore \ 
    && echo '{ "allow_root": true }' > /root/.bowerrc \
    && npm install

CMD ["npm", "start"]