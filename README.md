# Stable Diffusion Request Builder

`npm i stable-diffusion-api-request-builder `

## Building Requests

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
  "negative_prompt": "cgi, illustration",
  "seed": "1234"
}
```

## Building a conditional request

```javascript
const StableDiffusionRequestBuilder = require('../StableDiffusionRequestBuilder');

const buildRequest = (prompt, seed) => {
  const request = new StableDiffusionRequestBuilder()
    .setPrompt(prompt);

  if (seed !== null) {
    request.setSeed(seed);
  }

  return request;
};

console.log(buildRequest("A red apple on a table", 1234));
console.log(buildRequest("A red apple on a table", null));
```

```javascript
{
  "prompt": "A red apple on a table",
  "seed": 1234
}
{
  "prompt": "A red apple on a table",
  "seed": -1
}
```

## Applying a saved template

Apply a saved template to the request builder to add onto.

```javascript
const template = {
  seed: 1234,
  prompt: 'A red apple on a table',
  sampler_index: 'DPM++ 2M Karras',
  enable_hr: true
};

const request = new StableDiffusionRequestBuilder()
  .applyTemplate(template);

console.log(request);
```

```javascript
{
  seed: 1234,
  steps: 25,
  prompt: 'A red apple on a table',
  sampler_index: 'DPM++ 2M Karras',
  enable_hr: true
}
```

The builder will filter out parameters that are not valid for the request.

```javascript
const template = {
  seed: 1234,
  prompt: 'A red apple on a table',
  sampler_index: 'DPM++ 2M Karras',
  enable_hr: true,
  invalid_parameter: 'bad parameter'
};

const request = new StableDiffusionRequestBuilder()
  .applyTemplate(template);

console.log(request);
```

```javascript
{
  seed: 1234,
  steps: 25,
  prompt: 'A red apple on a table',
  sampler_index: 'DPM++ 2M Karras',
  enable_hr: true
}
```

## Defaults

Be default, the builder will return an empty text prompt and a seed of -1. This will cause Stable Diffusion to generate a random seed.

```javascript
const request = new StableDiffusionRequestBuilder();

console.log(request);
```

```javascript
{
  prompt: "",
  seed: -1
}
```
