FROM node:12.18-alpine 
COPY package*.json ./
RUN npm install
COPY . ./
CMD [ "npm","start"]