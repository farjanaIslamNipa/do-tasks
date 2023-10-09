<template>
 <div>
    <div class="earn-money-as-tasker-bg">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-7 col-12">
            <div class="header-left-content">
              <h1 class="fw-bold mb-4">Work when <span class="text-brand">you want,</span> <br> Doing whatever you want.</h1>
              <h5>Earn up to $10,750 a month on DoTasks*</h5>
              <div class="py-xl-5 py-4">
                <NuxtLink to="/sign-up" class="rounded-fill-btn px-5">Join HighTasks</NuxtLink>
              </div>
              <p>*Based on the median top 50 Taskers’ monthly earnings.</p>
            </div>
          </div>
          <div class="col-xl-6 col-md-5 header-girl-img">
            <div>
              <img class="img-fluid tasker-girl-img" src="/images/frontend/earn-money-as-tasker/girl.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-card-section">
        <div class="row">
          <div class="col-lg-3 col-6 mb-lg-0 mb-sm-4 mb-3">
            <div class="bg-white card-shadow py-lg-0 py-sm-4 py-2 px-xl-4 px-lg-2 px-md-3 px-2 text-center h-100 d-flex align-items-center justify-content-center mt-lg-5 mt-0">
              <div class="text-center">
                <img class="header-card-icon" src="/images/frontend/earn-money-as-tasker/flexibility.svg" alt="">
                <h5 class="text-brand fw-bold mt-sm-3 mt-2 header-card-title">Flexibility</h5>
                <p class="mb-0 header-card-detail">Choose tasks that suit you based on your skills and availability. Work as much or as little as you want</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6 mb-lg-0 mb-sm-4 mb-3">
            <div class="bg-white card-shadow py-lg-0 py-sm-4 py-2 px-xl-4 px-lg-2 px-md-3 px-2 text-center h-100 d-flex align-items-center justify-content-center">
              <div class="text-center">
                <img class="header-card-icon" src="/images/frontend/earn-money-as-tasker/upfront-fees.svg" alt="">
                <h5 class="text-brand fw-bold mt-sm-3 mt-2 header-card-title">No upfront fees</h5>
                <p class="mb-0 header-card-detail">It’s free to see all open jobs and you can start work instantly. A service fee is charged only if you complete the job.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6 mb-lg-0 mb-sm-4 mb-3">
            <div class="bg-white card-shadow py-lg-0 py-sm-4 py-2 px-xl-4 px-lg-2 px-md-3 px-2 text-center h-100 d-flex align-items-center justify-content-center mt-lg-5 mt-0">
              <div class="text-center">
                <img class="header-card-icon" src="/images/frontend/earn-money-as-tasker/secure-payments.svg" alt="">
                <h5 class="text-brand fw-bold mt-sm-3 mt-2 header-card-title">Secure payments</h5>
                <p class="mb-0 header-card-detail">No more chasing payments! We secure all customer payments upfront so that when the task is marked as complete, the money lands in your account</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6 mb-lg-0 mb-sm-4 mb-3">
            <div class="bg-white card-shadow py-lg-0 py-sm-4 py-2 px-xl-4 px-lg-2 px-md-3 px-2 text-center h-100 d-flex align-items-center justify-content-center">
              <div class="text-center">
                <img class="header-card-icon" src="/images/frontend/earn-money-as-tasker/moneytize-skills.svg" alt="">
                <h5 class="text-brand fw-bold mt-sm-3 mt-2 header-card-title">Monetise your skills</h5>
                <p class="mb-0 header-card-detail">Boost your earning potential doing the things you enjoy and start making money in ways you never thought possible.</p>
              </div>
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
.earn-money-as-tasker-bg{
  background-image: url('/images/frontend/earn-money-as-tasker/bg-image.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
  padding: 30px 0 140px;
}
.header-left-content{
  padding-top: 80px;
}
.header-card-icon{
  height: 70px;
}
.header-card-section{
  margin-top: -120px;
}
@media(max-width:1399px){
  .earn-money-as-tasker-bg{
    padding-top: 10px;
  }
  .header-left-content{
  padding-top: 50px;
}
}
@media(max-width:991px){
  .earn-money-as-tasker-bg{
    padding: 20px 0 80px;
  }
  .header-left-content{
  padding-top: 30px;
}
  .header-left-content h1{
  font-size: 32px;
}
.header-card-section{
  margin-top: -70px;
}
.header-card-icon{
  height: 50px;
}
}
@media(max-width:767px){
.header-girl-img{
  display: none;
}
}
@media(max-width:499px){
  .earn-money-as-tasker-bg{
    padding: 30px 0 50px;
  }
  .header-left-content{
  padding-top: 10px;
}
.header-card-section{
  margin-top: -30px;
}
.header-card-icon{
  height: 40px;
}
.header-card-detail{
  display: none;
}
.header-card-title{
  font-size: 17px;
}
}
@media(max-width:374px){
  .earn-money-as-tasker-bg{
    padding: 20px 0 30px;
  }

  .header-left-content h1{
  font-size: 25px;
}
.header-card-icon{
  height: 30px;
}
.header-card-title{
  font-size: 15px;
}
}
</style>