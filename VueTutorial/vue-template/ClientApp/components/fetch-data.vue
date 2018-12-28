<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from the server.</p>

        <table v-if="forecasts" class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(forecast, index) in forecasts" :key="index" >
                    <td>{{ forecast.dateFormatted }}</td>
                    <td>{{ forecast.temperatureC }}</td>
                    <td>{{ forecast.temperatureF }}</td>
                    <td>{{ forecast.summary }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <p ><em>Loading...</em></p>
            <h1><icon icon="spinner" pulse/></h1> 
        </div>
        
    </div>
</template>

<script>
    export default {
        
        data (){
            // define variables
            return {
                forecasts: null
            }
        },
        computed:{
            // mmutate the data
        },

        methods:{
            // methods
            async loadData(){
                try{
                    let response = await this.$http.get("/api/weather/forecasts")
                    console.log(response.data.forecasts)
                    this.forecasts = response.data
                }catch(err){
                    window.alert(err)
                    console.log(err)
                }
            }
        },
        mounted: function(){
            this.loadData()
        },
        
    }
    
</script>

<style>

</style>

