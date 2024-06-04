FROM node:slim
WORKDIR /apps/heartpace-assignment-server
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "yarn", "dev" ]
