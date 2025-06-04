# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package info and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD [ "node", "app.js" ]

