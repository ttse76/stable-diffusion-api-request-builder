# Stable Diffusion Request Builder

This is a request builder to use with the [Stable Diffusion Webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) API. This request builder provides an easy way to build the api request body.

## Installation
NPM

`npm i stable-diffusion-api-request-builder `

Yarn

`yarn add stable-diffusion-api-request-builder `

## Usage

```javascript
const StableDiffusionRequestBuilder = require('../StableDiffusionRequestBuilder');

const request = new StableDiffusionRequestBuilder()
  .setPrompt('A red apple on a table')
  .setNegativePrompt('cgi, illustration')
  .setSeed(1234);

console.log(request);
```

```javascript
{
  "prompt": "A red apple on a table",
  "negative_prompt": "cgi, illustration".
  "seed": "1234"
}
```
