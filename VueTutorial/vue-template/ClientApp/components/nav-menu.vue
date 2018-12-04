<template>
    <div class="main-nav">
        <div class="navbar navbar-inverse">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">vue_template</a>
            </div>
           <transition name="slide">
                <div :class="'collapse navbar-collapse' + (!collapsed ? ' show':'')" v-show="!collapsed">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" v-for="(route, index) in routes" :key="index">
                            <router-link :to="route.path" exact-active-class="active">
                                <icon :icon="route.icon" class="mr-2" /><span>{{ route.display }}</span> 
                            </router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import {routes} from '../router/routes'

    export default {
        data(){
            return{
                routes,
                collapsed: true
            }
        },
        methods:{
            toggleCollapsed: function(event){
                this.collapsed = !this.collapsed
            }
        }
    }
</script>

<style scoped>
    .slide-enter-active, .slide-leave-active {
    transition: max-height .35s
    }
    .slide-enter, .slide-leave-to {
    max-height: 0px;
    }

    .slide-enter-to, .slide-leave {
    max-height: 20em;
    }
</style>