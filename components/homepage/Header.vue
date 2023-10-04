<template>
  <div class="home-header-bg">
    <div class="small-device-content-position">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-8">
            <div class="small-device-content">
              <div>
                <h1 class="fw-bold mb-4">Get <span class="text-brand">moving</span> in done.</h1>
              <div class="d-flex align-items-center">
                <img data-aos="zoom-in" data-aos-delay="200" class="img-fluid" src="/images/frontend/home/check-mark.png" alt="">
                <h3 class="mb-0 ms-2">Removals</h3>
              </div>
              <div class="d-flex align-items-center py-3">
                <img  data-aos="zoom-in" data-aos-delay="400" class="img-fluid" src="/images/frontend/home/check-mark.png" alt="">
                <h3 class="mb-0 ms-2">End of lease cleaning</h3>
              </div>
              <div class="d-flex align-items-center">
                <img data-aos="zoom-in" data-aos-delay="600" class="img-fluid" src="/images/frontend/home/check-mark.png" alt="">
                <h3 class="mb-0 ms-2">Wifi set up</h3>
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
.home-header-bg{
  background-image: url('/images/frontend/home/header-bg.png');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  height: 600px;
  padding-top: 160px;
  position: relative;
}

@media(max-width:1499px){
  .home-header-bg{
    background-position: right -50px top;
  }
}
@media(max-width:1399px){
  .home-header-bg{
    background-position: right -80px top;
  }
}
@media(max-width:1199px){
  .home-header-bg{
    height: 500px;
    background-position: right -100px top;
    padding-top: 100px;
  }
}
@media(max-width:1024px){
  .home-header-bg{
    height: 450px;
  }
}
@media(max-width:991px){
  .home-header-bg{
    height: 400px;
    background-position: right -120px top;
    padding-top: 80px;
  }
}
@media(max-width:785px){
  .home-header-bg{
    height: 360px;
    background-position: right -120px top;
    padding-top: 80px;
  }
}
@media(max-width:767px){
  .home-header-bg{
    background-image: url('/images/frontend/home/small-device-header-banner.png');
    height: 550px;
    background-position: top center;
    padding-top: 0;
  }
  .small-device-content-position{
    position: absolute;
    bottom: 0;
    background-color: rgba(248, 230, 255, 0.9);
    width: 100%;
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 0 100%, -40% 100%);
  }
  .small-device-content{
    display: flex;
    justify-content: center;
    padding: 250px 10px 30px 50px;
  }
}
@media(max-width:574px){
  .home-header-bg{
    background-image: url('/images/frontend/home/small-device-header-banner.png');
    height: 400px;
    background-position: top center;
    padding-top: 0;
  }
  .small-device-content-position{
    position: static;
    display: flex;
    align-items: center;
    width: 100%;
    clip-path: none;
    height: 100%;
    background-color: rgba(248, 230, 255, 0.8);
  }
  .small-device-content{
    display: flex;
    justify-content: center;
    padding: 0;
  }
}
@media(max-width:375px){
  .home-header-bg{
    background-image: url('/images/frontend/home/small-device-header-banner.png');
    height: 350px;
    background-position: top center;
    padding-top: 0;
  }
  .small-device-content-position{
    position: static;
    display: flex;
    align-items: center;
    width: 100%;
    clip-path: none;
    height: 100%;
    background-color: rgba(248, 230, 255, 0.8);
  }
  .small-device-content{
    display: flex;
    justify-content: center;
    padding: 0;
  }
}

</style>