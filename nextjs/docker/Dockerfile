# Vercel has an excellent Dockerfile sample. See
# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# We are keeping this Dockerfile super simple.

FROM node:18-alpine AS base

FROM base as build

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install packages.
COPY package.json package-lock.json* ./
# Usually we would run `npm ci` for a clean install, which requires package-lock.json.
# Since this is part of a sample project, we aren't checking in the lock file.
# So we run this instead.
RUN npm install

# Build the project.
COPY . .
RUN npm run build

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

FROM base as run

RUN adduser \
    --system \
    --disabled-password \
    --home "/app" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "1001" \
    "next"

# Use existing node group from the base.
COPY --from=build --chown=next:node /app/.next/standalone ./
COPY --from=build --chown=next:node /app/.next/static ./.next/static

USER next

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
