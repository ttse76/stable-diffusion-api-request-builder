class StableDiffusionRequestBuilder {
  constructor() {
    this.prompt = '';
    this.seed = -1;
  }

  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  setSeed(seed) {
    this.seed = seed;
    return this;
  }

  valueOf() {
    return {
      prompt: this.prompt,
      seed: this.seed
    };
  }
}

module.exports = StableDiffusionRequestBuilder;