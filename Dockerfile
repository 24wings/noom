from node:12
workdir /usr/src/app
copy package*.json ./
RUN npm install

COPY . .
expose 3000
cmd ["npm","run","start:prod"]