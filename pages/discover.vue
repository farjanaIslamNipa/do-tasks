<template>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-7">
          <div class="pt-xl-5 pt-0 mt-lg-3 mt-0">
            <h1 class="fw-bold">Post your task. Receive </h1>
            <h1 class="fw-bold">offers. <span class="text-brand">Get it done.</span></h1>
            <h5 class="text-gray pt-3 text-small">Tell the community what you need done & when, set your budget, then receive offers from Taskers who can do your task.</h5>
            <div class="pt-lg-5 pt-4">
              <NuxtLink to="/post-task" class="rounded-fill-btn post-task-btn rounded-0 me-3">Post a task</NuxtLink>
              <NuxtLink to="/how-it-works" class="rounded-outline-btn how-it-works-btn rounded-0">How it works <span><i class="fa-solid fa-right-long"></i></span></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-5 d-md-block d-none">
          <div >
            <img src="/images/frontend/logged-home/header-img.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>

    <!-- All Categories section -->
    <AppAllCategories />

    <!-- Prefer to find someone yourself? -->
    <div class="pt-5">
      <div class="container">
        <h3 class="text-brand fw-bold">Prefer to find someone yourself?</h3>
        <div class="d-flex align-items-baseline">
          <p class="mb-0">Browse and book services in </p>
          <select class="state-selector text-brand" name="">
            <option selected value="">Melbourne VIC</option>
            <option value="">NSW</option>
            <option value="">Camden</option>
            <option value="">Melbourne VIC</option>
            <option value="">Melbourne VIC</option>
            <option value="">Melbourne VIC</option>
            <option value="">Melbourne VIC</option>
          </select>
        </div>
        <div>
    <div class="pt-5">
      <AppTaskSlider sliderTitle="Cleaning" />
    </div>
    <div class="pt-5">
      <AppTaskSlider sliderTitle="Washing" />
    </div>
    <div class="text-center pt-5">
      <NuxtLink class="rounded-fill-btn button-small" to="/post-task">Post a task & get offers</NuxtLink>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.post-task-btn:hover{
  background-color: var(--brandColor) !important;
  color: #fff !important;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 0.3s ease;
}
.state-selector{
  border-top: none;
  border-left: none;
  border-right: none;
  margin-left: 10px;
  font-weight: bold;
  width: 200px;
}
.state-selector:active{
  outline: none;
}
.state-selector:focus{
  outline: none;
}


@media (max-width:991px){
  .post-task-btn{
    font-size: 15px;
    padding: 8px 25px;
  }
  .how-it-works-btn{
    font-size: 15px;
    padding: 8px 20px;
  }
}
@media (max-width:374px){
  .post-task-btn{
    font-size: 15px;
    padding: 8px 15px;
  }
  .how-it-works-btn{
    font-size: 15px;
    padding: 8px 15px;
  }
}
</style>