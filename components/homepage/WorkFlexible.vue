<template>
  <div class="section-top-padding position-relative">
    <div class="purple-gradient-bg">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-4 pe-0">
            <div class="home-mobile-img d-lg-block d-none">
              <img data-aos="fade-down" data-aos-delay="50" data-aos-duration="800" class="img-fluid" src="/images/frontend/home/mobile.png" alt="">
            </div>
          </div>
          <div class="col-xl-7 col-lg-8 bg-light ps-0">
            <div class="px-xl-5 px-2 py-xxl-5 py-4">
              <div class="ps-xl-0 ps-md-5 ps-0">
                <h1 class="text-brand mb-0 work-title">Work <span class="fw-bold">when</span> you want,</h1>
                <h1 class="text-brand work-title">doing <span class="fw-bold">what</span> you want.</h1>
                <div class="mt-4">
                  <div>
                    <img class="work-icon" src="/images/frontend/home/work-icon-1.svg" alt="">
                    <h5 class="mb-0 d-inline-block ms-2 text-small">Earn extra income on your time schedule</h5>
                  </div>
                  <div class="my-xl-4 my-2">
                    <img class="work-icon" src="/images/frontend/home/work-icon-2.svg" alt="">
                    <h5 class="mb-0 d-inline-block ms-2 text-small">Grow your business, client-base, or even just your skills</h5>
                  </div>
                  <div>
                    <img class="work-icon" src="/images/frontend/home/work-icon-3.svg" alt="">
                    <h5 class="mb-0 d-inline-block ms-2 text-small">Access thousands of job opportunities, for free</h5>
                  </div>
                </div>
                <div class="mt-xl-4 mt-lg-0 mt-3 py-3">
                  <NuxtLink to="/earn-money" class="rounded-outline-btn button-small">Earn money as a Tasker</NuxtLink>
                </div>
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
  .purple-gradient-bg{
    background: rgb(102,45,145);
  background: linear-gradient(108deg, rgba(102,45,145,0.8463760504201681) 0%, rgba(102,45,145,0.76234243697479) 0%, rgba(102,45,145,0.37298669467787116) 58%, rgba(102,45,145,0.11248249299719892) 100%);
  padding: 60px 0;
  }
  @media(max-width:1399px){
    .home-mobile-img img{
      width: 88%;
    }
    .purple-gradient-bg{
      padding: 50px 0;
    }
    .work-title{
    font-size: 30px;
  }
  }
</style>