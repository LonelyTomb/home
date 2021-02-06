FROM node:lts-alpine

ARG NUXT_HOST
ARG NUXT_PORT
ARG NUXT_ENV

ENV NUXT_HOST $NUXT_HOST
ENV NUXT_PORT $NUXT_PORT
ENV NUXT_ENV $NUXT_ENV

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE NUXT_PORT

CMD ["yarn" , "start"]
