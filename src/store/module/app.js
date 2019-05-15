import {
    localSave,
    localRead
} from '@/libs/util'

export default {
    state: {
        MenuList: localRead('MenuList'),
        TopMenuList: localRead('LeftMenuList'),
    },
    getters: {},
    mutations: {
        setMenuList(state, list) {
            console.log(list)
            state.MenuList = list
            localSave('MenuList', list)
        },
        setTopMenuList(state, list) {
            state.TopMenuList = list
            localSave('TopMenuList', list)
        },
    },
    actions: {}
}
