import InputTag from 'vue-input-tag';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('input-tag', InputTag)
})