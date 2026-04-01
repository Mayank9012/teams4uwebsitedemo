# Multi-stage Dockerfile for React SPA on Google Cloud Run
# Stage 1: Build stage - Install dependencies and build the React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Production stage - Serve the built app
FROM node:18-alpine

WORKDIR /app

# Install only production dependencies
COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy server file
COPY server.js .

# Create non-root user for security (optional but recommended)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs && \
    chown -R nodejs:nodejs /app

USER nodejs

# Expose port (Cloud Run will use PORT env var)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]
