FROM node:18-alpine

WORKDIR /app

# Copy only package.json and lock file first to leverage build cache
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy remaining source files
COPY . .

# Build the Next.js application
RUN yarn build

EXPOSE 3000

# Start the production server
CMD ["yarn", "start"]
