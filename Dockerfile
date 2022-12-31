FROM node:18.12.1

RUN apt-get update \
    && apt-get install -y \
    vim
RUN yarn install