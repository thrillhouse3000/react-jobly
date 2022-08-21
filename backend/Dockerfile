FROM node:alpine
WORKDIR /backend
COPY package*.json ./
RUN npm i
COPY ./ ./
EXPOSE 3001
CMD ["npm", "start"]
