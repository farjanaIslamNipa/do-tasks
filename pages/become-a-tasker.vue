<template>
  <div class="mb-5">
    <BecomeTaskerHeader />
    <BecomeTaskerHowToEarn />
    <!-- Create Profile Section -->
    <div class="pt-md-5 pt-0 create-profile-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-md-0 mb-5">
            <div class="create-profile-content text-sm-start text-center">
              <h1 class="text-brand fw-bold mb-4">Create your profile and start browsing jobs.</h1>
              <h4>It's free and takes less than a minute to sign up.</h4>
              <div class="mt-5 pt-xl-5 pt-3">
                <NuxtLink :to="{name: 'sign-up'}" class="rounded-outline-btn px-5">Start earning now</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-end">
              <img data-aos="fade-up" data-aos-duration="2000" class="img-fluid" src="/images/frontend/earn-money-as-tasker/mobile.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <BecomeTaskerProtectedAsTasker />
    <!-- Be on the go -->
    <div class="pt-5">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-5 be-on-go-image-none">
            <div class="p-5 position-relative text-end">
              <img class="be-on-go-img" src="/images/frontend/earn-money-as-tasker/be-on-the-go.png" alt="">
            </div>
          </div>
          <div class="col-lg-7 be-go-left-margin">
            <div>
              <h1 class="text-brand fw-bold be-on-go-title">Be on the go</h1>
              <div class="be-on-the-go-bg">
                <p class="text-18"><span class="text-brand me-2"><img data-aos="zoom-in" data-aos-delay="200" class="img-fluid" src="/images/frontend/earn-money-as-tasker/check-mark.png" alt=""></span>Receive new task notifications even if you’re on a job or on the road</p>
                <p class="text-18"><span class="text-brand me-2"><img data-aos="zoom-in" data-aos-delay="400" class="img-fluid" src="/images/frontend/earn-money-as-tasker/check-mark.png" alt=""></span>Browse hundreds of tasks wherever you are - no extra charges</p>
                <p class="text-18"><span class="text-brand me-2"><img data-aos="zoom-in" data-aos-delay="600" class="img-fluid" src="/images/frontend/earn-money-as-tasker/check-mark.png" alt=""></span>Private messaging with customers</p>
                <p class="text-18"><span class="text-brand me-2"><img data-aos="zoom-in" data-aos-delay="800" class="img-fluid" src="/images/frontend/earn-money-as-tasker/check-mark.png" alt=""></span>Settle payments as soon as the job is complete through our secure payments platform</p>
                <div class="pt-xxl-3 pt-0">
                  <a href="#" target="_blank"><img class="img-fluid me-2" src="/images/frontend/earn-money-as-tasker/app-store.svg" alt=""></a>
                  <a href="#" target="_blank"><img class="img-fluid" src="/images/frontend/earn-money-as-tasker/google-play.svg" alt=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFaq />
  </div>
</template>

<script setup>

</script>

<style scoped>
.create-profile-section{
  background-image: url('/images/frontend/earn-money-as-tasker/create-profile-bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
}
.create-profile-content{
  padding-top: 150px;
}

.be-on-the-go-bg{
  background-color: #F6F4F7;
  padding: 30px 10px 30px 160px;
  margin-right: 100px;
}
.be-go-left-margin{
  margin-left: -175px;
}
.be-on-go-title{
  padding-left: 160px;
}
.be-on-go-img{
  width: 70%;
}

@media(max-width:1799px){
  .be-on-the-go-bg{
  margin-right: 50px;
}
}
@media(max-width:1699px){
  .be-on-the-go-bg{
  margin-right: 0;
}
}
@media(max-width:1440px){
  .create-profile-content{
  padding-top: 100px;
}
.be-go-left-margin{
  margin-left: -160px;
}
.be-on-go-img{
  width: 80%;
}
}
@media(max-width:1366px){
  .be-on-the-go-bg{
  padding: 30px 10px 30px 140px;
}
.be-go-left-margin{
  margin-left: -160px;
}
.be-on-go-title{
  padding-left: 140px;
}
.be-on-go-img{
  width: 80%;
}
}
@media(max-width:1299px){
  .be-on-the-go-bg{
  padding: 30px 10px 30px 30px;
}
.be-go-left-margin{
  margin-left: -50px;
}
.be-on-go-title{
  padding-left: 30px;
}
.be-on-go-img{
  width: 100%;
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
.be-on-go-image-none{
  display: none;
}
.be-on-the-go-bg{
  padding: 30px 20px 30px 40px;
}
.be-go-left-margin{
  margin-left: 0px;
  /* margin-right: 10px; */
}
.be-on-go-title{
  padding-left: 40px;
}
}
@media(max-width:767px){
  .create-profile-content{
  padding-top: 10px;
}
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
    padding: 30px 70px;
  }
  .protected-title{
  font-size: 22px;
}

}
</style>