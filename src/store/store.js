import { reactive } from 'vue'

export const store = reactive({
  ingredients: [
    {id: 0, name: 'яйца', checked: false},
    {id: 1, name: 'молоко', checked: false},
    {id: 2, name: 'хлеб', checked: false},
    {id: 3, name: 'помидоры', checked: false},
  ],
  addIngredient(name) { //добавить в список
    this.ingredients.push({id: this.ingredients.length, name, checked: false})
  }
})
