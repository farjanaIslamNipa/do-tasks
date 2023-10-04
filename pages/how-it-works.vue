<template>
  <div>
    <!-- Header Section -->
    <div>
      <div class="how-it-works-header">
        <div class="container">
          <h1 class="text-center text-brand fw-bold pt-xxl-2 pt-0">The best place for people and businesses <br> to outsource tasks</h1>
          <div class="my-5">
            <img class="img-fluid" src="/images/frontend/how-it-works/header-img.png" alt="">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="text-center h-100">
              <h5 class="text-brand fw-bold">What do you need done?</h5>
              <p class="mb-0">Start by telling us about your task. Mention when and where (in person or online) you need it done, then suggest a fair budget for the task. Post any task you need from cleaning to web design in only two minutes – for free! There's no obligation to hire.</p>
            </div>
          </div>
          <div class="col-md-4 my-md-0 my-4">
            <div class="text-center h-100">
              <h5 class="text-brand fw-bold">Choose the best person for you</h5>
              <p class="mb-0">Take a look at profiles and reviews to pick the best Tasker for your task. When you accept an offer, your payment is held securely with DoTask Pay until the task is complete. Now you can message and call the Tasker to sort out the details.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center h-100">
              <h5 class="text-brand fw-bold">Task completed</h5>
              <p class="mb-0">With your task complete, you just need to release the payment held with DoTask Pay. Then you’re free to leave a review for the Tasker so everyone can know what a great job they’ve done!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Post Your Task Section -->
    <div class="container">
      <div data-aos="fade-up" data-aos-duration="2000" class="text-center py-5 my-xl-5 my-3">
        <h1 class="text-brand fw-bold py-xl-3 py-0">Post your task</h1>
        <h5 class="pb-lg-5 pb-3 px-xl-5 px-0 text-small">Want your home cleaned or furniture put together? Just tell us about the task you’d like done, suggest a fair budget for a job well done and you’ll start to receive offers from available Taskers.</h5>
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10 col-12">
            <img class="img-fluid" src="/images/frontend/how-it-works/post-task.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- Rating and Reviews Section -->
    <div data-aos="fade-up" data-aos-duration="2000" class="rating-review-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-6 col-xl-7 col-lg-9 col-md-11 col-12">
            <div class="text-center">
              <div>
                <img class="rating-review-icon" src="/images/frontend/how-it-works/rating-icon.svg" alt="">
              </div>
              <router-link to="#" class="d-block text-dark bg-white review-rating-card card-shadow">
                <h3 class="text-brand fw-bold pb-3">Rating & Reviews</h3>
                <h5 class="mb-0 text-small">Review Tasker's portfolios, skills, verifications on their profile, and see their transaction verified ratings & reviews on tasks they’ve previously completed on DoTask. This empowers you to make sure you’re choosing the right person for your task.</h5>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Communication Section -->
    <div data-aos="fade-up" data-aos-duration="2000" class="communication-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-12">
            <div class="row align-items-center">
              <div class="col-md-7">
                <div class="d-flex justify-content-center">
                  <div>
                    <h1 class="text-brand fw-bold">Communication</h1>
                    <h5 class="text-small">Use Airtasker to stay in contact from the moment your task is posted until it’s completed.</h5>
                    <h4 class="fw-bold mt-5">Private Messaging</h4>
                    <h5 class="text-small">Once you’ve accepted an offer, you can instantly reach out to the Tasker via private messaging to discuss task details, and get your task completed.</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="text-md-end text-center mt-md-0 mt-4">
                  <img  data-aos="flip-left" data-aos-duration="2000" class="img-fluid" src="/images/frontend/how-it-works/mobile-chat.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- HiTasker Pay Section -->
    <div data-aos="fade-up" data-aos-duration="2000" class="py-5">
      <div class="container">
        <h1 class="text-brand fw-bold text-center mb-4">DoTasker Pay</h1>
        <h6 class="text-18 text-small">DoTask Pay is the seamless and secure way to get your tasks completed. Once you accept an offer on a task, the agreed upon amount is held secure with DoTask Pay until the task is complete.</h6>
        <h6 class="text-18 text-small">Once complete, you’ll simply need to release the payment. We’ll then transfer the task payment to the Tasker’s verified bank account.</h6>
        <div class="row mt-5 justify-content-center">
            <div class="col-sm-4 col-6">
              <div class="bg-purple-lighter py-xl-5 py-4 px-xl-4 px-lg-3 px-2 text-center card-shadow mx-xxl-3 mx-0 tasker-pay-card-top-margin mb-md-0 mb-3">
                <img class="tasker-pay-icon" src="/images/frontend/how-it-works/icon-1.png" alt="">
                <h5 class="tasker-pay-card-title text-brand text-capitalize fw-bold mt-3 mb-0">Fast and hassle</h5>
                <h5 class="tasker-pay-card-title text-brand text-capitalize fw-bold mb-0">free payment</h5>
              </div>
            </div>
            <div class="col-sm-4 col-6">
              <div class="bg-purple-lighter py-xl-5 py-4 px-xl-4 px-lg-3 px-2 text-center card-shadow mx-xxl-3 mx-0 mb-md-0 mb-3">
                <img class="tasker-pay-icon" src="/images/frontend/how-it-works/icon-2.png" alt="">
                <h5 class="tasker-pay-card-title text-brand text-capitalize fw-bold mt-3 mb-0">Cashless payments</h5>
                <h5 class="tasker-pay-card-title text-brand text-capitalize fw-bold mb-0">no cash in hand</h5>
              </div>
            </div>
            <div class="col-sm-4 col-6">
              <div class="bg-purple-lighter py-xl-5 py-4 px-xl-4 px-lg-3 px-2 text-center card-shadow mx-xxl-3 mx-0 tasker-pay-card-top-margin">
                <img class="tasker-pay-icon" src="/images/frontend/how-it-works/icon-3.png" alt="">
                <h5 class="tasker-pay-card-title text-brand text-capitalize fw-bold mt-3 mb-0">You are always</h5>
                <h5 class="tasker-pay-card-title text-brand text-capitalize fw-bold mb-0">in control</h5>
              </div>
            </div>
          </div>
      </div>
    </div>

    <!-- On the move section -->
    <div data-aos="fade-up" data-aos-duration="2000" class="on-the-move-bg mt-xl-5 mt-4 mt-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div>
              <h1 class="text-brand fw-bold">On the move?</h1>
              <p class="text-18 text-small">Download the HiTask App and get the tasks you need completed with just a tap of the button. You can also browse available tasks and earn money wherever you go!</p>
              <div class="pt-xxl-3 pt-0">
                <a href="#" target="_blank"><img class="img-fluid me-2" src="/images/frontend/earn-money-as-tasker/app-store.svg" alt=""></a>
                <a href="#" target="_blank"><img class="img-fluid" src="/images/frontend/earn-money-as-tasker/google-play.svg" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Per month completing tasks section -->
    <div data-aos="fade-up" data-aos-duration="2000" class="py-5 my-lg-5 my-md-3 my-0">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-5 order-lg-1 order-2">
            <div>
              <img class="img-fluid" src="/images/frontend/how-it-works/completing-task.png" alt="">
            </div>
          </div>
          <div class="col-xl-6 col-lg-7 order-lg-2 order-1 mb-lg-0 mb-4">
            <div class="ps-lg-3 ps-0">
              <h1 class="text-brand fw-bold completing-task-title">Earn up to $5,000 per month completing tasks</h1>
              <div class="ps-md-5 ps-sm-3 ps-0 my-4">
                <h5 class="fw-bold">You're the boss</h5>
                <p>With thousands of tasks posted every month on DoTask there are lots of opportunities to earn. Choose the tasks you’d like to complete for people that you're happy to work with.</p>
                <h5 class="fw-bold">Payments</h5>
                <p>With your task payment held secure with DoTask Pay, you're able to complete the task knowing payment will be made when you're done.</p>
                <h5 class="fw-bold">Top rated insurance</h5>
                <p>DoTask Insurance is provided by Berkshire Hathaway Specialty Insurance. This means Taskers on DoTask are covered for liability to third parties when it comes to personal injury or property damage (terms and conditions apply) - so you can post or earn with peace of mind!*</p>
              </div>
              <div class="pt-2 pb-4">
                <NuxtLink to="/sign-up" class="rounded-fill-btn py-2 me-sm-3 me-1 joint-btn">Join DoTask</NuxtLink>
                <NuxtLink to="/earn-money" class="rounded-outline-btn py-2 earn-money-btn">Earn money </NuxtLink>
              </div>
              <small>*Terms and Conditions apply. Included Task activities only. Excesses apply for Taskers. Learn more about Airtasker Insurance</small>
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
.how-it-works-header{
  background-image: url('/images/frontend/how-it-works/header-bg.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
 padding-top: 80px;
}
.rating-review-bg{
  background-image: url('/images/frontend/how-it-works/rating-bg.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 80px 0;
}

.review-rating-card{
  border-radius: 10px;
  padding: 80px 50px;
  margin-top: -60px;
}

.communication-bg{
  background-image: url('/images/frontend/how-it-works/communication-bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  padding: 80px 0;
}

.tasker-pay-card-top-margin{
margin-top: 80px;
}
.tasker-pay-icon{
  height: 100px;
}

.on-the-move-bg{
  background-image: url('/images/frontend/how-it-works/on-the-move-bg.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 200px 0;
}
@keyframes wiggle {
    0% { transform: rotate(0deg); }
   80% { transform: rotate(0deg); }
   85% { transform: rotate(10deg); }
   95% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}
.rating-review-icon{
  animation: wiggle 2.5s infinite;
}

@media(max-width:1799px){
  .on-the-move-bg{
    padding: 150px 0;
}
}
@media(max-width:1299px){
  .on-the-move-bg{
    padding: 100px 0;
}
}
@media(max-width:1199px){
  .tasker-pay-icon{
  height: 80px;
}
.tasker-pay-card-title{
  font-size: 18px;
}
}
@media(max-width:991px){
  .completing-task-title{
  font-size: 32px;
}
}
@media(max-width:767px){
  .rating-review-bg{
    padding: 60px 0;
  }
  .review-rating-card{
    padding: 80px 20px;
  }
  .communication-bg{
    padding: 50px 0;
  }
  .tasker-pay-icon{
  height: 60px;
}
.tasker-pay-card-title{
  font-size: 16px;
}
.on-the-move-bg{
  background-image: none;
  background-color: var(--purpleLighter);
    padding: 80px 0;
}
}

@media(max-width:575px){
  .tasker-pay-card-top-margin{
    margin-top: 0;
  }
.on-the-move-bg{
  padding: 60px 0;
}
.joint-btn, .earn-money-btn{
  font-size: 15px;
  padding: 10px 20px;
}
.completing-task-title{
  font-size: 30px;
}
}
@media(max-width:374px){
  .tasker-pay-icon{
  height: 50px;
}
.tasker-pay-card-title{
  font-size: 13px;
}
}
</style>