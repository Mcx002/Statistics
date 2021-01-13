<template>
    <div>
        <a href="" @click.prevent="$router.go(-1)">back</a><br><br>
        <textarea type="text" v-model="value" cols="100" rows="10" /><br>
        n(jumlah) = {{this.n}}<br><br>
        Urut terendah = [{{this.sortasc.join(", ")}}]<br><br>
        R(rentangan) = terbesar - terkecil = {{this.R}}<br><br>
        K = 1 + 3.3 log(n) = {{this.K}}<br><br>
        P = R/K = {{this.P}}<br><br>
        <table v-show="tableFrekuensi.length!=0" class="table" border="1">
            <thead>
                <tr>
                    <th>Kelas</th>
                    <th>Interval Kelas</th>
                    <th>Frekuensi</th>
                    <th>Tepi Interval Kelas</th>
                    <th>Titik tengah</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data,i) in tableFrekuensi" :key="i">
                    <td>{{++i}}</td>
                    <td>{{data.min_interval+" - "+data.max_interval}}</td>
                    <td>{{data.freq}}</td>
                    <td>{{data.tepi_min_interval+" - "+data.tepi_max_interval}}</td>
                    <td>{{data.titik_tengah}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Σ = {{this.n}}</th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>
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
            temp = temp.sort(temp = temp.sort(function(a, b) {
                return a - b;
            }))
            return temp
        },
        R(){
            let r = this.sortasc
            return r[r.length-1]-r[0]
        },
        K(){
            let k = 1 + 3.3 * (Math.log(this.n)/2.3025850929976723)
            console.log("1 + 3.3 * "+(Math.log(this.n)/2.3025850929976723))
            return Math.round(k)
        },
        P(){
            return Math.round(this.R/this.K)
        },
        tableFrekuensi(){
            let temp = this.sortasc
            let result = []
            let min_interval = null
            let max_interval = null
            let temp_object = null
            if(this.value!=""){
                for(let i = 0; i < temp.length; i++){
                    if(max_interval==null||max_interval<temp[i]){
                        if(temp_object!=null){
                            result.push(temp_object)
                        }
                        temp_object = {}
                        min_interval = parseInt(temp[i])
                        max_interval = parseInt(temp[i])+parseInt(this.P-1)
                        temp_object.freq = 0
                        temp_object.min_interval = min_interval
                        temp_object.max_interval = max_interval
                        temp_object.tepi_min_interval = min_interval-0.5
                        temp_object.tepi_max_interval = max_interval+0.5
                        temp_object.titik_tengah = 1/2*(min_interval+max_interval)
                    }
                    if(temp[i]<=max_interval){
                        temp_object.freq += 1
                    }
                    if(i==temp.length-1&&temp_object!={}){
                        result.push(temp_object)
                    }
                }
            }
            console.log({result:result})
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