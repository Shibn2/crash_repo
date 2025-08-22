class FeatureFalgManager {
  constructor() {
    if (FeatureFalgManager.instance) {
      return FeatureFalgManager.instance;
    }
    FeatureFalgManager.instance = this;
    this.featureFlags = {};
  }

  load(featureFlags) {
    this.featureFlags = { ...featureFlags };
  }

  isEnable(flag) {
    return !!this.featureFlags[flag];
  }

  enable(flag) {
    this.featureFlags[flag] = true;
  }

  disable(flag) {
    this.featureFlags[flag] = false;
  }

  listFlags() {
    return { ...this.featureFlags };
  }
}

const featureFlags = new FeatureFalgManager();

export default featureFlags;
