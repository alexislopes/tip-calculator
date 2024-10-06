<template>
  <div class="painel__entrada">
    <v-btn-toggle v-model="currency" style="display: flex; justify-content: center;" borderless mandatory>
      <v-btn text="white" color="#940DFF" value="EUR"> EUR </v-btn>
      <v-btn text="white" color="#940DFF" value="USD"> USD </v-btn>
    </v-btn-toggle>

    <v-text-field color="#940DFF" hide-details type="number" :label="`Valor ${sign[currency]}`"
      :placeholder="`Digite em ${sign[currency]}`" v-model.number="valor" outlined />

    <div>
      <label>Gorjeta <v-chip>{{ gorjeta }}%</v-chip></label>
      <div class="slider__container">
        <span class="slider__container__hint">10</span>
        <v-slider track-color="purple" color="#940DFF" hint="Gorjeta" v-model="gorjeta" max="20" min="10"></v-slider>
        <span class="slider__container__hint">20</span>
      </div>
    </div>

    <div>
      <label>Pessoas <v-chip> {{ pessoas }} </v-chip></label>
      <div class="slider__container">
        <span class="slider__container__hint">2</span>
        <v-slider track-color="purple" color="#940DFF" hint="Pessoas" v-model="pessoas" max="16" min="2"></v-slider>
        <span class="slider__container__hint">16</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

import { useTipCalculator } from '@/composables/useTipCalculator';
const {
  pessoas,
  gorjeta,
  valor,
  currency
} = useTipCalculator()


const sign = {
  EUR: "€",
  USD: "$"
}
</script>

<style></style>