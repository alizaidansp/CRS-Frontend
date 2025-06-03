# Intentionally vulnerable Dockerfile for testing Trivy scanning
FROM node:14.0.0  # Using an old version with known vulnerabilities

# Run as root (bad practice)
USER root

# Copy package files
COPY package*.json ./

# Install dependencies with known vulnerabilities
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 80

# Run as root (bad practice)
CMD ["npm", "start"] 