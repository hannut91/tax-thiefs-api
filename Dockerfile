FROM node:12.13.1

WORKDIR /u/app

COPY package.json .
COPY package-lock.json .

RUN npm i --production

COPY dist ./dist

EXPOSE 80

CMD ["node", "dist/server"]
