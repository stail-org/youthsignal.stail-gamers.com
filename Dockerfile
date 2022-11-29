FROM node:14

COPY . /workspace

WORKDIR /workspace

RUN npm install

EXPOSE 3000
