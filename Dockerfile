FROM mhart/alpine-node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9030
RUN chmod +x /usr/app/wait-for-it.sh
CMD ["npm", "run", "start"]
