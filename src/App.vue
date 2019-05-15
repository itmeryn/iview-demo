<style scoped>
    body {
        height: 100vmin;
        background: #f8f8f9 !important;
    }

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }
</style>
<template>
    <div id="app">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" :active-name="activeName">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem :name="item" :key="item" :to="{name:item}" v-for="item in topMenuList">
                            <Icon type=""></Icon>
                            {{item}}
                        </MenuItem>
                    </div>
                </Menu>
            </Header>

            <router-view/>

            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>
    import Emitter from '@/mixins/emitter';
    import {routesToDict} from '@/libs/tools'
    import {routers} from "@/router/routers"

    export default {
        name:"app",
        props: {},
        mixins: [Emitter],
        data() {
            return {
                MenuList: {},
                topMenuList: [],
                activeName:'home'
            };
        },
        created() {
            this.MenuList = routesToDict(routers)
            this.$store.commit('setMenuList',this.MenuList)
            this.topMenuList = Object.keys(this.MenuList)
            this.$store.commit('setTopMenuList',this.topMenuList)
            this.$on('on-top-menu-select', (name) => {
                this.activeName=name
            });
        },
        watch: {
            '$route'(to, from) {
                if (this.topMenuList.indexOf(to.name) !== -1) {
                    let list=this.MenuList[to.name].child==='undefined'?[]:this.MenuList[to.name].child
                    this.broadcast('my-main', 'on-left-menu-change',list);
                }
            }
        },

    };
</script>


