<template>
  <AppPrimaryNav />
  <div class="top-padding"></div>
  <slot />
  <AppFooter />
</template>

<script setup>

</script>

<style scoped>
.top-padding{
  padding-top: 62px;
}
a.nuxt-link-exact-active {
  color: var(--brandColor) !important;
  font-weight: bold !important;
}
@media(max-width:991px){
  .top-padding{
  padding-top: 75px;
}
}
</style>