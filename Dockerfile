FROM node:latest

WORKDIR /app

COPY . .

RUN set -xe && \
    apt-get update && \
    apt-get install -y --no-install-recommends git && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /usr/share/man/* /usr/share/doc/*

RUN corepack enable
RUN yarn install --immutable \
    && yarn build \
    && yarn cache clean

CMD ["node", "."]
