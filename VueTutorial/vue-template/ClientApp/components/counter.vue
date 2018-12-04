<template>
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component.</p>

        <p>Current count: <strong>{{ currentcount }}</strong></p>

        <button @click="incrementCounter">Increment</button>
    </div>
</template>

<script>
    export default{
        data (){
            return {}
        },

        methods: {
        incrementCounter: function () {
          var counter = this.currentCount + 1
        }
      }
    }
</script>