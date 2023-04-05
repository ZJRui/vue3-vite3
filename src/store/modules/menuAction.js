import { defineStore } from 'pinia';

const state = {
  showSettingPanel: false,
};


export const useSettingStore = defineStore('setting', {
  state: () => state,
  actions: {
    updateConfig(showSettingPanel) {
      this.showSettingPanel = showSettingPanel;
    }
  }
});