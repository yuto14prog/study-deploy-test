FROM node:alpine3.20 AS builder

WORKDIR /app

COPY ./ ./

RUN npm install && npm run build

CMD ["/bin/sh", "/app/sh/docker-dev-setup.sh"]

FROM node:alpine3.20 AS prod

WORKDIR /app

COPY --from=builder /app/dist/bundle.js /app/dist/bundle.js

COPY --from=builder /app/node_modules /app/node_modules

COPY --from=builder /app/prisma/schema.prisma /app/prisma/schema.prisma

COPY --from=builder /app/prisma/migrations /app/prisma/migrations

COPY --from=builder /app/sh/docker-prod-setup.sh /app/sh/docker-prod-setup.sh

COPY --from=builder /app/.env.prod /app/.env

CMD ["/bin/sh", "/app/sh/docker-prod-setup.sh"]
