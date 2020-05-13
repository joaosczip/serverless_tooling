FROM lambci/lambda:build-nodejs12.x

WORKDIR /app

COPY package.json yarn.lock /app/

RUN npm i -g yarn

RUN cd /app/ && yarn install

COPY . .

CMD yarn start