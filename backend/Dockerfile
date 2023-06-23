# Build stage
FROM node:18-alpine AS deps
# Set the working directory to /app
WORKDIR /app
# Copy package.json and package-lock.json, and install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of the source code
COPY . .
# Build the TypeScript code
RUN npm run build

# Production stage
FROM node:18-alpine
ENV NODE_ENV production
# # Set the working directory to /app
WORKDIR /app
# Copy the production-ready app from the previous stage to the container (deps + built files)
COPY --from=deps /app/package*.json ./
COPY --from=deps /app/dist ./dist
# Install only production dependencies
RUN npm install --only=production
# Change ownership of the app files to the `expressjs` user
RUN chown -R expressjs:node .
# Switch to the `expressjs` user
USER expressjs
# Expose port 5000
EXPOSE 5000
# Start the app on port 5000
CMD ["npm", "run", "start"]