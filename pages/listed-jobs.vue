<template>
  <div>
    <div class="job-search-banner">
      <div class="job-search-header-content text-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h1 class="fw-bold mb-0">Earn money on <span class="text-brand">HiTasks</span></h1>
              <h5 class="text-400 py-4 text-small">HiTasks is Australia's largest Job marketplace for all kind of Jobs from handyman to cleaners to gardeners. Sign up now and <span class="fw-bold">Get Hired!</span></h5>
              <div class="mx-lg-5 mx-4">
                <div class="d-flex align-items-center">
                  <div class="w-100"><input id="example-search-input" class="form-control border rounded-pill job-search-input ps-4" type="search" placeholder="Job title or keyword"></div>
                  <div class="search-icon"><button class="btn bg-brand text-white rounded-circle"><i class="fa-solid fa-magnifying-glass"></i></button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Job Search main content -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <!-- LEFT SIDE -->
          <div class="col-lg-3 mb-lg-0 mb-4">
            <div class="bg-purple-lighter rounded-3 px-3 py-4 d-lg-block d-flex flex-wrap">
              <div class="d-flex justify-content-between align-items-center">
                <a href="#accounting" class="job-name" @click="scroll">Accounting</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">10</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#admin" class="job-name">Book Keeping</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">8</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Alterations</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">12</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Appliances</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">8</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#architects" class="job-name">Architects</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">6</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a class="job-name" @click="scroll">Assembly</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">11</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Audio Visual</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">25</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Auto Electrician</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">5</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Bricklayer</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Admin</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#admin" class="job-name">Admin</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">8</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Alterations</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">12</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Appliances</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">8</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#architects" class="job-name">Architects</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">6</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a class="job-name" @click="scroll">Assembly</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">11</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Audio Visual</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">25</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Auto Electrician</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">5</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Bricklayer</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Admin</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#admin" class="job-name">Admin</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">8</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Alterations</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">12</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Appliances</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">8</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#architects" class="job-name">Architects</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">6</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a class="job-name" @click="scroll">Assembly</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">11</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Audio Visual</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">25</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Auto Electrician</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">5</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Bricklayer</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Admin</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#admin" class="job-name">Admin</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">8</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Alterations</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">12</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Appliances</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">8</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#architects" class="job-name">Architects</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">6</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a class="job-name" @click="scroll">Assembly</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">11</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Audio Visual</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">25</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Auto Electrician</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">5</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Bricklayer</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="job-name">Admin</a>
                <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
              </div>
            </div>
          </div>

          <!-- Right Side -->
          <div class="col-lg-9">
            <div>
              <NuxtLink id="accounting" to="/job-category" class="p-3 bg-white card-shadow rounded-3 mb-4">
                <h5 class="text-brand fw-bold job-category-name hover-brand">Book Keeping</h5>
                <img class="job-img img-fluid" src="/images/frontend/jobs/accounting.png" alt="">
                <div class="d-flex flex-wrap align-items-center mt-3">
                  <p class="bg-purple-lighter rounded-3 px-3 py-2 mx-1 mb-2 text-dark hover-brand"><span>Bookkeeping</span></p>
                </div>
              </NuxtLink>
              <div id="accounting" class="p-3 bg-white card-shadow rounded-3 mb-4">
                <NuxtLink to="#" class="text-brand fw-bold job-category-name hover-brand">Accounting</NuxtLink>
                <img class="job-img img-fluid" src="/images/frontend/jobs/admin.png" alt="">
                <div class="d-flex flex-wrap align-items-center mt-3">
                  <NuxtLink to="#" class="bg-purple-lighter rounded-3 px-3 py-2 mx-1 mb-2 text-dark hover-brand"><span>Bookkeeping</span></NuxtLink>
                </div>
              </div>
              <div id="accounting" class="p-3 bg-white card-shadow rounded-3 mb-4">
                <NuxtLink to="#" class="text-brand fw-bold job-category-name hover-brand">Accounting</NuxtLink>
                <img class="job-img img-fluid" src="/images/frontend/jobs/alterations.png" alt="">
                <div class="d-flex flex-wrap align-items-center mt-3">
                  <NuxtLink to="#" class="bg-purple-lighter rounded-3 px-3 py-2 mx-1 mb-2 text-dark hover-brand"><span>Bookkeeping</span></NuxtLink>
                </div>
              </div>
              <div id="accounting" class="p-3 bg-white card-shadow rounded-3 mb-4">
                <NuxtLink to="#" class="text-brand fw-bold job-category-name hover-brand">Accounting</NuxtLink>
                <img class="job-img img-fluid" src="/images/frontend/jobs/architects.png" alt="">
                <div class="d-flex flex-wrap align-items-center mt-3">
                  <NuxtLink to="#" class="bg-purple-lighter rounded-3 px-3 py-2 mx-1 mb-2 text-dark hover-brand"><span>Bookkeeping</span></NuxtLink>
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
 .job-search-banner {
    background-image: url('/images/frontend/jobs/job-search-bg.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-icon{
    margin-left: -50px;
  }
  .job-search-input{
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .job-name{
    color: black;
    border-radius: 30px;
    padding: 2px 12px;
    transition: all 0.3s ease;
  }
  .job-name:hover{
    background-color: #fff;
    color: var(--brandColor);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all 0.3s ease;
  }
  .job-count{
    padding: 3px 15px 1px;
    line-height: 1;
    width: 50px;
    text-align: center;
    font-size: 15px;
  }
  .job-img{
    height: 220px;
    width: 100%;
    object-fit: cover;
  }
  .job-category-name{
    font-size: 22px;
    display: inline-block;
    margin-bottom: 10px;
  }
  @media(max-width:991px){
    .job-count{
      display: none !important;
    }
  }
  @media(max-width:767px){
    .job-search-banner{
      height: 400px;
    }
    .job-search-input{
    padding-top: 12px;
    padding-bottom: 12px;
  }
  }
  @media(max-width:575px){
    .job-search-banner{
      height: 350px;
    }
    .job-search-input{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .search-icon{
    margin-left: -48px;
  }
  }
</style>