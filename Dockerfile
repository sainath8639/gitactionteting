# Use an official Node.js runtime as the base image
FROM --platform=linux/amd64 prod-nexus.sprinklr.com:8123/spr-centos7-node16:node-16.20.1-npm-8.19.4-yarn-3.2.4-ver3

# Set the working directory within the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
# RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
# RUN npm run start
CMD ["npm", "start"]
