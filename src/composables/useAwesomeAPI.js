import { createFetch } from "@vueuse/core"

export const useAwesomeRates = createFetch({
  baseUrl: 'https://economia.awesomeapi.com.br/last',
})