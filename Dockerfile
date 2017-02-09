# Use the argon LTS version of node
FROM node:argon

# Install dependencies
# Separate step so that if we've only changed source but not package.json, we
# can use cached Docker layers.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install App Dependencies
COPY package.json /usr/src/app
RUN npm install

# Install server source
#COPY . /usr/src/app
COPY app.js /usr/src/app/app.js
COPY bin /usr/src/app/bin
#COPY node_modules /usr/src/app/node_modules
COPY public /usr/src/app/public
COPY routes /usr/src/app/routes
COPY views /usr/src/app/views
COPY test /usr/src/app/test


EXPOSE 80

#ENV WWW_DIR /usr/src/app/public

CMD [ "npm",  "start" ]
