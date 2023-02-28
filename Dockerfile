FROM node:alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npx prisma migrate
RUN npx prisma generate
CMD ["npm", "run", "start:dev"]