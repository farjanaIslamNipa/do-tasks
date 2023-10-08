<template>
  <div class="py-5">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h3 class="text-brand fw-bold">Browse services in all categories</h3>
        <div>
          <NuxtLink to="#" class="text-brand fw-bold">View All <span><i class="fa-solid fa-right-long"></i></span></NuxtLink>
        </div>
      </div>
      <div class="pt-4">
        <div class="d-flex flex-wrap">
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/photo-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Photo & video</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/fitness-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Fitness</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/gardening.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">PainLandscaping & gardening</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/furniture-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Furniture assembly</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/auto-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Auto electrical</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/music-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Music & audio</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/cleaning-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Cleaning</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/painting-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Painting</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/electical-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Electrical</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/construction-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Building & construction</h6>
          </NuxtLink>
          <NuxtLink to="#" class="all-category-card bg-purple-lighter rounded-pill card-shadow d-flex align-items-center justify-content-center py-1 px-4 mb-3 mx-2">
            <img class="category-card-icon" src="/images/frontend/logged-home/trash-icon.svg" alt="">
            <h6 class="mb-0 text-brand fw-bold ms-2">Rubbish removal</h6>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.all-category-card:hover{
  background-color: #fff;
  transition: all 0.3s ease;
}
</style>