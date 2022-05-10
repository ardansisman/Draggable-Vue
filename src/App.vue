<template>
  <div>
    <draggable v-model="myArray" @change="log">
      <div class="drop-zone" v-for="element in myArray" :key="element.id">
        {{ element.name }}
      </div>
    </draggable>
    <input class="myInput" placeholder="write something and enter... and drag and drop list items" type="text" @change="addArray($event)" />
    <h1>{{ myArray }}</h1>
    <hr><hr>
    
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      myArray: this.$store.getters.getValues,
    };
  },
  components: {
    draggable,
  },
  methods: {
    addArray(event) {
      console.log();
     
      var obj = { name: event.target.value, id: this.myArray.length + 1 };
      this.$store.commit("setValue", obj);
      event.target.value = "";
    },
    log(){
      this.$store.commit("changeValue", this.myArray);
    }
  },
};
</script>

<style>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}
.myInput{
   width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
