FROM nginx:stable-alpine as production-stage
COPY /dist /usr/share/nginx/html
COPY deploy/default.conf /etc/nginx/conf.d/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]