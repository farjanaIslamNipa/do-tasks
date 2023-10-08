<template>
  <div class="pt-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-5 col-12">
          <ProfileSidebar />
        </div>
        <div class="col-xl-9 col-lg-8 col-md-7 col-12">
          <div>
            <div class="d-md-block d-none">
              <div class="d-flex justify-content-between align-items-end">
                <h6 class="text-uppercase text-brand text-underline">Portfolio</h6>
                <button class="profile-edit-btn btn" @click="handleProfileImg"><i class="fa-solid fa-pencil"></i></button>
              </div>
              <div class="row pt-3">
                <div class="col-xl-4 col-md-6 mb-4">
                  <div>
                    <img class="profile-img" src="/images/frontend/general/1.png" alt="">
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 mb-4">
                  <div>
                    <img class="profile-img" src="/images/frontend/general/5.png" alt="">
                  </div>
                </div>
                <div id="add-profile-img-box" class="col-xl-4 col-md-6 mb-4 d-none">
                  <div>
                    <div class="form-group upload-profile-box">
                      <input type="file" class="form-control">
                      <div class="d-flex align-items-center">
                        <span class="text-brand profile-upload-icon d-block"><i class="fa-solid fa-plus"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-xl-5 pt-lg-3 pt-2 pb-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="text-uppercase text-underline fw-bold text-brand mb-0">LISTINGS</h6>
              <div class="d-flex align-items-center">
                <button class="profile-edit-btn btn"  @click="handleCreateListing"><i class="fa-solid fa-pencil"></i></button>
                <!-- <div class="caret-navigation me-1" @click="showPrev"><span><i class="fa-solid fa-angle-left"></i></span>
                </div>
                <div class="caret-navigation" @click="showNext"><span><i class="fa-solid fa-angle-right"></i></span>
                </div> -->
              </div>
            </div>
            <div id="create-listing" class="listing-box">
              <div class="bg-white rounded-2 card-shadow mb-4 px-4 py-4 text-center create-listing-box">
                <div>
                  <h6 class="mb-3">Work less, earn more</h6>
                  <img src="/images/frontend/listing/listing-icon.svg" alt="">
                  <NuxtLink class="mb-0 mt-3 text-brand d-block" to="#">Create a listing</NuxtLink>
                </div>
              </div>
            </div>
            <carousel ref="carousel" :touch-drag=true :pagination-enabled=false :mouse-drag="true" :speed=1000
              :per-page-custom="[[320, 1], [500, 2], [1200, 3]]">
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
            <p><em>This user has no reviews as a Tasker yet</em></p>
            <!-- <div class="row pt-3">
              <div v-for="(review, itemIndex) in customerReview" :key="itemIndex" class="col-xl-6 col-12 mb-4">
                <div class="bg-white h-100">
                  <FrontendIncludesReviewCard :review="review" :itemIndex="itemIndex" />
                </div>
              </div>
            </div>
            <div class="text-center pt-4">
              <NuxtLink to="#" class="rounded-fill-btn text-capitalize">Read all review</NuxtLink>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    const selected = ref(null);
    const options = ref(['Most Recent', 'Last Month', 'All'])

    const doCarousel = ref(null)
    const showNext = () => {
      doCarousel.value.handleNavigation('forward')
    }
    const showPrev = () => {
      doCarousel.value.handleNavigation('backward')
    }
    const handleProfileImg = () => {
    const profileImg = document.getElementById('add-profile-img-box');
      profileImg.classList.toggle('show-profile-img-box');
    }
    const handleCreateListing = () => {
      const createListing = document.getElementById('create-listing');
      createListing.classList.toggle('listing-box-height');
    }
</script>

<style scoped>
.profile-img {
  height: 180px;
  max-width: 300px;
  object-fit: cover;
}
.create-listing-box{
  height: 180px;
  max-width: 305px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.upload-profile-box {
  position: relative;
  padding: 8px;
  border: 2px dashed var(--purpleLight);
  border-radius: 2px;
  cursor: pointer;
  max-width: 300px;
  height: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.upload-profile-box input {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
}

.profile-upload-icon {
  line-height: 0;
  font-size: 35px;
  color: white;
  background-color: var(--purpleLight);
  border-radius: 50%;
  padding: 10px 12px;
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

.review-active-bottom-border {
  border-top: 1px solid var(--purpleLight);
  width: 320px;
}
.show-profile-img-box{
  display: block !important;
}

.listing-box {
  max-height: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
}

.listing-box-height {
  max-height: 200px;
  transition: max-height 0.3s ease-in;
}

@media(max-width:991px) {
  .review-active-bottom-border {
    width: 230px
  }
}
@media(max-width:991px) {
  .profile-img, .upload-profile-box{
    max-width: 190px;
    height: 140px;
    object-fit: cover;
  }
}

</style>