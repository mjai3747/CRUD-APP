# # Step 1: Build the React app
# FROM node:18 AS build

# # Set the working directory
# WORKDIR /app

# # Copy the package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the app for production
# RUN npm run build

# # Step 2: Serve the app using a lightweight web server
# FROM nginx:alpine

# # Copy the build files from the previous step
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80 to the outside world
# EXPOSE 80

# # Start nginx server
# CMD ["nginx", "-g", "daemon off;"]

# Step 1: Build the React app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install axios

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the app using a lightweight web server
FROM nginx:alpine

# Copy the build files from the previous step
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration to handle React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]