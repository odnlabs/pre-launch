# Use Node.js v18 as the base image
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
# Build the app
RUN npm run build
# Remove all the development dependencies since we don't need them to run the actual server.
# RUN rm -rf node_modules
# RUN npm install --production --frozen-lockfile --ignore-scripts --prefer-offline


# Create the production-ready image - final output of build
FROM node:18-alpine
ENV NODE_ENV production
ENV NEXT_PUBLIC_APP_NODE_ENV production
# Add a new group called nodejs, with GID 1001
RUN addgroup -g 1001 -S nodejs
# Add a new user called nextjs, with UID/GID 1001, to run as a non-root user
RUN adduser -S nextjs -u 1001 -G nodejs
# Set the working directory to /app
WORKDIR /app
# Copy the production-ready app from the previous stage to the container (deps + built files)
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/package*.json ./
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/public ./public
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/.next ./.next
# Additional config files that the app needs
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/next.config.js  ./
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/tailwind.config.js  ./
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/postcss.config.js  ./
# Change ownership of the app files to the `nextjs` user
# RUN chown -R nextjs:nodejs /app
# Switch to the `nextjs` user
USER nextjs
# Expose port 3000
EXPOSE 3000
# Start the app on port 3000
CMD ["npm", "run", "start"]
