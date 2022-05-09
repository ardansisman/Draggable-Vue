<template>
<div>
  <draggable v-model="myArray">
    <transition-group>
      <div class="drop-zone" v-for="element in myArray" :key="element.id">
        {{ element.name }}
      </div>
     
    </transition-group>
    
  </draggable>
  <h1>{{myArray}}</h1>
</div>


</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      myArray: [
        { id: 1, name: "soner" },
        { id: 2, name: "ardan" },
        { id: 3, name: "şişman" },
      ],
    };
  },
  components: {
    draggable,
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
</style>
