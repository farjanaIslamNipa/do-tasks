<template>
    <div class="pt-5 position-relative">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-5 col-12">
           <ProfileUserSidebar />
          </div>
          <div class="col-xl-9 col-lg-8 col-md-7 col-12">
            <div>
              <div class="d-md-block d-none">
                <h6 class="text-uppercase text-underline fw-bold text-brand">Portfolio</h6>
                <div class="row pt-3">
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div>
                      <img class="profile-img" src="/images/frontend/user-profile/1.png" alt="">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div>
                      <img class="profile-img" src="/images/frontend/user-profile/2.png" alt="">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div>
                      <img class="profile-img" src="/images/frontend/user-profile/3.png" alt="">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div>
                      <img class="profile-img" src="/images/frontend/user-profile/5.png" alt="">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div>
                      <img class="profile-img" src="/images/frontend/user-profile/6.png" alt="">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div>
                      <img class="profile-img" src="/images/frontend/user-profile/7.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-md-5 pt-2 pb-3">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-uppercase text-underline fw-bold text-brand mb-0">LISTINGS</h6>
                  <div class="d-flex align-items-center">
                    <div class="caret-navigation me-1" @click="showPrev"><span><i class="fa-solid fa-angle-left"></i></span></div>
                    <div class="caret-navigation" @click="showNext"><span><i class="fa-solid fa-angle-right"></i></span></div>
                  </div>
                </div>
                <carousel ref="doCarousel" :touch-drag=true :pagination-enabled=false :mouse-drag="true" :speed=1000 :per-page-custom="[[320, 1],[500, 2],[1200, 3]]">
                  <slide>
                    <AppTaskerCard />
                  </slide>
                  <slide>
                    <AppTaskerCard />
                  </slide>
                  <slide>
                    <AppTaskerCard />
                  </slide>
                  <slide>
                    <AppTaskerCard />
                  </slide>
                  <slide>
                    <AppTaskerCard />
                  </slide>
                  <slide>
                    <AppTaskerCard />
                  </slide>
                  <slide>
                    <AppTaskerCard />
                  </slide>
                  <slide>
                    <AppTaskerCard />
                  </slide>
                </carousel>
              </div>
    
              <!-- REVIEW SECTION -->
              <div class="py-5">
                <div class="d-sm-flex d-block justify-content-between align-items-end mb-3">
                  <div class="mb-sm-0 mb-3">
                    <h6 class="text-uppercase text-underline fw-bold text-brand mb-3">REVIEWS</h6>
                    <div class="d-flex ">
                      <label for="tasker-review" class="review-checkbox-container">
                        <input id="tasker-review" class="review-checkbox-input" type="radio" checked name="review-checkbox" />
                        <div class="review-checkbox-content py-2">
                          <span>As a Tasker</span>
                        </div>
                      </label>
    
                      <label for="poster-review" class="review-checkbox-container">
                        <input id="poster-review" class="review-checkbox-input" type="radio" name="review-checkbox" />
                        <div class="review-checkbox-content py-2">
                          <span>As a Poster</span>
                        </div>
                      </label>
                    </div>
                    <div class="review-active-bottom-border"></div>
                  </div>
                  <div class="review-select">
                    <VueMultiselect
                      v-model="selected"
                      :options="options" :show-labels="false">
                    </VueMultiselect>
                  </div>
                </div>
                <div class="row pt-3">
                  <div v-for="(review, itemIndex) in customerReview" :key="itemIndex" class="col-xl-6 col-12 mb-4">
                    <div class="bg-white h-100">
                      <AppReviewCard :review="review" :itemIndex="itemIndex" />
                    </div>
                  </div>
                </div>
                <div class="text-center pt-4">
                  <button class="rounded-fill-btn text-capitalize">Read all review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
    const selected = ref(null);
    const options = ref(['Most Recent', 'Last Month', 'All'])
    const customerReview = ref([{
        id: 1,
        review: 'I booked a deep clean with Chhavi and was very impressed with the results! The cleaning team was friendly, efficient and thorough. Chhavi was also very responsive andhelpful throughout the booking process. Overall a great experience and highly recommend their services!',
        date: '08 Jul, 2022'
      },
      {
        id: 2,
        review: 'I booked a deep clean with Chhavi and was very impressed with the results! The cleaning team was friendly, efficient and thorough. Chhavi was also very responsive andhelpful throughout the booking process. Overall a great experience and highly recommend their services! I booked a deep clean with Chhavi and was very impressed with the results! The cleaning team was friendly, efficient and thorough. Chhavi was also very responsive andhelpful throughout the booking process. Overall a great experience and highly recommend their services!',
        name: 'Kim Paul',
        date: '08 Jul, 22'
      },
      {
        id: 3,
        review: 'I booked a deep clean with Chhavi and was very impressed with the results! The cleaning team was friendly, efficient and thorough. Chhavi was also very responsive andhelpful throughout the booking process.',
        name: 'Tracy Oakley',
        date: '08 Jul, 22'
      },
      {
        id: 4,
        review: 'I booked a deep clean with Chhavi and was very impressed with the results! The cleaning team was friendly, efficient and thorough. Chhavi was also very responsive andhelpful throughout the booking process. Overall a great experience and highly recommend their services!',
        name: 'Dennis',
        date: '08 Jul, 22'
      },
    ])

    const doCarousel = ref(null)
    const showNext = () => {
      doCarousel.value.handleNavigation('forward')
    }
    const showPrev = () => {
      doCarousel.value.handleNavigation('backward')
    }
</script>

<style scoped>

.profile-img {
      height: 180px;
      max-width: 300px;
      object-fit: cover;
    }
    .caret-navigation {
      height: 26px;
      width: 26px;
      border: 1px solid var(--brandColor);
      border-radius: 50%;
      color: var(--brandColor);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .caret-navigation:hover {
      background-color: var(--brandColor);
      color: white;
    }
    
    .caret-navigation span {
      line-height: 0;
    }
    
    .review-checkbox-container {
      position: relative;
      width: 100px;
      box-sizing: border-box;
      margin-right: 20px;
    }
    
    .review-checkbox-container .user-checkbox-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 25px;
      transition: .3s ease;
    }
    
    .review-checkbox-container .review-checkbox-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 50px;
      opacity: 0;
      cursor: pointer;
    }
    
    .review-checkbox-input[type=radio]:checked~.review-checkbox-content {
      color: var(--brandColor);
      border-bottom: 2px solid var(--brandColor);
    }
    
    @keyframes slidein {
      from {
        margin-top: 100%;
        width: 300%;
      }
    
      to {
        margin: 0%;
        width: 100%;
      }
    }
    
    .review-active-bottom-border {
      border-top: 1px solid var(--purpleLight);
      width: 320px;
    }
    @media(max-width:1199px){
      .profile-img {
      height: 120px;
      width: 100%;
      object-fit: cover;
    }
    }
    .review-active-bottom-border {
      border-top: 1px solid var(--purpleLight);
      width: 320px;
    }
    @media(max-width:991px){
    .review-active-bottom-border{
      width:230px
    }
    }
</style>