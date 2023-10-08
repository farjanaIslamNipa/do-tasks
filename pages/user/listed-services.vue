<template>
<div>
  <div class="container">
    <div class="pt-5">
      <h3 class="text-brand fw-bold">Cleaning</h3>
      <div class="basic-form d-sm-flex d-block justify-content-between mt-md-4 mt-2 listing-filter">
        <div class="w-100">
          <label for="">Locations</label>
          <div class="input-group flex-nowrap">
            <span id="addon-wrapping" class="input-group-text text-brand"><i class="fa-solid fa-location-dot"></i></span>
            <input type="text" class="form-control placeholder-font" placeholder="Change your location" aria-label="Username" aria-describedby="addon-wrapping">
          </div>
        </div>
        <div class="w-100 mx-xl-4 mx-sm-2 mx-0 my-sm-0 my-3">
          <label for="">Sort</label>
          <div class="input-group flex-nowrap">
            <span id="addon-wrapping" class="input-group-text text-brand"><i class="fa-solid fa-sort"></i></span>
            <input type="text" class="form-control placeholder-font" placeholder="Relevance (default)" aria-label="Username" aria-describedby="addon-wrapping">
          </div>
        </div>
        <div class="w-100">
          <label for="">Search</label>
          <div class="input-group flex-nowrap">
            <span id="addon-wrapping" class="input-group-text text-brand"><i class="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" class="form-control placeholder-font" placeholder="Search 10,000+ services" aria-label="Username" aria-describedby="addon-wrapping">
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
      <div class="row">
        <div class="col-md-3">
          <AppTaskerCard />
        </div>
        <div class="col-md-3">
          <AppTaskerCard />
        </div>
        <div class="col-md-3">
          <AppTaskerCard />
        </div>
        <div class="col-md-3">
          <AppTaskerCard />
        </div>
        <div class="col-md-3">
          <AppTaskerCard />
        </div>
        <div class="col-md-3">
          <AppTaskerCard />
        </div>
        <div class="col-md-3">
          <AppTaskerCard />
        </div>
        <div class="col-md-3">
          <AppTaskerCard />
        </div>
      </div>

      <div class="text-center pt-5">
      <hr style="border-top:1px solid #662D91;margin-bottom:30px;">
      <NuxtLink class="rounded-fill-btn button-small" to="/post-task">Post a task & get offers</NuxtLink>
    </div>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
.listing-filter input{
  border: 1px solid var(--purpleLight) !important;
}
</style>