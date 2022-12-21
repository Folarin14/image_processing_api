FROM node:18.12.1-slim

WORKDIR /usr/app

COPY package*.json ./

RUN npm install && npm i express

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]

### package.json does not update interactively in docker when installing new packages
# Even though updating the package.json is a best practice, it's not mandatory to update it 
# and won't affect anything in your personal project. It's mainly for npm publishing. 
# In the future, if you plan to publish them, have your CI update the patch version during 
# the publishing process. - https://stackoverflow.com/questions/73427902/updating-version-in-package-json-annoying-docker 

### Simple solution
# Install all the dependencies and devdependencies on local machine needed for app to work 
# then move it to docker