FROM node:14.17-alpine
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN rm -r -f b-plus-app/build && cd b-plus-app \
  && npm i
  # && npm run build
