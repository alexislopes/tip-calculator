<template>
  <div class="painel__resultado">
    <v-card class="mx-auto" style="width: 100%;" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-subtitle>Conta</v-list-item-subtitle>
          <v-list-item-title class="text-h5 mb-1">
            {{ currencyFormatted(valor) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card class="mx-auto" style="width: 100%;" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-subtitle>Gorgeta</v-list-item-subtitle>
          <v-list-item-title class="text-h5 mb-1">
            {{ currencyFormatted(gorgetaCalculada) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card class="mx-auto" style="width: 100%;" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-subtitle>Total</v-list-item-subtitle>
          <v-list-item-title class="text-h5 mb-1">
            {{ currencyFormatted(total) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card class="mx-auto" style="width: 100%;" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-subtitle>Por pessoa</v-list-item-subtitle>
          <v-list-item-title class="text-h5 mb-1">
            {{ currencyFormatted(porPessoa) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card class="mx-auto" style="width: 100%;" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-subtitle>Em R$</v-list-item-subtitle>
          <v-list-item-title class="text-h5 mb-1">
            {{ emReal }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { useAwesomeRates } from '@/composables/useAwesomeAPI';
import { useTipCalculator } from '@/composables/useTipCalculator';
import { computed, watch } from 'vue';
const {
  currency,
  gorgetaCalculada,
  total,
  porPessoa,
  emReal,
  valor,
  quote
} = useTipCalculator()

function currencyFormatted(value) {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: currency.value
  }).format(value)
}


//make URL reactive to use refetch on the useFetch instance
const URL = computed(() => {
  return `${currency.value}-BRL`
})

//use useFetch instance tha refetches every time URL changes
const { data } = useAwesomeRates(URL, { refetch: true })

// get the quote from response
watch(data, () => {
  const key = `${currency.value}BRL`
  const response = JSON.parse(data.value)

  quote.value = response[key].high
})

</script>

<style></style>