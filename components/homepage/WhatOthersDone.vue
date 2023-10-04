<template>
    <div class="others-getting-done-banner pt-xxl-5 pt-0 pb-5">
        <div class="container">
          <h1 class="text-center text-brand">See what others are getting done</h1>
          <div class="d-flex align-items-center flex-wrap justify-content-center pt-4 pb-sm-5 pb-3">
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="/">Moving in</NuxtLink>
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Home maintenance</NuxtLink>
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Starting a business</NuxtLink>
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Parties</NuxtLink>
            <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Something different</NuxtLink>
          </div>
          <div class="pt-xl-4 pt-0">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <HomepageTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <HomepageTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <HomepageTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <HomepageTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <HomepageTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <HomepageTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <HomepageTaskCard />
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                <HomepageTaskCard />
              </div>
            </div>
          </div>
          <div class="text-center mt-sm-5 mt-4">
            <NuxtLink class="rounded-fill-btn get-started-btn button-small" to="/post-task">Get started now for free</NuxtLink>
          </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.others-getting-done-banner{
  background-image: url('/images/frontend/home/getting-done.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
.getting-done-link{
    color: #414141;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    padding: 0 30px;
  }
</style>