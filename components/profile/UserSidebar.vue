
import { NuxtLink } from '#build/components';
<template>
    <div class="user-profile-sticky-sidebar">
      <div class="text-center border-box py-4 px-2">
        <img class="user-img" src="/images/frontend/user-profile/profile.png" alt="">
        <h5 class="text-brand fw-bold mt-2 mb-1">Deepankar R</h5>
        <p class="text-lime"><span class="text-12 pe-2"><i class="fa-solid fa-circle"></i></span>I am online</p>
        <div>
          <div class="d-flex">
            <label for="as-tasker" class="checkbox-container w-100">
              <input id="as-tasker" class="user-checkbox-input" type="radio" checked name="user-checkbox" />
              <div class="user-checkbox-content tasker-checkbox-content">
                <span>As a Tasker</span>
              </div>
            </label>
    
            <label for="as-poster" class="checkbox-container w-100">
              <input id="as-poster" class="user-checkbox-input" type="radio" name="user-checkbox" />
              <div class="user-checkbox-content poster-checkbox-content">
                <span>As a Poster</span>
              </div>
            </label>
          </div>
          <div class="d-flex w-100">
            <div class="w-100">
              <div class="text-end py-3">
                <span class="text-warning text-15"><i class="fa-solid fa-star"></i></span>
                <span class="text-warning text-15"><i class="fa-solid fa-star"></i></span>
                <span class="text-warning text-15"><i class="fa-solid fa-star"></i></span>
                <span class="text-warning text-15"><i class="fa-solid fa-star"></i></span>
                <span class="text-warning text-15"><i class="fa-solid fa-star"></i></span>
              </div>
              <div class="text-end">
                <h6 class="fw-bold mb-1 text-15">7 reviews</h6>
                <h6 class="fw-bold mb-1 text-15">94% Completion rate</h6>
                <small class="text-gray text-15">64 Completed tasks</small>
              </div>
            </div>
            <div class="w-100">
              <div class="text-end py-2 pe-1">
                <div>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-15 d-inline-block ms-2 fw-bold text-gray">7</span>
                </div>
                <div>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-warning text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-15 d-inline-block ms-2 fw-bold text-gray">7</span>
                </div>
                <div>
                  <span class="text-light-gray text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-light-gray text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-light-gray text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-15 d-inline-block ms-2 fw-bold text-gray">0</span>
                </div>
                <div>
                  <span class="text-light-gray text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-light-gray text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-15 d-inline-block ms-2 fw-bold text-gray">0</span>
                </div>
                <div>
                  <span class="text-light-gray text-10"><i class="fa-solid fa-star"></i></span>
                  <span class="text-15 d-inline-block ms-2 fw-bold text-gray">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center my-5">
          <button class="rounded-fill-btn py-1">Request a Quote</button>
        </div>
        <div class="text-start">
          <div class="d-flex justify-content-center">
            <table>
              <tbody>
                <tr>
                  <td class="w-50" style="vertical-align:top">
                    <img src="/images/frontend/user-profile/location-icon.svg" alt="">
                    <span class="text-light-gray d-inline-block ms-1">From</span>
                  </td>
                  <td class="w-50">Brighton-Le-Sands NSW, Australia</td>
                </tr>
                <tr>
                  <td class="w-50" style="vertical-align:top">
                    <img src="/images/frontend/user-profile/profile-icon.svg" alt="">
                    <span class="text-light-gray d-inline-block ms-1">Member since</span>
                  </td>
                  <td class="w-50">5th Jun 2015</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="mt-4 border-box py-4 px-2">
        <h6 class="text-uppercase text-brand">Description</h6>
        <p class="mb-0">We are moving, cleaning and gardening service providers in Melbourne, Australia, and based out of East Melbourne. Comprehensive solution to all your cleaning and relocation needs. </p>
      </div>
      <div class="mt-4 border-box py-4 px-2">
        <h6 class="text-uppercase text-brand">BADGES</h6>
        <div class="d-flex align-items-center pt-3">
          <img class="badge-icon" src="/images/frontend/user-profile/vaccination-icon.svg" alt="">
          <h6 class="mb-0 ms-3">COVID-19 Vaccination</h6>
        </div>
        <div class="d-flex align-items-center pt-3">
          <img class="badge-icon" src="/images/frontend/user-profile/digital-id-icon.svg" alt="">
          <h6 class="mb-0 ms-3">Digital iD</h6>
        </div>
        <div class="d-flex align-items-center pt-3">
          <img class="badge-icon" src="/images/frontend/user-profile/payment-method-icon.svg" alt="">
          <h6 class="mb-0 ms-3">Payment Method</h6>
        </div>
        <div class="d-flex align-items-center pt-3">
          <img class="badge-icon" src="/images/frontend/user-profile/phone-icon.svg" alt="">
          <h6 class="mb-0 ms-3">Mobile</h6>
        </div>
        <div class="mt-4 mb-2">
          <NuxtLink to="#" class="badge-learn-more-btn">Learn More</NuxtLink>
        </div>
      </div>
      <div class="mt-4 border-box py-4 px-2 mb-4">
        <h6 class="text-uppercase text-brand mb-3">SKILLS</h6>
        <div class="d-flex flex-wrap">
          <h6 class="skill-badge mx-1">End of Lease Cleaning</h6>
          <h6 class="skill-badge mx-1">Moving</h6>
          <h6 class="skill-badge mx-1">General Cleaning</h6>
          <h6 class="skill-badge mx-1">Gardening</h6>
          <h6 class="skill-badge mx-1">Cleaning</h6>
          <h6 class="skill-badge mx-1">Single item moving</h6>
          <h6 class="skill-badge mx-1">Spring Cleaning</h6>
        </div>
        <div class="language-section-border my-4 pt-4 pb-3">
          <h6 class="text-uppercase text-brand mb-3">LANGUAGES</h6>
          <div class="d-flex flex-wrap">
            <h6 class="mx-1 fw-bold">English</h6>
          </div>
        </div>
        <h6 class="text-uppercase text-brand mb-3">TRANSPORTATION</h6>
        <div class="d-flex flex-wrap">
          <h6 class="skill-badge mx-1">Car</h6>
          <h6 class="skill-badge mx-1">Truck</h6>
          <h6 class="skill-badge mx-1">Bicycle</h6>
        </div>
      </div>
      <div class="pb-4 text-end ">
        <NuxtLink to="/user/update-profile" class="text-brand text-underline"><span><i class="fa-regular fa-pen-to-square"></i></span> Update profile</NuxtLink>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.user-img {
      height: 120px;
      width: 120px;
      object-fit: cover;
      border-radius: 50%;
    }
    
    
    
    .tasker-checkbox-content{
      border-radius: 20px 0 0 0;
      background-color: var(--purpleLighter);
      color: var(--brandColor);
    }
    .poster-checkbox-content{
      border-radius: 0 20px 0 0;
      background-color: var(--purpleLighter);
      color: var(--brandColor);
    }
    .checkbox-container {
      position: relative;
      height: 40px;
      box-sizing: border-box;
    }
    
    .checkbox-container .user-checkbox-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 25px;
      transition: .3s ease;
    }
    
    .checkbox-container .user-checkbox-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 100px;
      opacity: 0;
      cursor: pointer;
    }
    
    .user-checkbox-input[type=radio]:checked ~ .user-checkbox-content {
      background-color: var(--brandColor);
      color: white;
    }
    
    @keyframes slidein {
      from {
        margin-top: 100%;
        width: 300%;
      }
    
      to {
        margin: 0%;
        width: 100%;
      }
    }
    /* .user-profile-sticky-sidebar{
      position: fixed;
      top: 80px;
      z-index: 99999;
    } */
    .border-box{
      border: 1px solid rgb(240, 239, 239);
    }
    .badge-learn-more-btn{
      background-color: var(--purpleLighter);
      border-radius: 30px;
      color: var(--brandColor);
      font-weight: bold;
      padding: 10px 20px;
    }
    .skill-badge{
      border: 1px solid var(--purpleLight);
      border-radius: 30px;
      padding: 5px 10px;
      margin-bottom: 10px;
    }
    .language-section-border{
      border-top: 1px solid var(--purpleLight);
      border-bottom: 1px solid var(--purpleLight);
    }
</style>