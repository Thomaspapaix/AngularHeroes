FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build:production

FROM nginx:latest

COPY nginx_app.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/local/app/dist/test/browser /usr/share/nginx/html

EXPOSE 80
