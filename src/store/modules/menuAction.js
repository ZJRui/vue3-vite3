import { defineStore } from 'pinia';

export const useSettingStore = defineStore('setting', {
  state: () => ({
    showSettingPanel: false,
    menus:[]
  }),
  getters: {
    menusList(state){
      var treeData=[];
      var map={};
      state.menus.forEach((item)=>{
          map[item.id]=item;
      })
     
      state.menus.forEach((item)=>{
        var parent = map[item.parentId];
        if (parent) {
            (parent.children || ( parent.children = [] )).push(item);
        } else {
            treeData.push(item);
        }
      })
      return treeData;
    }
  },
  actions: {
    updateConfig(showSettingPanel) {
      this.showSettingPanel = showSettingPanel;
    },
    getMenus() {
      this.menus = [
        {id:1, title:"首页", parentId:"0", url:"/home", icon:"app", access:['views', 'add']},
        {id:2, title:"财经频道", parentId:"0", url:"/caijing", icon:"view-module", access:['views', 'add']},
        {id:3, title:"关于", parentId:"0", url:"/about", icon:"view-module", access:['views', 'add']},
        {id:4, title:"股票", parentId:"2", url:"/gupiao", icon:"view-module", access:['views', 'add']},
        {id:5, title:"基金", parentId:"2", url:"/jijin", icon:"view-module", access:['views', 'add']},
        {id:6, title:"股票1", parentId:"4", url:"/gupp", icon:"view-module", access:['views', 'add']},
      ];
      console.log("menus:"+JSON.stringify(this.menus));
    }
  }
});