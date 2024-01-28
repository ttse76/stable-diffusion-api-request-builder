class StableDiffusionRequestBuilder {
  constructor() {
    this.prompt = '';
    this.seed = -1;
  }

  setPrompt(prompt) {
    this.prompt = prompt;
    return this;
  }

  setNegativePrompt(negativePrompt) {
      this.negative_prompt = negativePrompt;
      return this;
  }

  setStyles(styles) {
      this.styles = styles;
      return this;
  }

  setSeed(seed) {
      this.seed = seed;
      return this;
  }

  setSubseed(subseed) {
      this.subseed = subseed;
      return this;
  }

  setSubseedStrength(subseedStrength) {
      this.subseed_strength = subseedStrength;
      return this;
  }

  setSeedResizeFromH(seedResizeFromH) {
      this.seed_resize_from_h = seedResizeFromH;
      return this;
  }

  setSeedResizeFromW(seedResizeFromW) {
      this.seed_resize_from_w = seedResizeFromW;
      return this;
  }

  setSamplerName(samplerName) {
      this.sampler_name = samplerName;
      return this;
  }

  setBatchSize(batchSize) {
      this.batch_size = batchSize;
      return this;
  }

  setNIter(nIter) {
      this.n_iter = nIter;
      return this;
  }

  setSteps(steps) {
      this.steps = steps;
      return this;
  }

  setCfgScale(cfgScale) {
      this.cfg_scale = cfgScale;
      return this;
  }

  setWidth(width) {
      this.width = width;
      return this;
  }

  setHeight(height) {
      this.height = height;
      return this;
  }

  setRestoreFaces(restoreFaces) {
      this.restore_faces = restoreFaces;
      return this;
  }

  setTiling(tiling) {
      this.tiling = tiling;
      return this;
  }

  setDoNotSaveSamples(doNotSaveSamples) {
      this.do_not_save_samples = doNotSaveSamples;
      return this;
  }

  setDoNotSaveGrid(doNotSaveGrid) {
      this.do_not_save_grid = doNotSaveGrid;
      return this;
  }

  setEta(eta) {
      this.eta = eta;
      return this;
  }

  setDenoisingStrength(denoisingStrength) {
      this.denoising_strength = denoisingStrength;
      return this;
  }

  setSMinUncond(sMinUncond) {
      this.s_min_uncond = sMinUncond;
      return this;
  }

  setSChurn(sChurn) {
      this.s_churn = sChurn;
      return this;
  }

  setSTmax(sTmax) {
      this.s_tmax = sTmax;
      return this;
  }

  setSTmin(sTmin) {
      this.s_tmin = sTmin;
      return this;
  }

  setSNoise(sNoise) {
      this.s_noise = sNoise;
      return this;
  }

  setOverrideSettings(overrideSettings) {
      this.override_settings = overrideSettings;
      return this;
  }

  setOverrideSettingsRestoreAfterwards(overrideSettingsRestoreAfterwards) {
      this.override_settings_restore_afterwards = overrideSettingsRestoreAfterwards;
      return this;
  }

  setRefinerCheckpoint(refinerCheckpoint) {
      this.refiner_checkpoint = refinerCheckpoint;
      return this;
  }

  setRefinerSwitchAt(refinerSwitchAt) {
      this.refiner_switch_at = refinerSwitchAt;
      return this;
  }

  setDisableExtraNetworks(disableExtraNetworks) {
      this.disable_extra_networks = disableExtraNetworks;
      return this;
  }

  setComments(comments) {
      this.comments = comments;
      return this;
  }

  setEnableHr(enableHr) {
      this.enable_hr = enableHr;
      return this;
  }

  setFirstphaseWidth(firstphaseWidth) {
      this.firstphase_width = firstphaseWidth;
      return this;
  }

  setFirstphaseHeight(firstphaseHeight) {
      this.firstphase_height = firstphaseHeight;
      return this;
  }

  setHrScale(hrScale) {
      this.hr_scale = hrScale;
      return this;
  }

  setHrUpscaler(hrUpscaler) {
      this.hr_upscaler = hrUpscaler;
      return this;
  }

  setHrSecondPassSteps(hrSecondPassSteps) {
      this.hr_second_pass_steps = hrSecondPassSteps;
      return this;
  }

  setHrResizeX(hrResizeX) {
      this.hr_resize_x = hrResizeX;
      return this;
  }

  setHrResizeY(hrResizeY) {
      this.hr_resize_y = hrResizeY;
      return this;
  }

  setHrCheckpointName(hrCheckpointName) {
      this.hr_checkpoint_name = hrCheckpointName;
      return this;
  }

  setHrSamplerName(hrSamplerName) {
      this.hr_sampler_name = hrSamplerName;
      return this;
  }

  setHrPrompt(hrPrompt) {
      this.hr_prompt = hrPrompt;
      return this;
  }

  setHrNegativePrompt(hrNegativePrompt) {
      this.hr_negative_prompt = hrNegativePrompt;
      return this;
  }

  setSamplerIndex(samplerIndex) {
      this.sampler_index = samplerIndex;
      return this;
  }

  setScriptName(scriptName) {
      this.script_name = scriptName;
      return this;
  }

  setScriptArgs(scriptArgs) {
      this.script_args = scriptArgs;
      return this;
  }

  setSendImages(sendImages) {
      this.send_images = sendImages;
      return this;
  }

  setSaveImages(saveImages) {
      this.save_images = saveImages;
      return this;
  }

  setAlwaysonScripts(alwaysonScripts) {
      this.alwayson_scripts = alwaysonScripts;
      return this;
  }

  valueOf() {
    let request = {};
  
    for (const key in this) {
      if (this[key]) {
        request
      }
    }

    return request;
  }
}

module.exports = StableDiffusionRequestBuilder;