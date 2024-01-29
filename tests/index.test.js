const StableDiffusionRequestBuilder = require('../StableDiffusionRequestBuilder');

describe('request building', () => {
  test('builds a request with the given parameters', () => {
    const testRequestBase = {
      prompt: 'my test prompt',
      negative_prompt: 'my negative prompt',
      seed: 1234,
      sampler_index: 'test sampler',
      steps: 20,
      cfg_scale: 7
    }
  
    const numKeys = Object.keys(testRequestBase).length;
  
    const testRequest = new StableDiffusionRequestBuilder()
      .setPrompt(testRequestBase.prompt)
      .setNegativePrompt(testRequestBase.negative_prompt)
      .setSeed(testRequestBase.seed)
      .setSamplerIndex(testRequestBase.sampler_index)
      .setSteps(testRequestBase.steps)
      .setCfgScale(testRequestBase.cfg_scale);
  
    expect(testRequest).toEqual(testRequestBase);
    expect(Object.keys(testRequest).length).toBe(numKeys);
  });
  
  test('builds a request with default parameters if no parameters are added', () => {
    const testRequest = new StableDiffusionRequestBuilder();
  
    expect(testRequest).toEqual({ prompt: '', seed: -1 });
  });
  
  test.each([false, true])('buids a conditional request (useUserSeed: %s)', (useUserSeed) => {
    const testSeed = 1234;
    const request = new StableDiffusionRequestBuilder()
      .setPrompt('test prompt');
    
    if (useUserSeed) {
      request.setSeed(testSeed);
    }
  
    expect(request.seed).toBe(useUserSeed ? testSeed : -1);
  });
});

describe('applyTemplate', () => {
  test('apply template with parameters', () => {
    const template = {
      seed: 1234,
      prompt: 'test prompt',
      sampler_index: 'test sampler',
      enable_hr: true
    };

    const request = new StableDiffusionRequestBuilder()
      .applyTemplate(template);
    
    expect(request).toEqual(template);
  });

  test('apply template not including invalid parameters', () => {
    const template = {
      seed: 1234,
      prompt: 'test prompt',
      sampler_index: 'test sampler',
      enable_hr: true,
      invalid_parameter: 'invalid'
    };
    const templateKeys = Object.keys(template);

    const request = new StableDiffusionRequestBuilder()
      .applyTemplate(template);
    
    const requestKeys = Object.keys(request);
    
    expect(requestKeys.length).toBe(Object.keys(templateKeys).length - 1);
    expect(requestKeys).not.toContain('invalid_parameter');
  });

  test('apply template and add onto request', () => {
    const template = {
      seed: 1234,
      prompt: 'test prompt',
      sampler_index: 'test sampler',
      enable_hr: true
    };
    const steps = 25;
    const templateKeys = Object.keys(template);

    const request = new StableDiffusionRequestBuilder()
      .applyTemplate(template)
      .setSteps(steps);
    
    const requestKeys = Object.keys(request);
    
    expect(requestKeys.length).toBe(Object.keys(templateKeys).length + 1);
    expect(requestKeys).toContain('steps');
    expect(request['steps']).toBe(steps);
  });
});