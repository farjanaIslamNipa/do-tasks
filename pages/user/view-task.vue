<template>
<div class="pt-md-5 pt-4">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <div class="text-center">
          <img class="listing-banner-img" src="/images/frontend/listing/listing-banner.png" alt="">
          <h3 class="text-brand fw-bold pt-4">House Cleaning - Deep Clean/Spring Clean</h3>
          <h5 class="">Starting from <b>$240</b></h5>
        </div>
      </div>
    </div>
    <div class="pt-5 mt-3">
      <h6 class="text-brand fw-bold text-uppercase text-underline">About this tasker</h6>
      <div class="d-flex align-items-center py-3">
        <div><img class="tasker-img" src="/images/frontend/listing/tasker-img.png" alt=""></div>
        <div class="ps-3">
          <h6 class="text-brand fw-bold text-capitalize">Deepankar R</h6>
          <div>
            <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
            <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
            <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
            <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
            <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
            <p class="text-gray ps-2 fw-bold mb-0 d-inline-block text-15">4.6 (821)</p>
            <div class="mt-2">
              <NuxtLink to="/profile" class="rounded-fill-btn py-1 px-3 text-capitalize text-15">View Profile</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6 class="text-uppercase text-brand mt-3 text-underline">Description</h6>
          <p>Hey there! Hope you’re keeping well and safe!</p>
          <p>We are a professional and experienced domestic and industrial cleaners provider. We offer highly reliable services and have a thorough attention to detail! We use branded, high end equipment to ensure a sparkling and spotless clean.</p>
          <p> Get in touch with us for crazy deals and we promise you a trustworthy and reliable service.</p>
          <p class="mb-0">Thank you</p>
          <p class="mb-0">Best Regards</p>
          <p class="fw-bold">Deepankar R</p>

          <h6 class="text-uppercase text-brand mt-3 text-underline">AVAILABILITY</h6>
          <p>I am available 7 days of the week with no extra charge on Weekends. Feel free to reach out.</p>
      </div>
    </div>
    <!-- PACKAGE SECTION STARTS -->
    <div class="pt-4">
      <h6 class="text-brand fw-bold text-uppercase text-underline">About this tasker</h6>
      <AppPricePackage />
      <AppPricePackage />
      <AppPricePackage />
      <div class="text-center px-2 pb-4">
      <h6 class="fw-bold mb-4">Have a question? Need something specific? <br> Start a conversation with the Tasker.</h6>
      <button class="rounded-fill-btn py-2">Contact Tasker</button>
    </div>
    </div>
    <!-- REVIEW SECTION -->
    <div class="pt-4 pb-5">
      <h6 class="text-brand fw-bold text-uppercase text-underline mb-4">REVIEWS FOR THIS TASKER</h6>
      <div class="row pt-1">
        <div v-for="(review, itemIndex) in customerReview" :key="itemIndex" class="col-md-6 mb-4">
          <div class="bg-white h-100">
            <AppReviewCard :review="review" :itemIndex="itemIndex" />
          </div>
        </div>
      </div>
      <div class="text-center pt-4"><button class="rounded-fill-btn text-capitalize py-2">Read all review</button></div>
    </div>
  </div>
</div>
</template>

<script setup>
import {ref} from 'vue';
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

</script>

<style scoped>
.listing-banner-img {
  height: 550px;
  width: 100%;
  object-fit: cover;
}

.tasker-img {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
}
@media(max-width:991px){
  .listing-banner-img {
  height: 350px;
  width: 100%;
  object-fit: cover;
}
}
</style>