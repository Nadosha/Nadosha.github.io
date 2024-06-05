FROM node:slim
WORKDIR /apps/heartpace-assignment-server
COPY . .
RUN yarn install
COPY . .
EXPOSE 3001
CMD [ "yarn", "dev" ]
