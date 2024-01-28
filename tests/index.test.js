const StableDiffusionRequestBuilder = require('../StableDiffusionRequestBuilder');

test('builds a request with the given parameters', () => {
  const testRequestBase = {
    prompt: 'my test prompt',
    negative_prompt: 'my negative prompt',
    seed: 1234,
    sampler_index: 'test sampler',
    steps: 20,
    cfg_scale: 7
  }

  const testRequest = new StableDiffusionRequestBuilder()
    .setPrompt(testRequestBase.prompt)
    .setNegativePrompt(testRequestBase.negative_prompt)
    .setSeed(testRequestBase.seed)
    .setSamplerIndex(testRequestBase.sampler_index)
    .setSteps(testRequestBase.steps)
    .setCfgScale(testRequestBase.cfg_scale);

  expect(testRequest).toEqual(testRequestBase);
});

test('builds a request with default parameters if no parameters are added', () => {
  const testRequest = new StableDiffusionRequestBuilder();

  expect(testRequest).toEqual({ prompt: '', seed: -1 });
});