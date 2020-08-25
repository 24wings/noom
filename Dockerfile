from keymetrics/pm2:latest-alpine
workdir /usr/src/app
copy package*.json ./
CMD ["npm" ,"install", "-g", "cnpm", "--registry=https://registry.npm.taobao.org"]
CMD ["cnpm", "install","--production"]

COPY . .
expose 3000
cmd ["cnpm","i","pm2","-g"]
cmd ["pm2-docker", "start" ,"dist/main.js"]