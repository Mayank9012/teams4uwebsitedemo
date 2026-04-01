# Multi-stage Dockerfile for React SPA on Google Cloud Run
# Production-optimized build with robust error handling

# Stage 1: Builder
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with error handling
RUN npm ci --verbose 2>&1 || (echo "npm ci failed" && exit 1)

# Copy source code
COPY . .

# Build React app with error handling
RUN npm run build 2>&1 || (echo "Build failed" && exit 1)

# Verify build output
RUN test -d dist || (echo "dist folder not created" && exit 1) && \
    test -f dist/index.html || (echo "index.html missing" && exit 1) && \
    echo "✓ Build verification passed"

# Stage 2: Runtime
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Set environment
ENV NODE_ENV=production \
    NODE_OPTIONS="--max-old-space-size=256"

# Install only production dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production --verbose 2>&1 || (echo "npm install failed" && exit 1) && \
    npm cache clean --force

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Copy server file (CommonJS)
COPY server.cjs .

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs && \
    chown -R nodejs:nodejs /app

# Change to non-root user
USER nodejs

# Expose port
EXPOSE 8080

# Health check (wait 5 seconds before starting, check every 10 seconds, allow 3 consecutive failures)
HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080/health', (r) => {if (r.statusCode !== 200) {console.log('Health check failed'); process.exit(1)}})" || exit 1

# Start the application
CMD ["node", "server.cjs"]
