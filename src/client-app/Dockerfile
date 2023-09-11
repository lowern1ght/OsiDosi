FROM node:18-alpine
EXPOSE 3000
WORKDIR /client-app
ENV node=production
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . .
RUN npm install -g vite typescript && npm i && npm run build
CMD ["npm", "run", "preview"]