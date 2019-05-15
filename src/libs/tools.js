export const findrouterByname = (routers, homeName = 'home') => {
    let i = -1
    let len = routers.length
    let homeRoute = {}
    while (++i < len) {
        let item = routers[i]
        if (item.children && item.children.length) {
            let res = getHomeRoute(item.children, homeName)
            if (res.name) return res
        } else {
            if (item.name === homeName) homeRoute = item
        }
    }
    return homeRoute
}



export const routesToDict = (r, list = {}) => {
    let i = -1
    let len = r.length
    while (++i < len) {
        let item = r[i]
        let iconTmp=""
        try{
           iconTmp = item.meta.icon
        }
        catch (e) {
            iconTmp=""
        }

        list[item.name]={
            name:item.name,
            icon:iconTmp
        }
        if (item.children && item.children.length) {
            list[item.name]['child']=routesToDict(item.children, {})
        }
    }
    return list
}