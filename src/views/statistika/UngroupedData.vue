<template>
    <div>
        <a href="" @click.prevent="$router.go(-1)">back</a><br><br>
        <textarea type="text" v-model="value" cols="100" rows="10" /><br>
        n(jumlah) = {{this.n}}<br><br>
        sum = {{this.sum}}<br><br>
        rata rata = sum/n = {{this.hitungPopulasi}}
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
        n(){
            let temp = this.value.split(" ")
            return temp.length
        },
        sortasc(){
            let temp = this.value.split(" ")
            temp = temp.sort()
            return temp
        },
        sum(){
            let temp = this.value.split(" ").map(data=>parseInt(data)).reduce((a,b)=>a+b,0)
            return temp
        },
        hitungPopulasi(){
            return this.sum/this.n
        }
    }
}
</script>

<style>
    .table{
        border-collapse: collapse;
        width:400px;
    }
    .table td{
        text-align: center; 
        vertical-align: middle;
        padding:8px
    }
    .table th{
        padding: 10px;
    }
</style>