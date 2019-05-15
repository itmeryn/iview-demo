<template>
<div>
    {{$route.name}}
</div>


</template>
<script>
    export default {
        props: {},
        data() {
            return {};
        },
        computed: {},
        methods: {},
        mounted() {
            this.$on('on-menu-item-select', function (e) {
                console.log(e)
            })

            this.$on('on-menu-item-select', function (e) {
                console.log(e)
            })
        }
    };
</script>