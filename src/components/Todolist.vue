<template>
  <div class="todolist">
    <input type="text" v-model="todoText" placeholder="Add TODO"/>
    <!-- v-model 直接和script檔裡面的todoText變數做綁定 -->
    <button v-on:click="addTask">AddTask</button>
    <button v-on:click="deleteFinish">deleteFinish</button>
    <div class="todos">
      <ul id="todos">
        <li v-for="(item, index) in items" v-bind:key="item.id">
          <input type="checkbox" v-on:click="isCompleted(item.id)">
          {{item.id}} ------{{ item.text }}
          <button v-on:click="deleteTask(item.id)">kill</button>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data () {
    return {
      // warning ,if you use the v-for 's index, it will has bug that the index are not fixed.
      items: [
         {id:0, text:"看書", isCompleted:false},
         {id:1, text:"遛狗",isCompleted:false},
         {id:2, text:"玩貓",isCompleted:false},
         {id:3, text:"打東東",isCompleted:false}
      ],
      todoText: '',
      number: 4, //index從3開始
    }
  },
  // bug發生在這邊設成computed
  methods: {
    addTask: function() {
      this.items.push(
        { 
          id: this.number,
          text: this.todoText,
          isCompleted: false,
        }
      );
      this.number++; // increse the index.
    },
    deleteTask: function(index) {
      //console.log(index);
      // 要指定index不能用splice this.items.splice(index,1)
      this.items = this.items.filter(
        function(item) {
          return item.id != index;
        }
      )
    },
    isCompleted: function(index) {
      this.items[index].isCompleted = !this.items[index].isCompleted;
      //console.log(this.items[index].isCompleted);
    },
    deleteFinish: function(){ // Warning! array.filter dones't change the original array. it will return a new one.
      this.items = this.items.filter(
        function(item) {
          //console.log(item);
          return item.isCompleted == false;
        }
      );
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: circle ;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>