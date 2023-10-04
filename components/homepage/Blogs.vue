<template>
  <div class="pt-lg-5 pt-0 pb-5 blog-bg">
    <div class="container">
      <h1 class="text-brand text-center mb-5">Articles, stories and more</h1>
      <div class="row">
        <div class="col-md-4 mb-md-0 mb-4">
          <NuxtLink to="#" class="d-block text-dark">
            <img class="img-fluid blog-img" src="/images/frontend/home/blog-1.png" alt="">
            <div class="blog-content card-shadow bg-white px-xl-4 px-2 py-xl-4 py-3 mx-xl-4 mx-0">
              <h5 class="mb-4 blog-title">Father’s Day tasks on Hitasks</h5>
              <div class="d-flex align-items-center justify-content-between">
                <div><p class="mb-0 text-brand">Read More</p></div>
                <div><img src="/images/frontend/home/clock.svg" alt=""><span class="text-brand ms-1">20 min read</span></div>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="col-md-4 mb-md-0 mb-4">
          <div>
            <img class="img-fluid blog-img" src="/images/frontend/home/blog-2.png" alt="">
            <div class="blog-content card-shadow bg-white px-xl-4 px-2 py-xl-4 py-3 mx-xl-4 mx-0">
              <h5 class="mb-4 blog-title">Father’s Day tasks on Hitasks</h5>
              <div class="d-flex align-items-center justify-content-between">
                <div><p class="mb-0 text-brand">Read More</p></div>
                <div><img src="/images/frontend/home/clock.svg" alt=""><span class="text-brand ms-1">20 min read</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-md-0 mb-4">
          <div>
            <img class="img-fluid blog-img" src="/images/frontend/home/blog-3.png" alt="">
            <div class="blog-content card-shadow bg-white px-xl-4 px-2 py-xl-4 py-3 mx-xl-4 mx-0">
              <h5 class="mb-4 blog-title">Father’s Day tasks on Hitasks</h5>
              <div class="d-flex align-items-center justify-content-between">
                <div><p class="mb-0 text-brand">Read More</p></div>
                <div><img src="/images/frontend/home/clock.svg" alt=""><span class="text-brand ms-1">20 min read</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-md-5 mt-3 pt-xxl-3 pt-0">
        <NuxtLink class="rounded-outline-btn rounded-pill px-5" to="#">Visit our blogs</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.blog-bg{
  background-image: url('/images/frontend/home/blog-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
.blog-content{
  margin-top: -50px;
  position: relative;
}

.blog-img{
  height: 380px;
  width: 100%;
  object-fit: cover;
}

@media(max-width:1199px){
  .blog-img{
  height: 300px;
}
}
@media(max-width:991px){
  .blog-content{
  margin-top: 0;
}
.blog-title{
  font-size: 18px;
}
.blog-img{
  height: 200px;
}
}
@media(max-width:767px){
  .blog-content{
  margin-top: 0;
}
.blog-title{
  font-size: 18px;
}
.blog-img{
  height: 300px;
}
}
</style>