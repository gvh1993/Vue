<template>
    <div id='app-root' class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <menu-component />
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
