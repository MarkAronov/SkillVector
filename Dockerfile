# Dockerfile for SkillVector Backend with Bun
# Bun runs TypeScript directly — no compilation step needed, single stage is sufficient
FROM oven/bun:1
WORKDIR /app

# Install dependencies first (separate layer for Docker cache efficiency)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY src ./src
COPY tsconfig.json ./

# Create non-root user for security
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs bunuser
USER bunuser

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
