# =============================================================================
# Build stage
# =============================================================================

FROM node:22-slim AS builder

WORKDIR /app

# System dependencies
RUN set -xe && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    dos2unix \
    git \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* /usr/share/man /usr/share/doc /tmp/* /var/tmp/*

# Package dependencies
COPY package.json yarn.lock ./
COPY scripts ./scripts

# RUN corepack enable \
RUN yarn install --immutable --immutable-cache --check-cache \
    && yarn cache clean --all \
    && rm -rf /root/.npm

# Copy only necessary parts of the .git directory
COPY .git/HEAD .git/HEAD
COPY .git/refs .git/refs

# Copy the rest of the project
COPY . .

# Ensure entrypoint is executable
RUN dos2unix /app/entrypoint.sh \
    && chmod +x /app/entrypoint.sh

# Build the project
RUN yarn build \
    && yarn cache clean --all

# =============================================================================
# Run stage
# =============================================================================

FROM node:22-slim

WORKDIR /app

# Retrieve the built files
COPY --from=builder /app/entrypoint.sh /entrypoint.sh
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# 🚀 Go
ENTRYPOINT [ "/entrypoint.sh" ]

CMD ["node", "."]
