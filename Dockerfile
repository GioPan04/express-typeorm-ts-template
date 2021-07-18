FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --prod

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "/bin/sh", "./entrypoint.sh" ]