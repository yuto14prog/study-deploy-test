FROM node:alpine3.20 AS builder

WORKDIR /app

COPY ./ ./

RUN npm install && npm run build

CMD ["npm", "run", "dev"]

FROM httpd:2.4-alpine3.21

EXPOSE 80

COPY --from=builder /app/dist /usr/local/apache2/htdocs

COPY --from=builder /app/conf/httpd.conf /usr/local/apache2/conf/httpd.conf
