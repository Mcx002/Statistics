<template>
    <div>
        <a href="" @click.prevent="$router.go(-1)">back</a><br><br>
        <textarea type="text" v-model="value" cols="100" rows="10" /><br>
        mean = {{ mean }}<br><br>
        varian = {{ varian }}
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:""
        }
    },
    computed:{
        mean(){
            let arr = this.value.split(" ").map(data=>parseInt(data))
            let sigmaarr = arr.reduce((a,b)=>a+b,0)
            return sigmaarr/arr.length
        },
        varian(){
            let arr = this.value.split(" ").map(data=>parseInt(data))
            let temp_val = 0
            arr.forEach(data=>{
                temp_val += Math.pow((data-3.5),2)
                console.log("("+data+"-3.5)^2 = "+Math.pow((data-3.5),2))
            })
            return temp_val/arr.length
        }
    }
}
</script>