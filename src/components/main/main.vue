<style scoped>
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
    <Layout :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem :to="item" :key="item.name" v-for="item in Breadcrumb">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px 0', minHeight: '75vh', background: '#fff'}">
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}" v-show="showMenu">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <template v-for="item in LeftMenuList">
                            <Submenu :name="item.name" v-if="item.child">
                                <template slot="title">
                                    <Icon type="ios-navigate"></Icon>
                                    {{item.name}}
                                </template>
                                <MenuItem :name="v.name" :key="v.name" :to="{name:v.name}" v-for="v in item.child">
                                    {{v.name}}
                                </MenuItem>
                            </Submenu>
                            <MenuItem :name="item.name" :to="{name:item.name}" v-else> {{item.name}}</MenuItem>
                        </template>
                    </Menu>
                </Sider>
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <router-view/>
                </Content>
            </Layout>
        </Content>
    </Layout>
</template>
<script>
    import Emitter from '@/mixins/emitter';

    export default {
        name: "my-main",
        props: {},
        mixins: [Emitter],
        data() {
            return {
                LeftMenuList: [],
                showMenu: false,
                MenuList: this.$store.state.app.MenuList,
                topMenuList: this.$store.state.app.topMenuList,
                Breadcrumb:[]
            };
        },
        methods: {
            initroute() {
               this.Breadcrumb = this.$route.matched.slice(1)
            }
        },
        created() {
            console.log(this.$route)
            let list = this.MenuList[this.$route.matched[1].name].child
            this.showMenu = list === "undefined" ? false : true
            this.LeftMenuList = list === "undefined" ? [] : list
            this.dispatch('app', 'on-top-menu-select', this.$route.matched[1].name);
            this.initroute()
            this.$on('on-left-menu-change', (list) => {
                this.showMenu = list === "undefined" ? false : true
                this.LeftMenuList = list === "undefined" ? [] : list
            });
        },
        watch: {
            '$route'(to, from) {
                this.initroute()
            }
        },


    };
</script>