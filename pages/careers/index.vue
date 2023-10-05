<template>
  <div>
    <div class="career-bg d-flex align-items-center">
      <div class="container">
        <h1 class="fw-bold"><span class="text-brand">Careers</span> at HiTasks</h1>
        <h5 class="mb-5 text-small">Come join us as we build the world’s no.1 <br> marketplace for local services.</h5>
        <NuxtLink to="/sign-up" class="rounded-fill-btn button-small relative">Come join us!</NuxtLink>
      </div>
    </div>
    <div class="career-header-img pb-xl-5 pb-0">
      <div class="container">
        <img src="/images/frontend/careers/career-img.png" alt="" class="img-fluid">
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row mt-4">
          <div class="col-xl-6 col-12 mb-4">
            <div>
              <h2 class="text-brand fw-bold pe-xl-5 pe-0 me-xl-5 me-0">Few reasons why you should join our amazing team.</h2>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-1.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">Flexible workplace environment</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-2.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">upgrade your skills</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-3.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">Learning opportunity</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-4.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">secured future</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-5.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">open communication</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-6.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">maximize yourself</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-md-5 pt-0 pb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-12 text-center">
            <h5>Come work with us!</h5>
            <h3 class="text-brand fw-bold">Want to be a part of the HiTasks</h3>
            <p>We are always looking for new recruits who share our ideals! Check our current job listings below to find your desired roles.</p>
            <div class="d-sm-flex d-block align-items-center justify-content-center filter-section-width mx-auto">
              <div class="text-start w-100 mx-lg-3 mx-sm-2 mx-0 mb-sm-0 mb-3">
                <label for="">Jobs</label>
                <multi-select v-model="selected" :options="options" :show-labels="false" placeholder="All Positions"></multi-select>
              </div>
              <div class="text-start w-100 mx-lg-3 mx-sm-2 mx-0">
                <label for="">Locations</label>
                <multi-select v-model="selected" :options="options" :show-labels="false" placeholder="All Locations"></multi-select>
              </div>
            </div>
            <div class="row mt-md-5 mt-4">
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Brand & PR Manager</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" @click="openApplyNowModal">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Front end engineer</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" @click="openApplyNowModal">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Back end engineer</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" @click="openApplyNowModal">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Brand & PR Manager</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" @click="openApplyNowModal">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Brand & PR Manager</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" @click="openApplyNowModal">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Brand & PR Manager</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" @click="openApplyNowModal">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FrontendCareersApplyModal :apply-now-modal="'apply-now-modal'" :close-apply-now-modal="closeApplyNowModal" />
  </div>
</template>

<script setup>
import {ref} from 'vue';
const selected=ref('')
const options = ref(['Most Recent', 'Last Month', 'All'])
</script>

<style scoped>
.career-bg{
  background-image: url('/images/frontend/careers/career-banner.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  height: 400px;
}
.career-header-img{
  margin-top: -218px;
}
.career-icon{
  height: 40px;
}
.vacancy-card{
  background-color: var(--purpleLighter);
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.filter-section-width{
  width: 60%;
}
@media(max-width:1199px){
  .filter-section-width{
  width: 80%;
}
  .career-card-title{
  font-size: 17px;
}
}
@media(max-width:991px){
  .filter-section-width{
  width: 100%;
}
  .career-bg{
    height: 300px;
  }
  .career-header-img{
  margin-top: -125px;
}
}
@media(max-width:767px){
  .career-bg{
    height: 280px;
  }
  .career-header-img{
  margin-top: -100px;
}
}
@media(max-width:480px){
  .career-icon{
  height: 30px;
}
  .career-card-title{
  font-size: 15px;
}
}
@media(max-width:424px){
  .career-bg{
    height: 280px;
  }
  .career-header-img{
  margin-top: -80px;
}
.career-icon{
  height: 25px;
}
}
</style>