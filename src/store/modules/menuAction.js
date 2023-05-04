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
        {id:1, name:"home", title:"首页", parentId:"0", url:"/home", views:"/views/Home.vue", icon:"app", access:['views', 'add']},
        {id:2, name:"caijing", title:"财经频道", parentId:"0", url:"/caijing", views:"/views/Caijin.vue", icon:"view-module", access:['views', 'add']},
        {id:3, name:"about", title:"关于", parentId:"0", url:"/about", views:"/views/About.vue", icon:"view-module", access:['views', 'add']},
        {id:4, name:"gupiao", title:"股票", parentId:"2", url:"/gupiao", views:"/views/Gupiao.vue", icon:"view-module", access:['views', 'add']},
        {id:5, name:"jijin", title:"基金", parentId:"2", url:"/jijin", views:"/views/Jijin.vue", icon:"view-module", access:['views', 'add']},
        {id:6, name:"gupp", title:"股票1", parentId:"4", url:"/gupp", views:"/views/gupp.vue", icon:"view-module", access:['views', 'add']},
      ];
    }
  }
});