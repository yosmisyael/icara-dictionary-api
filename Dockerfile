# ---- Stage 1: Build the Application ----
# Use a specific Node.js version with Alpine for a smaller base
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install all dependencies, including devDependencies needed for the build
RUN npm install

# Copy the rest of the application source code
COPY . .

# Generate the Prisma Client based on your schema
RUN npx prisma generate

# Run the build script defined in package.json
RUN npm run build

# ---- Stage 2: Create the Production Image ----
# Start from a fresh, lean base image
FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Copy package files again and install ONLY production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy the built application from the 'builder' stage
COPY --from=builder /usr/src/app/dist ./dist

# Copy the prisma folder, which contains your schema for migrations and the seed script
COPY --from=builder /usr/src/app/prisma ./prisma

# Expose the port the app runs on (NestJS default is 3000)
EXPOSE 3000

# The command to run when the container starts.
# It applies migrations, runs the seeder, and then starts the app.
CMD ["sh", "-c", "npx prisma migrate deploy && npm run seed && npm run start:prod"]