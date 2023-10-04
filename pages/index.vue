<template>
  <div>
    <HomepageHeader />
    <HomepagePostFirstTask />
    <HomepageWhatOthersDone />
    <HomepageSafeAndSecure />
    <HomepageWorkFlexible />
    <HomepageIncomeOnDoTasks />
    <HomepageBlogs />
  </div>
</template>

<script setup>

</script>

<style>

.safe-secure-bg{
    background-image: url('/images/frontend/home/safe-secure-bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 80px 50px;
    border-radius: 25px;
  }

  .safe-secure-card-top-margin{
    margin-top: 80px;
  }

  .section-top-padding{
    padding-top: 120px;
  }
  .purple-gradient-bg{
    background: rgb(102,45,145);
  background: linear-gradient(108deg, rgba(102,45,145,0.8463760504201681) 0%, rgba(102,45,145,0.76234243697479) 0%, rgba(102,45,145,0.37298669467787116) 58%, rgba(102,45,145,0.11248249299719892) 100%);
  padding: 60px 0;
  }
  .home-mobile-img{
    position: absolute;
    bottom: 0;
  }
  .work-icon{
    width: 20px;
    height: 20px;
  }
  .work-title{
    font-size: 32px;
  }
  .learn-more-btn:hover{
    color: white;
    background-color: var(--purpleLight);
    transition: all 0.3s ease;
  }
  @media(max-width:1399px){
    .home-mobile-img img{
      width: 88%;
    }
    .purple-gradient-bg{
      padding: 50px 0;
    }
    .work-title{
    font-size: 30px;
  }
  }
  @media(max-width:1199px){
    .home-mobile-img img{
      width: 65%;
    }
  }
  @media(max-width:991px){
    .safe-secure-card-top-margin{
      margin-top: 0;
      height: 100%;
    }
    .section-top-padding{
      padding-top: 0;
    }
  }

  @media(max-width:767px){
    .safe-secure-bg{
      padding: 50px;
      border-radius: 10px;
    }
  }
  @media(max-width:575px){

  }
  @media(max-width:499px){
    .safe-secure-bg{
      background-image: none;
      padding: 10px;
      border-radius: 0;
    }
    .work-icon{
  display: none;
  }
  }
</style>