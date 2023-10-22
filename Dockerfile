FROM --platform=linux/amd64 node:18-alpine AS base

FROM node:16-alpine AS builder
WORKDIR /app

COPY package.json ./
RUN yarn install --production=false --frozen-lockfile

COPY . .
RUN yarn build

# Stage 2: Install production dependencies
FROM node:18-alpine AS production-dependencies
WORKDIR /app

COPY package.json ./
RUN yarn install --production=true --frozen-lockfile

# Stage 3: Prepare the final image
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY package.json ./

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["yarn", "start"]