<template>
    <div class="pt-sm-5 pt-3">
      <div class="container">
        <h1 class="text-center text-brand my-4">You're protected</h1>
        <div class="row justify-content-center pt-sm-4 pt-2">
          <div class="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
            <div class="text-center">
              <div class="protected-top-box text-center bg-white d-inline-block">
                <img class="protected-card-icon" src="/images/frontend/earn-money-as-tasker/flexibility.svg" alt="">
              </div>
              <div style="background-color:#F5F2FE;" class="protected-bottom-box text-center rounded card-shadow py-5 px-lg-4 px-2">
                <h4 class="text-brand fw-bold protected-title mb-0">Public Liability</h4>
                <div class="protected-card-details-height">
                  <p class="mb-0">DoTasks Insurance covers the Tasker for their liability to third parties for personal injury or property damage whilst performing certain task activities</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
            <div class="text-center">
              <div class="protected-top-box text-center bg-white d-inline-block">
                <img class="protected-card-icon" src="/images/frontend/earn-money-as-tasker/moneytize-skills.svg" alt="">
              </div>
              <div style="background-color:#ECE6FD;" class="protected-bottom-box text-center rounded card-shadow py-5 px-lg-4 px-2">
                <h4 class="text-brand fw-bold protected-title mb-0">Top Rated Insurance</h4>
                <div class="protected-card-details-height">
                  <p class="mb-0">DoTasks Insurance is provided by Berkshire Hathaway Specialty Insurance - one of the most reputable and innovative insurance brands</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="text-center">
              <div class="protected-top-box text-center bg-white d-inline-block">
                <img class="protected-card-icon" src="/images/frontend/earn-money-as-tasker/upfront-fees.svg" alt="">
              </div>
              <div style="background-color:#F5F2FE;" class="protected-bottom-box text-center rounded card-shadow py-5 px-lg-4 px-2">
                <h4 class="text-brand fw-bold protected-title mb-0">More Info</h4>
                <div class="protected-card-details-height">
                  <p class="mb-0">For details of insurance cover provided including excluded activities and FAQs, click here <NuxtLink to="">hitasks.com/insurance/</NuxtLink></p>
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
.protected-top-box{
  padding: 30px 50px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  border-radius: 10px;
}
.protected-bottom-box{
 margin-top: -50px;
}
.protected-title{
  padding: 35px 0 20px;
}
.protected-card-details-height{
  min-height: 130px;
}
.protected-card-icon{
  height: 70px;
}
@media(max-width:1399px){
  .protected-card-icon{
    height: 50px;
  }
}
@media(max-width:991px){
  .protected-top-box{
    padding: 20px 40px;
  }
  .protected-title{
  font-size: 18px;
  padding: 30px 0 15px;
}
.protected-card-details-height{
  min-height: 145px;
}
}
@media(max-width:767px){
  .protected-top-box{
    padding: 20px 40px;
  }
  .protected-title{
  font-size: 25px;
  padding: 35px 0 20px;
}
.protected-card-details-height{
  min-height: 70px;
}

}
@media(max-width:575px){
.protected-top-box{
    padding: 30px 100px;
  }
  .protected-title{
  font-size: 25px;
  padding: 35px 0 20px;
}
.protected-card-details-height{
  min-height: 70px;
}

}
@media(max-width:423px){
  .protected-top-box{
    padding: 30px 50px;
  }
  .protected-title{
  font-size: 22px;
}
}
</style>