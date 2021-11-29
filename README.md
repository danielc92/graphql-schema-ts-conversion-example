### Summary

This repo contains a working example of how to obtain all of the typescript definitions for a given graphql endpoint. Converting a .graphql schema to .ts provides a huge benefit to any project utilising a graphql backend, especially large projects.

### Steps to reproduce

```

# i use nvm node package manager here
nvm install 14.17.1
nvm use 14.17.1

# install dependencies
npm install

# download schema into .graphql file from endpoint

npm run download-schema

# convert it to a .ts file
npm run convert-schema

```
