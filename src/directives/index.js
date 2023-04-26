import router from '@/router'
export default {
    install(app) {
        // 权限控制, 没有相关的权限, 则删除模块
        app.directive('access', {
            mounted(el, val) {
                const action = val.value.action;
                const effect = val.value.effect;
                const rights = router.currentRoute.value.meta.rights;
                //&& effect === 'disabled'
                // if (rights.includes(action)) {
                //     // 仅仅是禁用按钮，并不删除此按钮
                //     el.disabled = true;
                //     // element 对按钮的要求
                //     el.classList.add('is-disabled')
                // }else{
                //     el.parentNode.removeChild(el); 
                // }
                if (!rights.includes(action)) {
                    el.parentNode.removeChild(el); 
                }
            }
        })
    }
}