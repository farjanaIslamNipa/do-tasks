import InputTag from 'vue3-tags-input';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('input-tag', InputTag)
})