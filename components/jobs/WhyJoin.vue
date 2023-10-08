<template>
<div class="pt-sm-5 pt-3">
  <div class="container">
    <h2 class="text-center text-brand mb-4">Why join HiTasks?</h2>
    <h5 class="text-center">Here are just a few great reasons</h5>
    <div class="row justify-content-center pt-sm-4 pt-2">
      <div class="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
        <div class="text-center">
          <div data-aos="fade-down" data-aos-delay="100" data-aos-duration="800" class="join-card-top-box text-center bg-white d-inline-block">
            <img class="join-card-icon" src="/images/frontend/jobs/flexibility-icon.svg" alt="">
          </div>
          <div style="background-color:#F5F2FE;" class="join-card-bottom-box text-center rounded card-shadow py-5 px-lg-4 px-2">
            <h4 class="text-brand fw-bold join-card-title mb-0">Flexibility</h4>
            <div class="join-card-details-height">
              <p class="mb-0">Choose the tasks that you want to complete for the people that you’re comfortable working with. You’re in control of your own schedule to create the work-life balance that works for you.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
        <div class="text-center">
          <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="800" class="join-card-top-box text-center bg-white d-inline-block">
            <img class="join-card-icon" src="/images/frontend/jobs/secure-payment-icon.svg" alt="">
          </div>
          <div style="background-color:#ECE6FD;" class="join-card-bottom-box text-center rounded card-shadow py-5 px-lg-4 px-2">
            <h4 class="text-brand fw-bold join-card-title mb-0">Fast and secure payments</h4>
            <div class="join-card-details-height">
              <p class="mb-0">We secure payment for you even before you start the task so you can be sure the payment is there when the task is complete.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-12">
        <div class="text-center">
          <div data-aos="fade-down" data-aos-delay="600" data-aos-duration="800" class="join-card-top-box text-center bg-white d-inline-block">
            <img class="join-card-icon" src="/images/frontend/jobs/simple-use.svg" alt="">
          </div>
          <div style="background-color:#F5F2FE;" class="join-card-bottom-box text-center rounded card-shadow py-5 px-lg-4 px-2">
            <h4 class="text-brand fw-bold join-card-title mb-0">Simple to use</h4>
            <div class="join-card-details-height">
              <p class="mb-0">You can start browsing jobs near you immediately. You can filter by location and skills and be notified when tasks you’re interested in pop up near you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-5"><NuxtLink class="rounded-outline-btn button-small" to="/sign-up">Join Hitasks</NuxtLink></div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
.join-card-top-box{
  padding: 30px 60px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  border-radius: 10px;
}
.join-card-bottom-box{
 margin-top: -50px;
}
.join-card-title{
  padding: 35px 0 20px;
}
.join-card-details-height{
  min-height: 130px;
}
.join-card-icon{
  height: 60px;
}
@media(max-width:1399px){
  .join-card-top-box{
    padding: 30px 60px;
  }
  .join-card-icon{
    height: 50px;
  }
}
@media(max-width:991px){
  .join-card-top-box{
    padding: 20px 40px;
  }
  .join-card-title{
  font-size: 18px;
  padding: 30px 0 15px;
}
.join-card-details-height{
  min-height: 145px;
}
}
@media(max-width:767px){
  .join-card-top-box{
    padding: 20px 40px;
  }
  .join-card-title{
  font-size: 25px;
  padding: 35px 0 20px;
}
.join-card-details-height{
  min-height: 70px;
}

}
@media(max-width:575px){
.join-card-top-box{
    padding: 30px 60px;
  }
  .join-card-title{
  font-size: 25px;
  padding: 35px 0 20px;
}
.join-card-details-height{
  min-height: 70px;
}

}
@media(max-width:423px){
  .join-card-top-box{
    padding: 30px 40px;
  }
  .join-card-title{
  font-size: 22px;
}
}
</style>