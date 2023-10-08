<template>
<div class="d-flex w-100">
  <div class="d-sm-block d-none">
    <img class="review-card-img" src="/images/frontend/general/no-user.svg" alt="User Image">
  </div>
  <div class="mt-1 ms-3">
    <h5 class="text-brand fw-bold text-capitalize mb-1">Ritchel Novella</h5>
    <div>
      <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
      <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
      <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
      <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
      <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
      <span class="mx-2">|</span>
      <span>2 months ago</span>
    </div>
    <div class="bg-purple-lighter rounded py-3 px-3 mt-3">
      <p :id="'review-text' + props.itemIndex" class="px-3 mb-0 review-text-height">
        <span>{{ props.review.review }}</span>
      </p>
      <p v-if="props.review.review.length > 142" :id="'continue-reading' + props.itemIndex" class="text-lime truncate-text mb-0 text-end pt-2"  @click="showFullReview(props.itemIndex)">....Continue Reading</p>
    </div>
  </div>
</div>
</template>

<script setup>
  const props = defineProps({
      review: Object,
      itemIndex: Number
  })
   const showFullReview = (index) => {
      const continueReading = document.getElementById('continue-reading' + index);
      if (continueReading.innerHTML === '....Continue Reading') {
        continueReading.innerHTML = 'Show Less'
      } else {
        continueReading.innerHTML = '....Continue Reading'
      }

      const clientReview = document.getElementById('review-text' + index);
      clientReview.classList.toggle('review-height');
    }
</script>

<style scoped>
.review-card-img{
  height: 70px;
  width: 70px;
  object-fit: cover;
  border-radius: 50%;
}
.review-text-height{
    height: 90px;
    overflow: hidden;
    margin-bottom: 0;
}
.review-height{
  height: auto !important;
  transition: height 0.3s ease;
}
.truncate-text{
  cursor: pointer;
}
</style>