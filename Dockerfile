FROM node:current-alpine
COPY ./* /usr/src/app/simple_node_webapp
WORKDIR /usr/src/app/simple_node_webapp
RUN npm install 
EXPOSE 3000
ENTRYPOINT ["node"]
CMD ["app/server.js"]

