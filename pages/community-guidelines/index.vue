<template>
<div>
  <div class="community-guideline-header pb-5">
      <div class="container">
          <div class="row align-items-xl-start align-items-center">
              <div class="col-md-6">
                  <div class="pt-5">
                      <h2 class="text-brand fw-bold mb-3">Community Guidelines</h2>
                      <h5 class="text-400 text-gray guideline-line-height">We’re passionate about connecting people ready to work with people who need work done. As HiTasks continues to grow it’s important that the community follows guidelines that reflect our values and standards of behaviour.</h5>
                  </div>
                  <div class="pt-xl-4 pt-3">
                      <NuxtLink to="#" class="text-underline text-gray text-18 text-600 hover-lime">Privacy Policy</NuxtLink>
                      <NuxtLink to="#" class="text-underline text-gray text-18 text-600 hover-lime ms-4">Terms & Conditions</NuxtLink>
                  </div>
              </div>
              <div class="col-md-6 d-md-block d-none">
                  <div>
                      <img src="/images/frontend/community-guideline/community-guideline-img.png" alt="" class="img-fluid">
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="py-5">
      <div class="container">
          <h2 class="text-brand text-center fw-bold">Policies for our community members</h2>
          <p class="text-center text-18 px-xl-5 px-0">Creating a community where all members can enjoy a safe and rewarding HiTasks experience requires trust. Being responsible and respectful to others are the building blocks that form our marketplace integrity.</p>
          <div class="row px-xl-5 px-0 pt-4">
              <div class="col-md-6 mb-md-0 mb-4">
                  <div class="d-flex align-items-center bg-white card-shadow rounded py-4 px-xl-5 px-lg-3 px-2 h-100 cursor-pointer" @click="goTo('/community-guidelines/poster-guidelines')">
                      <div><img class="user-img" src="/images/frontend/community-guideline/posters-icon.svg" alt=""></div>
                      <div class="ms-lg-4 ms-2">
                          <h4 class="fw-bold mb-1 text-lime">Posters</h4>
                          <h6 class="fw-bold mb-0">A member that has posted a task</h6>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="d-flex align-items-center bg-white card-shadow rounded py-4 px-xl-5 px-lg-3 px-2 h-100 cursor-pointer" @click="goTo('/community-guidelines/tasker-guidelines')">
                      <div><img class="user-img" src="/images/frontend/community-guideline/taskers-icon.svg" alt=""></div>
                      <div class="ms-lg-4 ms-2">
                          <h4 class="fw-bold mb-1 text-brand">Taskers</h4>
                          <h6 class="fw-bold mb-0">A member that has made an offer on a task</h6>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
.community-guideline-header{
  background-image: url('/images/frontend/community-guideline/community-guideline-banner.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
}
.guideline-line-height{
    line-height: 1.5;
}
.user-img{
   height: 100px; 
}
</style>