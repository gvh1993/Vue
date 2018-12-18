<template>
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component.</p>

        <p>Current count: <strong>{{ currentCount }}</strong></p>

        <button type="button" class="btn btn-primary" @click="incrementCounter()">Increment</button>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data (){
            return {}
        },

        // computed is used for returning the state
        computed: {
            // spread the object
            ...mapState({
                currentCount: state => state.counter
            })
        },

        methods: {
            ...mapActions(['setCounter']),

            incrementCounter: function () {
                var counter = this.currentCount + 1
                this.setCounter({counter: counter})
            }
        }
    }
</script>

<style>
</style>