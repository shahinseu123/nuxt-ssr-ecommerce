import type {NullInterface, Products} from "@/interface/product" // Type-only import
import { useStorage } from '@vueuse/core'
export const useProductStore = defineStore('product', {
    state: () => ({
      // products: useLocalStorage('products', [] as Products[]|NullInterface),
      products: [] as Products[]|NullInterface,
    }),
    getters: {
      get_products: state => state.products
    },
    actions: {
      act_products(payload:Products[]|NullInterface):void {
        this.products = payload
      }
    },
  })