# Build stage
FROM node:18-alpine AS deps
# Install the latest npm version
RUN npm install -g npm@latest
# Uncomment this
# RUN apk add --no-cache libc6-compat
# Set the working directory to /app
WORKDIR /app
# Copy package.json and package-lock.json, and install dependencies
COPY package*.json ./
RUN npm ci

# Build the production-ready app
FROM node:18-alpine AS BUILD_IMAGE
# Set the working directory to /app
WORKDIR /app
# Copy the installed dependencies from the previous stage to the container
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the source code
COPY . .
# Build the TypeScript code
RUN npm run build

# Create the production-ready image - final output of build
FROM node:18-alpine
ENV NODE_ENV production
# Add a new group called nodejs, with GID 1001
RUN addgroup -g 1001 -S nodejs
# Add a new user called expressjs, with UID/GID 1001, to run as a non-root user
RUN adduser -S expressjs -u 1001 -G nodejs
# # Set the working directory to /app
WORKDIR /app
# Copy the production-ready app from the previous stage to the container (deps + built files)
COPY --from=BUILD_IMAGE --chown=expressjs:nodejs /app/package*.json ./
COPY --from=BUILD_IMAGE --chown=expressjs:nodejs /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=expressjs:nodejs /app/dist ./dist

# Install only production dependencies
# RUN npm install --only=production
# RUN npm install

# Change ownership of the app files to the `expressjs` user
RUN chown -R expressjs:node .
# Switch to the `expressjs` user
USER expressjs
# Expose port 5000
EXPOSE 5000
# Start the app on port 5000
CMD ["npm", "run", "start"]