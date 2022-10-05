# Build the react app and copy the build folder to volume
# v12.22.12
# 6.14.16

FROM node:12.22.12-alpine3.14

COPY . /app
WORKDIR /app

RUN npm install --unsafe-perm=true --allow-root
RUN npm run build
