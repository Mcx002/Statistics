<template>
    <div>
        <a href="" @click.prevent="$router.go(-1)">back</a><br><br>
        <textarea type="text" v-model="value" cols="100" rows="10" /><br>
        n(jumlah) = {{this.n}}<br><br>
        susunan terendah = [{{this.sortasc.join(", ")}}]<br><br>
        <p>Modus adalah value yang memiliki jumlah terbanyak, cari aja sendiri ya ;v<br> kalo misal 
        {{this.tableFreq[2]!=null?this.tableFreq[2].value:'7'}} frekuensinya terbanyak ya.. berarti 
        {{this.tableFreq[2]!=null?this.tableFreq[2].value:'7'}}.<br>kalo ada 2 tinggal cari rata" nya. rumus = total/n</p>
        <table v-show="tableFreq.length!=0" class="table" border="1">
            <thead>
                <tr>
                    <th>value</th>
                    <th>Frekuensi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data,i) in tableFreq" :key="i">
                    <td>{{data.value}}</td>
                    <td>{{data.freq}}</td>
                </tr>
            </tbody>
        </table>
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
        tableFreq(){
            let temp = this.sortasc
            let i, result
            result = []
            this.groupBy(temp).forEach((data)=>{
                let temp_obj = {
                    value:data,
                    freq:0
                }
                for(i=0;i<temp.length;i++){
                    if(data==temp[i])
                        temp_obj.freq++
                }
                result.push(temp_obj)
            })
            return result
        }
    },
    methods:{
        groupBy(arr){
            let i, result;
            result = []
            for(i=0; i<arr.length; i++){
                result[arr[i]] = arr[i]
            }
            return result
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