import { computed, ref } from 'vue'


const currency = ref('EUR')

const valor = ref(0)
const gorgeta = ref(10)
const pessoas = ref(2)

const quote = ref(0)

export const useTipCalculator = () => {

  const gorgetaCalculada = computed(() => {
    return (gorgeta.value * valor.value) / 100
  })

  const total = computed(() => {
    return valor.value + gorgetaCalculada.value
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
    gorgetaCalculada,
    total,
    porPessoa,
    emReal,
    valor,
    gorgeta,
    pessoas,
    quote
  }
}