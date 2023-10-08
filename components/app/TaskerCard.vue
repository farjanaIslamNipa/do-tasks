<template>
 <div>
  <NuxtLink to="/listing/listing-view" class="mx-2 d-block">
    <img class="img-fluid slider-img" src="/images/frontend/listing/listing-banner.png" alt="">
    <div class="mt-3">
      <h5 class="mb-2 text-dark text-18">House Cleaning - Deep Clean/Spring Clean</h5>
      <p class="mb-2 text-gray">From <strong>$240</strong></p>
      <p class="mb-0 text-gray">Chhavi R &nbsp;<span class="text-warning"><i class="fa-solid fa-star"></i></span> &nbsp;4.6 (821)</p>
    </div>
  </NuxtLink>
</div>
</template>

<script setup>

</script>

<style scoped>

.slider-img{
  height: 185px;
  width: 340px;
  object-fit: cover;
}
.slider-img:hover{
  filter: brightness(70%);
  transition: all 0.3s ease;
}
@media(max-width:424px){
  .slider-img{
    height: 150px;
  }
}
</style>