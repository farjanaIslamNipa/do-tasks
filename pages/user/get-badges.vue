<template>
  <div class="pt-5">
      <div class="container">
          <h5 class="text-uppercase fw-bold text-brand mb-2">BADGES</h5>
          <h6 class="text-18">Badges help members be sure who you are and what you can do! The more you collect, the more Job Posters and Taskers will trust in your abilities.</h6>
          <hr class="line">
          <!-- Id badges -->
          <div class="pt-5">
              <h5 class="fw-bold text-capitalize text-underline">ID Badges</h5>
              <div class="row pt-4">
                  <div class="col-md-6 mb-5">
                      <ProfileBadgeCard />
                  </div>
                  <div class="col-md-6 mb-5">
                      <ProfileBadgeCard />
                  </div>
                  <div class="col-md-6 mb-5">
                      <ProfileBadgeCard />
                  </div>
                  <div class="col-md-6 mb-5">
                      <ProfileBadgeCard />
                  </div>
              </div>
          </div>
          <!-- LICENSE BADGES -->
          <div class="pt-5">
              <h5 class="fw-bold text-capitalize text-underline">License Badges</h5>
              <div class="row pt-4">
                  <div class="col-md-6 mb-5">
                      <ProfileBadgeCard />
                  </div>
                  <div class="col-md-6 mb-5">
                      <ProfileBadgeCard />
                  </div>
                  <div class="col-md-6 mb-5">
                      <ProfileBadgeCard />
                  </div>
                  <div class="col-md-6 mb-5">
                      <ProfileBadgeCard />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.line{
  border-top: 2px solid var(--brandColor);
}

</style>