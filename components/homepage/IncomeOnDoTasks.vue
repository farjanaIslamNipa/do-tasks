<template>
   <div class="py-5">
    <div class="container">
      <h1 class="text-center text-brand mt-lg-4 mt-0">160,000 Taskers have earned an income on HiTasks</h1>
      <div class="d-flex align-items-center flex-wrap justify-content-center pt-4 pb-5">
        <NuxtLink class="tasker-link" to="/">Samanta</NuxtLink>
        <NuxtLink class="tasker-link" to="#">John</NuxtLink>
        <NuxtLink class="tasker-link" to="#">Martha</NuxtLink>
      </div>
      <div class="pt-xxl-5 pt-lg-3 pt-0">
        <div class="row">
          <div class="col-lg-5 col-md-4">
            <img class="img-fluid client-img" src="/images/frontend/home/girl-image.png" alt="">
            <div data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" class="d-flex justify-content-end">
              <div class="tasker-info bg-brand text-white p-xl-4 p-2 d-inline-block">
              <h4 class="fw-bold mb-xl-1 mb-0 client-name">Samantha</h4>
              <p class="mb-0 client-details">Specialities: assembly, pet care, gardening</p>
            </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-8">
            <div class="ps-3 pt-md-0 pt-4">
              <p class="text-18">Returning to the workforce as a single mum, Sam had to find something that could be flexible and cover the cost of childcare.</p>
              <div class="row pt-4">
                <div class="col-lg-6 col-md-7">
                  <div class="">
                    <h5 class="fw-bold text-small">WHAT THE REVIEWS SAY</h5>
                    <p>Very nice and caring in trying circumstances! Thanks again</p>
                    <p class="text-end">— Tim S.</p>
                    <div>
                      <h5 class="text-uppercase text-small">TRUST</h5>
                      <div>
                        <span style="color:goldenrod"><i class="fa-solid fa-star"></i></span>
                        <span style="color:goldenrod"><i class="fa-solid fa-star"></i></span>
                        <span style="color:goldenrod"><i class="fa-solid fa-star"></i></span>
                        <span style="color:goldenrod"><i class="fa-solid fa-star"></i></span>
                        <span style="color:goldenrod"><i class="fa-solid fa-star"></i></span>
                      </div>
                      <p>4.9 stars from 185 reviews</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-5">
                  <div>
                    <h6 class="fw-bold text-uppercase ps-md-4 ps-0">BADGES</h6>
                    <div class="py-3 review-section-divider ps-4 pt-4 pb-5">
                      <div class="d-flex align-items-center mb-4">
                        <img src="/images/frontend/home/digital_id.svg" alt="">
                        <p class="mb-0 ps-3">Digital iD</p>
                      </div>
                      <div class="d-flex align-items-center">
                        <img src="/images/frontend/home/police-check.svg" alt="">
                        <p class="mb-0 ps-4">Police check</p>
                      </div>
                    </div>
                  </div>
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
.tasker-link{
  color: #414141;
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  padding: 0 30px;
}
.tasker-info{
  border-right: 6px solid white;
    box-shadow: 7px 0 0 var(--lime);
    margin-top: -80px;

}
.review-section-divider{
  border-left: 1px solid rgb(201, 201, 201);
}
@media(max-width:1199px){
  .tasker-info{
    margin-top: -50px;
}
}
@media(max-width:991px){
  .client-name{
    font-size: 17px;
  }
  .client-details{
    font-size: 15px;
    line-height: 1;
  }
}
@media(max-width:767px){
  .client-name{
    font-size: 22px;
  }
  .client-details{
    font-size: 18px;
    line-height: 2;
  }
  .tasker-info{
    margin-top: -80px;
}
}
@media(max-width:575px){
  .client-name{
    font-size: 18px;
  }
  .client-details{
    font-size: 16px;
    line-height: 2;
  }
  .tasker-link{
    padding: 0 20px;
  }
}
</style>