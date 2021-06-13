FROM node:14.17-alpine
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN rm -r b-plus-app/build && cd b-plus-app && npm run build
