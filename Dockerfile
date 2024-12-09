# Builder

FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN corepack enable
RUN yarn install --immutable && yarn build

# Runner

FROM node:latest AS runner

WORKDIR /app

COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/yarn.lock /app/yarn.lock
COPY --from=builder /app/dist /app/dist

RUN corepack enable
RUN yarn install --immutable && yarn cache clean

CMD ["node", "."]
