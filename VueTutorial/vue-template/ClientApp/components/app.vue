<template>
    <div id="app" class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <nav-menu params="route: route"></nav-menu>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import navMenu from './nav-menu'

export default{
    components:{
        'nav-menu':navMenu
    },
    data () {
        return {}
    }
}
</script>
