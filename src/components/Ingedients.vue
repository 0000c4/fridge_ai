<template>
  <div class="ingredient_container">
    
      <label v-for="Ingedient in store.ingredients" class="checkbox style-g" :key="Ingedient.id">
        <input type="checkbox" v-model="store.ingredients[Ingedient.id].checked"/> <!--я панк-->
        <div class="checkbox__checkmark"></div>
        <div class="checkbox__body">{{ Ingedient.name }}</div>
      </label>
    
  </div>
</template>

<script setup>
import { store } from '../store/store';

</script>

<style scoped>
.ingredient_container{
  margin-top: 1.2rem;
  height: 280px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.checkbox.style-g {
  margin-top: 0.8rem;
  display: flex;
  width: 96%;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkbox.style-g input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkbox.style-g input:checked ~ .checkbox__checkmark {
  background-color: #fff;
}
.checkbox.style-g input:checked ~ .checkbox__checkmark:after {
  opacity: 1;
  left: 8px;
}
.checkbox.style-g input:checked ~ .checkbox__body {
  font-weight: bold;
}
.checkbox.style-g:hover input ~ .checkbox__checkmark {
  background-color: #eee;
}
.checkbox.style-g:hover input:checked ~ .checkbox__checkmark {
  background-color: #eee;
}
.checkbox.style-g .checkbox__checkmark {
  position: absolute;
  top: 1px;
  right: 0;
  height: 22px;
  width: 22px;
  background-color: #eee;
  transition: background-color 0.25s ease;
  border-radius: 4px;
}
.checkbox.style-g .checkbox__checkmark:after {
  content: "";
  position: absolute;
  left: -20px;
  top: -8px;
  width: 15px;
  height: 25px;
  border: solid #2ba32b;
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.25s ease, left 0.25s ease;
}
.checkbox.style-g .checkbox__body {
  color: #333;
  line-height: 1.4;
  font-size: 16px;
  transition: font-weight 0.25s ease;
}
</style>
