<template>
  <div class="home">
    <div>
      <div class="header"><h2>Statistika</h2></div>
      <div class="body">
        <router-link :to="{name:'TableFrekuensi'}">Table Frekuensi</router-link>
      </div>
    </div>
    <div>
      <div class="header"><h2>Ukuran Statistika</h2></div>
      <div class="body">
        <router-link :to="{name:'UngroupedData'}">Ungrouped Data</router-link><br>
        <router-link :to="{name:'GroupedData'}">Grouped Data</router-link><br>
      </div>
    </div>
    <div>
      <div class="header"><h2>Distribusi peluang diskrit</h2></div>
      <div class="body">
        <router-link :to="{name:'Uniform'}">uniform</router-link><br>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
