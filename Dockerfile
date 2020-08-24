from node:12
workdir /usr/src/app
copy package*.json ./
RUN npm install

COPY . .
expose 3000
cmd ["npm","i","pm2","-g"]
cmd ["npm","run","start:deploy"]