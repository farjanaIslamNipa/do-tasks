<template>
 <div class="mb-5">
    <!-- About us header banner -->
    <div class="about-us-header-banner">
      <div class="container">
        <div class="row">
          <div class="col-xxl-5 col-lg-6 col-md-8">
            <h1 class="text-brand fw-bold mb-3">We are here to make people’s lives better</h1>
            <h5>Creating a way to connect people ready to work, with people who need work done</h5>
          </div>
        </div>
      </div>
    </div>

    <!--Hi Tasks vision section -->
    <div class="high-task-vision-bg mt-5">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-lg-6">
            <div>
              <h2 class="text-brand fw-bold">The HiTasks Vision</h2>
              <h5 class="fw-bold my-md-4 my-2">The only way to do great work is to love what you do</h5>
              <div>
                <p class="text-18">HiTasks is a trusted community platform that connects people who need to outsource tasks and find local services, with people who are looking to earn money and ready to work</p>
                <p class="text-18">From simple to complicated tasks, HiTasks can help you complete your home cleaning, handyman jobs, admin work, photography, graphic design or even build a website.</p>
                <p class="text-18">Go online or download the app and HiTasks will take you from 'things to do' to 'everything's done'.</p>
                <p>HiTasks. Get More Done.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress summery section -->
    <ProgressSummery />

    <!-- Clients Say section -->
    <div class="py-5 client-say-bg">
      <div class="container">
        <div class="py-md-3 py-0">
          <h1 class="text-center text-brand fw-bold">What our clients say</h1>
          <h5 class="text-center">We connect local people ready to work, with people who need work to be done.</h5>
          <div class="client-review-video text-center pt-4">
            <img class="img-fluid" src="/images/frontend/about-us/client-say-video.png" alt="">
          </div>
          <div class="text-center mt-5"><button class="rounded-fill-btn py-2">See More Videos</button></div>
        </div>
      </div>
    </div>

    <!-- Frequently Asked Questions -->
    <AppFaq />
  </div>
</template>

<script setup>

</script>

<style scoped>
.about-us-header-banner{
  background-image: url('/images/frontend/about-us/about-us-banner.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  height: 500px;
  padding-top: 100px;
}
.high-task-vision-bg{
  background-image: url('/images/frontend/about-us/vision-banner.png');
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  padding: 60px 0;
}
.client-say-bg{
  background-image: url('/images/frontend/about-us/client-say-bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  /* padding: 60px 0; */
}
@media(max-width:1399px){
  .about-us-header-banner{
    height: 450px;
  }
}
@media(max-width:1199px){
  .high-task-vision-bg{
    background-position: left -120px top;
    padding: 30px 0;
  }
}
@media(max-width:992px){
  .about-us-header-banner{
    height: 400px;
  }
  .high-task-vision-bg{
    background-image: none;
    padding: 10px 0 30px;
  }
}
@media(max-width:786px){
  .about-us-header-banner{
    background:url('/images/frontend/about-us/about-us-small-banner.png');
    background-position: right bottom;
    height: 350px;
  }
}
</style>