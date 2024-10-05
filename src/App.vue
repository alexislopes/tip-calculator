<template>
  <v-app>
    <div class="container">
      <v-btn @click="handleClick" class="floating__button" elevation="2" icon>
        <v-icon>{{ icons[step] }}</v-icon>
      </v-btn>
      <h1 class="logo">Le/Tip</h1>
      <div class="container__content">
        <PainelEntrada v-show="device === 'desktop' || step === 'entrada'" />
        <PainelResultado v-show="device === 'desktop' || step === 'resultado'" />
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { computed, ref } from 'vue';
import PainelEntrada from './components/PainelEntrada.vue';
import PainelResultado from './components/PainelResultado.vue';

const { width } = useWindowSize()
const device = computed(() => {
  return width.value < 768 ? 'mobile' : 'desktop'
})

function handleClick() {
  step.value = step.value === 'entrada' ? 'resultado' : 'entrada'
}

const icons = ref({
  entrada: 'mdi mdi-chevron-right',
  resultado: 'mdi mdi-chevron-left'
})

const step = ref('entrada')

</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  justify-content: center;
  align-items: center
}

.painel__entrada,
.painel__resultado {
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  gap: 1.5rem;
  width: 80%;
}

.logo {
  font-size: xx-large;
  width: 100%;
  text-align: center;
  padding: 4rem 0;
}

.slider__container {
  display: flex;
  justify-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.slider__container__hint {
  font-size: small;
}

.floating__button {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 2rem;
}

.container__content {
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 100%;
}

@media (min-width: 768px) {


  .floating__button {
    display: none;
  }

  .painel__entrada,
  .painel__resultado {
    width: 40%;
  }

  .container__content {
    max-width: 1158px;
  }
}

@media (max-width: 768px) {

  /* .painel__resultado {
                  display: none;
                } */
}
</style>
