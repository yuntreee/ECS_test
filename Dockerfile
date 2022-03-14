FROM 511914651445.dkr.ecr.us-west-2.amazonaws.com/yh-test-ecr

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]