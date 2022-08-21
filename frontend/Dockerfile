FROM node:alpine
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /frontend
COPY --chown=app:node package*.json ./
RUN npm i
COPY --chown=app:node . .
EXPOSE 3000
CMD ["npm", "start"]
