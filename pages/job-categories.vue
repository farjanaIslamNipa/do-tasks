<template>
  <div>
    <div class="view-jobs-banner">
      <div class="container">
        <h1 class="text-white mb-0 view-job-header-title"><span class="fw-bold">Bookkeeping</span> Jobs</h1>
        <h1 class="text-white view-job-header-title"> near you</h1>
        <h5 class="text-white">Browse bookkeeping jobs posted near you</h5>
      </div>
    </div>
  <!-- Task card section -->
  <div class="bg-purple-lighter py-5">
    <div class="container">
      <h1 class="text-center text-brand fw-bold text-capitalize">Bookkeeping Tasks</h1>
      <h5 class="text-center">Check out what tasks people want done near you right now...</h5>
      <div class="row mt-5">
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
        <div class="col-md-6 mb-4">
          <JobsTaskCard />
        </div>
      </div>
      <div class="text-center mt-4">
        <NuxtLink class="rounded-fill-btn button-small" to="/find-tasks">Browse all tasks</NuxtLink>
      </div>
    </div>
  </div>


  <!-- Why join HiTasks -->
  <JobsWhyJoin />

  <!-- Protection Section -->
  <div class="pt-lg-5 pt-0 pb-5">
    <div class="container">
      <div class="mt-lg-4 mt-0">
        <div class="row">
          <div class="col-lg-6 col-12 order-lg-1 order-2">
            <div>
              <h2 class="text-brand fw-bold">Protection</h2>
              <h5 class="text-small">It’s nice to have a safety net - that’s why we’ve got insurance available to help you do tasks with peace of mind.</h5>
              <div class="bg-purple-lighter py-3 px-3 d-flex card-shadow mb-4 mt-4">
                <img  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800" class="protection-icon" src="/images/frontend/jobs/public-liability-icon.svg" alt="">
                <div class="ps-3">
                  <h6 class="fw-bold">Public Liability*</h6>
                  <p class="mb-0">HiTasks Insurance covers the Tasker for their liability to third parties for personal injury or property damage whilst performing certain task activities</p>
                </div>
              </div>
              <div class="bg-purple-lighter py-3 px-3 d-flex card-shadow mb-4">
                <img  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800" class="protection-icon" src="/images/frontend/jobs/insurance-icon.svg" alt="">
                <div class="ps-3">
                  <h6 class="fw-bold">Top rated insurance</h6>
                  <p class="mb-0">HiTasks Insurance covers the Tasker for their liability to third parties for personal injury or property damage whilst performing certain task activities</p>
                </div>
              </div>
              <p>*subject to terms and conditions, excess and exclusions applies.</p>
              <div class=" mt-2">
                <NuxtLink to="/insurance-policy" class="rounded-outline-btn button-small py-2">Learn More</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 order-lg-2 order-1">
            <div class="p-xl-5 p-lg-0 p-5">
              <img class="img-fluid" src="/images/frontend/jobs/protection-img.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- What else we could do -->
  <div class="py-5 bg-purple-lighter">
    <div class="container">
      <h2 class="fw-bold text-center">What else could you do?</h2>
      <h5 class="text-center">Check out other interesting jobs you can do on HiTasks!</h5>
      <div class="d-flex align-items-center flex-wrap justify-content-center pt-4 pb-sm-5 pb-3">
          <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="/">Moving in</NuxtLink>
          <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Home maintenance</NuxtLink>
          <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Starting a business</NuxtLink>
          <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Parties</NuxtLink>
          <NuxtLink class="getting-done-link mb-xl-0 mb-2" to="#">Something different</NuxtLink>
        </div>
    </div>
  </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
 .view-jobs-banner {
    background: linear-gradient(0deg, rgba(27, 26, 27, 0.3), rgba(44, 42, 43, 0.3)), url('/images/frontend/jobs/accounting.png');
    background-repeat: no-repeat;
    background-position: left-center;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .view-job-header-title {
    font-size: 45px;
    line-height: 1;
  }

  .protection-icon{
    height: 45px;
  }
  .getting-done-link{
    color: #414141;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    padding: 0 30px;
  }
  .getting-done-link:hover{
    color: var(--brandColor);
    background-color: var(--purpleLighter);
    border-radius: 30px;
    transition: all 0.3s ease;
  }
  @media(max-width:1199px){
    .getting-done-link{
    font-size: 18px;
    padding: 0 20px;
  }
  }
  @media(max-width:991px){
    .getting-done-link{
    font-size: 18px;
    padding: 0 20px;
  }
  }

  @media(max-width:991px) {
    .view-jobs-banner {
      height: 400px;
    }
  }

  @media(max-width:575px) {
    .view-jobs-banner {
      height: 350px;
    }

    .view-job-header-title {
      font-size: 35px;
      line-height: 1;
    }
  }

</style>