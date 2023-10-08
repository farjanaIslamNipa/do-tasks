<template>
    <div>
    <div class="progress-summery-bg py-4">
      <div class="container">
        <div class="row py-md-2 py-0">
          <div class="col-4">
            <div class="text-center text-white">
              <p class="mb-1">Over</p>
              <h3 class="fw-bold mb-2 success-count">2.1M</h3>
              <h5 class="mb-0 success-title">People using HiTasks</h5>
            </div>
          </div>
          <div class="col-4">
            <div class="text-center text-white">
              <p class="mb-1">Over</p>
              <h3 class="fw-bold mb-2 success-count">$382M</h3>
              <h5 class="mb-0 success-title">Worth of jobs created</h5>
            </div>
          </div>
          <div class="col-4">
            <div class="text-center text-white">
              <p class="mb-1">Over</p>
              <h3 class="fw-bold mb-2 success-count">$37M</h3>
              <h5 class="mb-0 success-title">Jobs available per month</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-summery-bg{
  background-image: url('/images/frontend/about-us/summery-banner.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
@media(max-width:992px){
.success-count{
  font-size: 26px;
}
.success-title{
  font-size: 18px;
}
}
@media(max-width:767px){
  .success-count{
  font-size: 24px;
}
.success-title{
  font-size: 16px;
}
}
@media(max-width:574px){
  .success-count{
  font-size: 20px;
}
.success-title{
  font-size: 14px;
}
}
</style>