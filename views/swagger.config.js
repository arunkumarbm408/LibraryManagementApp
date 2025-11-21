import swaggerAutogen from "swagger-autogen";
const swagger = swaggerAutogen();
import dotenv from 'dotenv';
dotenv.config();
const doc = {
  info: {
    app_version: process.env.app_version ?? "1.0.0",
    title: "Library Management API'S",
    description: "Documentation",
  },
  host: process.env.swagger_host_url,
  basePath: "/", 
  schemes: ["https", "http"], // by default: ['http']
  consumes: ["application/json", "application/x-www-form-urlencoded"],
  produces: ["application/json"],
  tags: [],

  securityDefinitions: {
    AccessToken: {
      type: "apiKey",
      in: "header",
      name: "x-access-token",
      description:
        "Please provide the valid access token, if you don't have please login and get the token as response!",
    },
  }, 
  definitions: {
    AuthorCreate:{
      name: "J. K. Rowling"
    },
    BookAdd:{
       name: "Harry Potter",
       author: "J. K. Rowling",
       source: "Amazon",
       publishedAt: "2020-05-05",
       ratings: 5
    }
  },
};

const outputFile = "./views/swagger-api-view.json";
const endpointsFiles = ["./server.js"];


await swagger(outputFile, endpointsFiles, doc);
