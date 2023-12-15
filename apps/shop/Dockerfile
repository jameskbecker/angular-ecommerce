FROM node:20 as base

FROM base as builder

WORKDIR /src/app
COPY . .
RUN turbo prune web --docker

FROM base as installer

FROM base as runner

CMD node apps/shop/server.js
