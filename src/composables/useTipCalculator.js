import { computed, ref } from 'vue'


const currency = ref('EUR')

const valor = ref(0)
const gorjeta = ref(10)
const pessoas = ref(2)

const quote = ref(0)

export const useTipCalculator = () => {

  const gorjetaCalculada = computed(() => {
    return (gorjeta.value * valor.value) / 100
  })

  const total = computed(() => {
    return valor.value + gorjetaCalculada.value
  })

  const porPessoa = computed(() => {
    return total.value / pessoas.value
  })

  const emReal = computed(() => {
    return new Intl.NumberFormat(navigator.language, {
      style: 'currency',
      currency: 'BRL'
    }).format(porPessoa.value * quote.value)
  })

  return {
    currency,
    gorjetaCalculada,
    total,
    porPessoa,
    emReal,
    valor,
    gorjeta,
    pessoas,
    quote
  }
}