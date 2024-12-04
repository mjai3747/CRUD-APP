# # Use an official Node.js runtime as a parent image
# FROM node:18-alpine

# # Set the working directory in the container
# WORKDIR /app

# # Install any needed packages specified in package.json
# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./
# RUN npm install -D nodemon
# # # Install dependencies using npm
# RUN npm install --production
# # RUN npm install
# # Development mode
# RUN npm run dev

# # Production mode
# RUN npm start

# # Copy the rest of the application files
# COPY . .

# # Expose the backend port
# EXPOSE 5000

# # Start the backend server
# CMD ["node", "server.js"]
# FROM node:18-alpine
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install --production
# COPY . .
# EXPOSE 5000
# CMD ["node", "server.js"]
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install cors
RUN npm install express mongoose cors

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 5000

# Use environment-specific start command
CMD ["npm", "start"]