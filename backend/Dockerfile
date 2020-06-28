FROM node:12
WORKDIR /usr/src/app

COPY *.json ./
RUN npm install --silent
COPY . .
RUN npx tsc -p ./tsconfig.json

EXPOSE 8080
CMD [ "npm", "start" ]