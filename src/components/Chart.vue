<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Chart />
  </div>
</template>

<script>
import Chart from './js/Chart'

export default {
  name: 'hello',
  components: {
    Chart,
  },
  data () {
    return {
      msg: '這裡是引用Vue-chart.js套件的頁面.',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>