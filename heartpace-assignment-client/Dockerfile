FROM node:18-alpine
WORKDIR /apps/heartpace-assignment-client
COPY package*.json .
COPY yarn*.lock .
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn" , "start" ]
