<template>
    <div class="footer pb-5">
      <div class="container mx-auto">
        <div class="row pt-5">
          <div class="col-sm-6 col-md-3">
            <div class="text-sm-start text-center">
              <NuxtLink class="" to="/">
                <img class="brand-logo" src="/images/frontend/general/do-task-logo-1.svg" alt="Logo">
              </NuxtLink>
              <h6 class="fw-semibold my-3 pe-4">The only way to do great work is to love what you do</h6>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="text-sm-start text-center">
              <h4 class="fw-bold text-brand mt-3">Company</h4>
              <NuxtLink to="/careers" class="text-dark py-1 d-block">Careers</NuxtLink>
              <NuxtLink to="/about-us" class="text-dark py-1 d-block">About Us</NuxtLink>
              <NuxtLink to="/listed-jobs" class="text-dark py-1 d-block">Listed Jobs</NuxtLink>
              <NuxtLink to="/job-categories" class="text-dark py-1 d-block">Job Categories</NuxtLink>
              <NuxtLink to="/community-guidelines" class="text-dark py-1 d-block">Community Guideline</NuxtLink>
              <NuxtLink to="/insurance-policy" class="text-dark py-1 d-block">Insurance Policy</NuxtLink>
              <NuxtLink to="/discover" class="text-dark py-1 d-block">Discover</NuxtLink>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="text-sm-start text-center">
              <h4 class="fw-bold text-brand mt-3">Customer</h4>
              <NuxtLink to="/profile" class="text-dark py-1 d-block">Profile</NuxtLink>
              <NuxtLink to="/profile" class="text-dark py-1 d-block">Update Profile</NuxtLink>
              <NuxtLink to="/user/settings/account" class="text-dark py-1 d-block">Profile Settings</NuxtLink>
              <NuxtLink to="/create-listing" class="text-dark py-1 d-block">Create Listing</NuxtLink>
              <NuxtLink to="/list-my-services" class="text-dark py-1 d-block">List Your Services</NuxtLink>
              <NuxtLink to="/listed-services" class="text-dark py-1 d-block">Listed Services</NuxtLink>
              <NuxtLink to="/listed-tasks" class="text-dark py-1 d-block">Listed Tasks</NuxtLink>
              <NuxtLink to="/view-task" class="text-dark py-1 d-block">View Task</NuxtLink>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="text-sm-start text-center">
              <h4 class="fw-bold text-brand mt-3">Find Us</h4>
              <div class="mt-3">
                <p class="text-16">Download the HiTask App and get the tasks you need completed with just a tap of the button. You can also browse available tasks and earn money wherever you go!</p>
                <a href="#" target="_blank"><img class="img-fluid me-2" src="/images/frontend/earn-money-as-tasker/app-store.svg" alt=""></a>
                  <a href="#" target="_blank"><img class="img-fluid mt-lg-0 mt-sm-2 mt-0" src="/images/frontend/earn-money-as-tasker/google-play.svg" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-brand text-white text-center py-3">
      <p class="text-15 mb-0">Copyright © {{ new Date().getFullYear() }} HiTasks. All rights reserved.</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer{
  background-color: #c8a2e680;
}
.brand-logo{
  height: 50px;
}
</style>