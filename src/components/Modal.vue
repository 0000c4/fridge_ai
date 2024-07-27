<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <Transition>
      <Loader v-if="isLoading" />
    </Transition>

    <div v-if="recipesGenerated" class="modal-content">
      <div class="modal_header">
        <span class="close" @click="() => { recipesGenerated = false; recipes = '' }">
          <svg height="38px"
            viewBox="0 0 512 512" width="38px" style="margin-left: -10px;"  xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
          </svg>
        </span>
        <p class="recipes" v-for="recipe in recipes" style="text-align: left; overflow: auto;">{{ recipe }}</p>
      </div>
    </div>

    <div v-else class="modal-content">
      <div class="modal_header">
        <span class="close" @click="$emit('closeModal')">
          <svg height="38px"
            viewBox="0 0 512 512" width="38px" style="margin-left: -10px;"  xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <polygon  points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
          </svg>
        </span>
        <Ingedients />
      </div>
      <div class="modal_footer">
        <div class="addIngredient">
          <input v-model="newIngredient" id="input_ingredient" type="text" placeholder="Добавить ингредиент">
          <button class="button addButton"
            @click="() => { newIngredient !== '' && store.addIngredient(newIngredient); newIngredient = '' }">+</button>
        </div>
        <button class="button genButton" @click="generaterecipes">Сгенерировать
          рецепт</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, nextTick, ref } from 'vue';
import Ingedients from './Ingedients.vue';
import Loader from './Loader.vue';
import { store } from '../store/store';

const isLoading = ref(false)
const newIngredient = ref('')
const recipesGenerated = ref(false)
const recipes = ref('')

onMounted(async () => {
  await nextTick()
  document.getElementById('input_ingredient').focus()
})

const generaterecipes = async () => {
  const ingredients = []
  for (const ingredient of store.ingredients) {
    if (ingredient.checked) {
      ingredients.push(ingredient.name)
    }
  }
  const prompt = `У есть ${ingredients.join(', ')}. НИКАКИЕ ДРУГИЕ ПРОДУКТЫ ИСПОЛЬЗОВАТЬ НЕЛЬЗЯ. У меня есть только те ПРОДУКТЫ которые я упомянул. Пожалуйста, пришли мне 3 рецепта здоровой еды, которую я смогу приготовить из продуктов которые я написал. Ответ должен быть без форматирования текста, а после каждого рецепта должен быть знак $`

  isLoading.value = true;
  const response = await fetch('/api/ai/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ message: prompt })
  });
  const { content } = await response.json();
  recipes.value = content.split('$')
  recipesGenerated.value = true
  isLoading.value = false;
}
</script>

<style scoped>
.modal {
  display: flex;
  /* Hidden by default */
  justify-content: center;
  align-items: center;
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  max-width: 420px;
  padding: 1rem 1.5rem;
  border: 1px solid #888;
  border-radius: 8px;
  width: 80%;
  min-height: 420px;
  /* Could be more or less, depending on screen size */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.close {
  fill: rgb(170, 170, 170);
  font-size: 28px;
  font-weight: bold;
  align-self: flex-start
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.addButton {
  background-color: #eee;
}

.genButton {
  padding: 0.5rem;
  font-size: 18px;
  color: white;
  background-color: #2ab82a;
}

.addIngredient {
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.modal_header {
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow: auto;
}

.modal_footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.recipes {
  overflow: visible !important;
}
</style>