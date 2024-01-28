const StableDiffusionRequestBuilder = require('../StableDiffusionRequestBuilder');

test('builds a request with the given parameters', () => {
  const testPrompt = 'my test prompt';
  const testSeed = 1234;

  const testRequest = new StableDiffusionRequestBuilder()
    .setPrompt(testPrompt)
    .setSeed(testSeed);

  expect(testRequest).toEqual({ prompt: testPrompt, seed: testSeed });
});