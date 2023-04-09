import { defineStore } from 'pinia';

export const useSettingStore = defineStore('setting', {
  state: () => ({
    showSettingPanel: false,
  }),
  getters: {},
  actions: {
    updateConfig(showSettingPanel) {
      this.showSettingPanel = showSettingPanel;
    }
  }
});