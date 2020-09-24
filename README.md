# Upload Files [BACKEND]
<p align="center">
  <a href="https://www.codacy.com/manual/TheoTi/uploadFiles-Backend/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=TheoTi/uploadFiles-Backend&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/cf707929eb5341d09cf1b136ee72e698"/></a>
  <a href="https://insomnia.rest/run/?label=uploadFiles&uri=http%3A%2F%2Flocalhost%3A3333%2Fuploads" target="_blank"><img         src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</P>

## 💻 Project

this project is a simple API RESTful, developed to upload files.

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [MongoDB][mongodb]
- [Docker][docker]
## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Docker][docker] with [MongoDB][mongodb] image, [Node.js][nodejs] + [Yarn][yarn] installed on your computer and configure environment variables.

From your command line:

### Install API 

```bash
# Clone this repository
$ git clone https://github.com/TheoTi/uploadFiles-Backend

# Go into the repository
$ cd uploadFiles-Backend

# Install dependencies
$ yarn install

# Download Mongo image docker
$ docker pull mongo

# Create MongoDB serve
$ docker run --name mongodb -p 17017:27017 -d mongo

# --name -> specifies the name of the container (mongodb)
# -p -> configure the port where the communication with MongoDB will take place(default 27017)
# -d -> runs the container as a background service
# mongo -> indicates the image used as the basis for generating the container

# Start MongoDB container
$ docker start mongodb #(name used in creating the container)

# Start server
$ yarn dev

# running on port 3333
```

## 🤔 How to contribute

-  Make a fork;
-  Create a branch with your feature: `git checkout -b my-feature`;
-  Commit changes: `git commit -m 'feat: My new feature'`;
-  Make a push to your branch: `git push origin my-feature`.

Made with ♥ by Matheus Fernandes :wave: [Get in touch!](https://www.linkedin.com/in/matheus-ventura-14919118a/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[yarn]: https://yarnpkg.com/
[mongodb]: https://www.mongodb.com/
[docker]: https://www.docker.com/
