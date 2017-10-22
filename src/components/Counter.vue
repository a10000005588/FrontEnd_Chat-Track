<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> Here is the result: {{total}}</h2>
    <input type="number" v-model="count">

    <button v-on:click="increase">+{{count}}</button>
    <button v-on:click="decrease">-{{count}}</button>
    <button v-on:click="setButtonZero">按鈕歸 0</button>
    <button v-on:click="setZero">結果歸0</button>
    <button v-on:click="multiply">^0^</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Here is counter page.',
      total: 0,
      count: 0,
    }
  },
  // bug發生在這邊設成computed
  methods: {
      increase: function() {
          this.total += parseInt(this.count);
      },
      decrease: function() {
          this.total -= this.count;
      },
      setButtonZero: function() {
          this.count = 0;
      },
      multiply: function() {
          this.total *= this.count;
      },
      setZero: function() {
        this.total = 0;
      }

  }
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