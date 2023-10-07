<template>
  <NuxtLink to="#" class="bg-white text-gray card-shadow h-100 rounded d-block py-3 px-lg-3 px-2 job-task-card">
    <div class="row">
      <div class="col-2">
        <img class="job-card-img" src="/images/frontend/general/no-user.svg" alt="">
      </div>
      <div class="col-xxl-7 col-6">
        <div class="pt-2">
          <h5 class="text-uppercase job-card-title mb-1">BOOKKEEPING</h5>
          <p class="mb-0 text-18 job-card-subtitle">Inspection house clean</p>
        </div>
      </div>
      <div class="col-xxl-3 col-4">
        <div class="pt-2 text-end">
          <NuxtLink class="get-the-job-link" to="#">Get this job</NuxtLink>
          <h2 class="fw-bold pt-2 job-card-price">$500</h2>
        </div>
      </div>
    </div>
    <div class="d-flex mt-2">
      <div class="me-lg-5 me-2">
        <span class="job-card-icon"><i class="fa-regular fa-clock"></i></span><small class="ms-1 d-inline-block">about 3 hours ago</small>
      </div>
      <div>
        <span class="job-card-icon"><i class="fa-solid fa-location-dot"></i></span><small class="ms-1 d-inline-block">Strathmore VIC, Australia</small>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.job-task-card:hover{
  transition: all 0.3s ease;
  color: #424242;
}
.job-card-img{
  height: 80px;
  border-radius: 50%;
}
.job-card-title{
  border-bottom: 2px solid rgb(230, 230, 230);
}
.get-the-job-link{
  background-color: var(--lime);
  color: white;
  padding: 5px 20px;
  border-radius: 30px;
}
.job-card-icon{
  font-size: 12px;
}

@media(max-width:1199px){
  .job-card-img{
    height: 70px;
  }
  .get-the-job-link{
    padding: 5px 15px;
  }

}
@media(max-width:991px){
  .job-card-img{
    height: 50px;
  }
  .get-the-job-link{
    padding: 5px 5px;
    font-size: 14px;
  }
  .job-card-title{
  font-size: 15px;
}
  .job-card-subtitle{
  font-size: 14px;
}
.job-card-price{
  font-size: 22px;
}

}
@media(max-width:340px){
  .get-the-job-link{
    padding: 3px;
    font-size: 13px;
  }
  .job-card-icon{
  display: none;
}
}
</style>