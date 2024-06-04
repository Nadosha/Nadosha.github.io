FROM node:18-alpine
WORKDIR /apps/heartpace-assignment-client
COPY package*.json .
COPY yarn*.lock .
RUN yarn install
COPY . .
EXPOSE 3030
CMD [ "yarn" , "start" ]
