<template>
  <div class="slider-container" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <h1>Выбери свой холодильник</h1>
    <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="slide" v-for="(image, index) in images" :key="index" @click="$emit('setImage',image)">
        <img :src="image" alt="Image Slide" class="slider-image" />
      </div>
    </div>
    <div class="dots">
      <span v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        'fridge_1.png',
        'fridge_2.png',
        'fridge_3.png',
        'fridge_4.png'
      ],
      startX: 0,
      endX: 0
    };
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.endX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      if (this.startX - this.endX > 50) {
        this.nextSlide();
      } else if (this.startX - this.endX < -50) {
        this.prevSlide();
      }
    }
  },
};
</script>

<style>
h1{
  font-size: 30px;
  margin: 0;
}
.slider-container {
  position: relative;
  width: 250px;
  aspect-ratio: 1 / 3;
  margin: 0 auto;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  box-sizing: border-box;
}

.slider-image {
  width: 100%;
  height: auto;
}

.dots {
  text-align: center;
}

.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.dots span.active {
  background-color: #333;
}
</style>