FROM node:14-slim

WORKDIR /workspace

RUN apt-get update -y \
  && apt-get upgrade -y \
  && apt-get autoremove -y

RUN apt-get install -y git \
  git-lfs