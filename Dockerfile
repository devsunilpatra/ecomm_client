# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the code
COPY . .

# Expose port
EXPOSE 5000

# Start app
CMD ["node", "server.js"]
