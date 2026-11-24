# --- Stage 1: Builder (কোড বিল্ড করার কারখানা) ---
FROM node:24-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY tsconfig.json ./
COPY src ./src
RUN pnpm build

# --- Stage 2: Runner (শুধু চূড়ান্ত অ্যাপ চালানোর মঞ্চ) ---
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
USER node
CMD ["node", "dist/index.js"]
