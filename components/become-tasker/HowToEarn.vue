<template>
    <div class="py-5 mt-xxl-5 mt-lg-3 mt-0">
      <div class="container">
        <h1 class="text-brand text-center mt-lg-5 mt-0 mb-5">How to earn money on HiTasks</h1>
        <div class="earn-money-on-high-task-bg">
          <div class="row">
              <div class="col-md-4">
                <div class="bg-white py-xl-5 py-3 px-xl-4 px-lg-3 px-2 text-center card-shadow mx-xxl-3 mx-0 earn-money-card-top-margin mb-md-0 mb-3">
                  <img data-aos="zoom-in" data-aos-delay="400" class="earn-money-card-icon" src="/images/frontend/home/secure-payment.svg" alt="">
                  <h5 class="earn-money-card-title text-brand text-capitalize fw-bold mt-3">Discover job opportunities (it’s <span class="text-uppercase">FREE!</span>)</h5>
                  <p class="pb-2">Discover tasks near you that match your skills and interests. Be automatically notified through our Task Alerts feature when new jobs pop up.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bg-white py-xl-5 py-3 px-xl-4 px-lg-3 px-2 text-center card-shadow mx-xxl-3 mx-0 mb-md-0 mb-3">
                  <img data-aos="zoom-in" data-aos-delay="200" class="earn-money-card-icon" src="/images/frontend/home/trusted-rating-review.svg" alt="">
                  <h5 class="earn-money-card-title text-brand text-capitalize fw-bold mt-3">Make an offer</h5>
                  <p class="pb-2">Once you’ve found a suitable task, make an offer and set your price. Don’t worry - you can adjust the price again if you need to make any changes.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bg-white py-xl-5 py-3 px-xl-4 px-lg-3 px-2 text-center card-shadow mx-xxl-3 mx-0 earn-money-card-top-margin">
                  <img data-aos="zoom-in" data-aos-delay="400" class="earn-money-card-icon" src="/images/frontend/home/peace-of-mind.svg" alt="">
                  <h5 class="earn-money-card-title text-brand text-capitalize fw-bold mt-3">Do the task and get paid</h5>
                  <p class="pb-2">When you've completed the task, request for payment to be released. You'll see the money in your account instantly.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.earn-money-on-high-task-bg{
  background-image: url('/images/frontend/earn-money-as-tasker/earn-money-bg.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 80px 50px;
  border-radius: 80px;
  }
  .earn-money-card-top-margin{
  margin-top: 80px;
  }
  @media(max-width:1024px){
  .earn-money-on-high-task-bg{
    padding: 50px;
  }
  }
  @media(max-width:991px){
  .earn-money-on-high-task-bg{
    padding: 30px;
  }
  .earn-money-card-icon{
    height: 90px;
  }
  .earn-money-card-title{
    font-size: 17px;
  }
  }
  @media(max-width:767px){
  .earn-money-on-high-task-bg{
    padding: 30px;
    border-radius: 30px;
  }
  .earn-money-card-icon{
    height: 90px;
  }
  .earn-money-card-title{
    font-size: 20px;
  }
  .earn-money-card-top-margin{
    margin-top: 0;
  }
  }
  @media(max-width:423px){
  .earn-money-on-high-task-bg{
    background-image: none;
    padding: 0;
    border-radius: 30px;
  }
  .earn-money-card-icon{
    height: 90px;
  }
  .earn-money-card-title{
    font-size: 20px;
  }
  .earn-money-card-top-margin{
    margin-top: 0;
  }
  }
</style>