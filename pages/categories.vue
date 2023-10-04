<template>
    <div>
      <div class="categories-search-banner">
        <div class="job-search-header-content text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h1 class="fw-bold mb-0">What's on your list?</h1>
                <h5 class="text-400 py-4 text-small">To-do list never getting shorter? Take the burden off and find the help you need on Airtasker. And if you're wondering what kinds of things people actually get done on here - look no further!Here are some of our most popular task categories...</h5>
                <div class="mx-lg-5 mx-4">
                  <div class="d-flex align-items-center">
                    <div class="w-100"><input id="example-search-input" class="form-control border rounded-pill job-search-input ps-4" type="search" placeholder="Job title or keyword"></div>
                    <div class="search-icon"><button class="btn bg-lime text-white rounded-circle"><i class="fa-solid fa-magnifying-glass"></i></button></div>
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
              <div class="bg-lime-lighter rounded-3 px-3 py-4 d-lg-block d-flex flex-wrap">
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#accounting" class="job-name" @click="scroll">Accounting</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">10</span></div>
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
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
                  <div><span class="d-inline-block bg-white rounded-pill card-shadow job-count">0</span></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="job-name">Admin</a>
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
                <div id="accounting" class="p-3 bg-white card-shadow rounded-3 mb-4">
                  <h4 class="text-lime fw-bold">Accounting</h4>
                  <img class="job-img img-fluid" src="/images/frontend/jobs/accounting.png" alt="">
                  <div class="d-flex flex-wrap align-items-center mt-3">
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Bookkeeping</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Modelling</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Planning</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Reporting</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Payroll Accountant</span></div>
                  </div>
                </div>
                <div id="admin" class="p-3 bg-white card-shadow rounded-3 mb-4">
                  <h4 class="text-lime fw-bold">Admin</h4>
                  <img class="job-img img-fluid" src="/images/frontend/jobs/admin.png" alt="">
                  <div class="d-flex flex-wrap align-items-center mt-3">
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Bookkeeping</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Modelling</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Planning</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Reporting</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Payroll Accountant</span></div>
                  </div>
                </div>
                <div class="p-3 bg-white card-shadow rounded-3 mb-4">
                  <h4 class="text-lime fw-bold">Alterations</h4>
                  <img class="job-img img-fluid" src="/images/frontend/jobs/alterations.png" alt="">
                  <div class="d-flex flex-wrap align-items-center mt-3">
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Bookkeeping</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Modelling</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Planning</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Reporting</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Payroll Accountant</span></div>
                  </div>
                </div>
                <div class="p-3 bg-white card-shadow rounded-3 mb-4">
                  <h4 class="text-lime fw-bold">Appliances</h4>
                  <img class="job-img img-fluid" src="/images/frontend/jobs/appliances.png" alt="">
                  <div class="d-flex flex-wrap align-items-center mt-3">
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Bookkeeping</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Modelling</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Planning</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Reporting</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Payroll Accountant</span></div>
                  </div>
                </div>
                <div id="architects" class="p-3 bg-white card-shadow rounded-3 mb-4">
                  <h4 class="text-lime fw-bold">Architects</h4>
                  <img class="job-img img-fluid" src="/images/frontend/jobs/architects.png" alt="">
                  <div class="d-flex flex-wrap align-items-center mt-3">
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Bookkeeping</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Modelling</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Planning</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Reporting</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Payroll Accountant</span></div>
                  </div>
                </div>
                <div class="p-3 bg-white card-shadow rounded-3 mb-4">
                  <h4 class="text-lime fw-bold">Carpet Cleaning</h4>
                  <img class="job-img img-fluid" src="/images/frontend/jobs/carpet-cleaning.png" alt="">
                  <div class="d-flex flex-wrap align-items-center mt-3">
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Bookkeeping</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Modelling</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Planning</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Financial Reporting</span></div>
                    <div class="bg-lime-lighter rounded-3 px-3 py-2 mx-1 mb-2"><span>Payroll Accountant</span></div>
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
.categories-search-banner {
      background-image: url('/images/frontend/jobs/categories-banner.png');
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
    @media(max-width:991px){
      .job-count{
        display: none !important;
      }
    }
    @media(max-width:767px){
      .categories-search-banner{
        height: 350px;
      }
      .job-search-input{
      padding-top: 12px;
      padding-bottom: 12px;
    }
    }
    @media(max-width:575px){
      .job-search-input{
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .search-icon{
      margin-left: -48px;
    }
    }
</style>