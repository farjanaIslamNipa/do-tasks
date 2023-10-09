<template>
  <div>
    <div class="career-bg d-flex align-items-center">
      <div class="container">
        <h1 class="fw-bold"><span class="text-brand">Careers</span> at DoTasks</h1>
        <h5 class="mb-5 text-small">Come join us as we build the world’s no.1 <br> marketplace for local services.</h5>
        <NuxtLink to="/sign-up" class="rounded-fill-btn button-small relative">Come join us!</NuxtLink>
      </div>
    </div>
    <div class="career-header-img pb-xl-5 pb-0">
      <div class="container">
        <img src="/images/frontend/careers/career-img.webp" alt="" class="img-fluid">
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row mt-4">
          <div class="col-xl-6 col-12 mb-4">
            <div>
              <h2 class="text-brand fw-bold pe-xl-5 pe-0 me-xl-5 me-0">Few reasons why you should join our amazing team.</h2>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-1.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">Flexible workplace environment</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-2.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">upgrade your skills</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-3.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">Learning opportunity</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-4.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">secured future</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-5.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">open communication</h5>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mb-4">
            <div class="career-card bg-white card-shadow rounded px-sm-3 px-1 py-4 d-flex h-100">
              <img class="career-icon" src="/images/frontend/careers/career-6.svg" alt="">
              <h5 class="mb-0 ms-sm-3 ms-1 text-capitalize career-card-title">maximize yourself</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-md-5 pt-0 pb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-12 text-center">
            <h5>Come work with us!</h5>
            <h3 class="text-brand fw-bold">Want to be a part of the DoTasks</h3>
            <p>We are always looking for new recruits who share our ideals! Check our current job listings below to find your desired roles.</p>
            <div class="d-sm-flex d-block align-items-center justify-content-center filter-section-width mx-auto">
              <div class="text-start w-100 mx-lg-3 mx-sm-2 mx-0 mb-sm-0 mb-3">
                <label for="">Jobs</label>
                <multi-select v-model="selected" :options="options" :show-labels="false" placeholder="All Positions"></multi-select>
              </div>
              <div class="text-start w-100 mx-lg-3 mx-sm-2 mx-0">
                <label for="">Locations</label>
                <multi-select v-model="selected" :options="options" :show-labels="false" placeholder="All Locations"></multi-select>
              </div>
            </div>
            <div class="row mt-md-5 mt-4">
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Brand & PR Manager</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Front end engineer</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Back end engineer</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Brand & PR Manager</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Brand & PR Manager</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <div class="d-sm-flex d-block align-items-center justify-content-sm-between justify-content-start text-gray py-4 px-3 vacancy-card h-100">
                  <div><h5 class="fw-bold mb-0 text-capitalize text-500">Brand & PR Manager</h5></div>
                  <div>
                    <h6 class="mb-2">Deadline</h6>
                    <p class="mb-0">2022-01-25</p>
                  </div>
                  <div>
                    <div class="mb-3"><button class="rounded-fill-btn py-1 px-2 text-14" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply now</button></div>
                    <div><NuxtLink to="/careers/detail" class="rounded-outline-btn py-1 px-2 text-14">Read More</NuxtLink></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <div class="pt-3 pb-4">
      <div class="text-end pe-2"><button class="apply-now-close-btn text-brand" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-circle-xmark"></i></button></div>
      <h4 class="text-brand text-center fw-bold" style="margin-top:-20px;">Apply Now</h4>
      <div class="px-sm-4 px-2 pt-2 basic-form">
        <div class="mb-3">
          <label for="">Applicant name</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter applicant name">
        </div>
        <div class="mb-3">
          <label for="">Contact number</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter contact number">
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter email address">
        </div>
        <div class="mb-3">
          <label for="">LinkedIn URL</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter LinkedIn URL">
        </div>
        <div class="mb-3">
          <label for="">Twitter URL</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter Twitter URL">
        </div>
        <div class="mb-3">
          <label for="">GitHub URL</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter GitHub URL">
        </div>
        <div class="mb-3">
          <label for="">Portfolio URL</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter Portfolio URL">
        </div>
        <div class="mb-3">
          <label for="">Other website</label>
          <input type="text" class="form-control placeholder-font" placeholder="Enter website URL">
        </div>
        <div class="mb-4">
          <label for="">Application</label>
          <textarea rows="5" class="form-control placeholder-font" placeholder="Your cover letter/message sent to the employer"></textarea>
        </div>
        <div class="file-upload-content">
          <label>Resume upload</label>
          <div class="form-group custom-drop-file">
            <input type="file" class="form-control">
            <div class="d-flex align-items-center">
              <span class="text-brand file-upload-icon d-block"><i class="fa-solid fa-file-arrow-up"></i></span>
              <span class="d-block ps-2">Attach resume/CV</span>
            </div>
          </div>
        </div>
        <small class="text-gray">Maximum upload file size: 12 MB (PDF only)</small>
        <button class="rounded-fill-btn rounded-0 w-100 py-1 my-3">Apply now</button>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>
    <!-- <FrontendCareersApplyModal :apply-now-modal="'apply-now-modal'" :close-apply-now-modal="closeApplyNowModal" /> -->
  </div>
</template>

<script setup>
import {ref} from 'vue';
const selected=ref('')
const options = ref(['Most Recent', 'Last Month', 'All'])
</script>

<style scoped>
.career-bg{
  background-image: url('/images/frontend/careers/career-banner.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  height: 400px;
}
.career-header-img{
  margin-top: -218px;
}
.career-icon{
  height: 40px;
}
.vacancy-card{
  background-color: var(--purpleLighter);
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.filter-section-width{
  width: 60%;
}
@media(max-width:1199px){
  .filter-section-width{
  width: 80%;
}
  .career-card-title{
  font-size: 17px;
}
}
@media(max-width:991px){
  .filter-section-width{
  width: 100%;
}
  .career-bg{
    height: 300px;
  }
  .career-header-img{
  margin-top: -125px;
}
}
@media(max-width:767px){
  .career-bg{
    height: 280px;
  }
  .career-header-img{
  margin-top: -100px;
}
}
@media(max-width:480px){
  .career-icon{
  height: 30px;
}
  .career-card-title{
  font-size: 15px;
}
}
@media(max-width:424px){
  .career-bg{
    height: 280px;
  }
  .career-header-img{
  margin-top: -80px;
}
.career-icon{
  height: 25px;
}
}
.apply-now-close-btn {
  padding: 0;
  border: none;
  outline: none;
  line-height: 0;
  font-size: 25px;
  background: none;
}

.apply-now-close-btn:hover {
  color: var(--lime);
  transition: all 0.3s ease;
}

.custom-drop-file {
  position: relative;
  padding: 8px;
  background-color: rgba(164, 164, 164, 0.2);
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
}

.custom-drop-file input {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
}

.custom-drop-file p {
  margin: 0;
  color: #a4a4a4;
}

.file-upload-icon {
  line-height: 0;
  font-size: 18px;
}
</style>