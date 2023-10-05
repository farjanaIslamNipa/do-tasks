<template>
  <div class="login-bg">
    <div class="container">
      <h2 class="text-brand fw-bold text-center mb-4">Hi, Welcome Back!</h2>
      <div class="row justify-content-center">
        <div class="col-xl-9 col-lg-11 col-12">
          <div class="bg-white card-shadow rounded-3 py-md-5 py-4 px-lg-5 px-3">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="basic-form">
                  <div class="mb-4">
                    <label for="">Username</label>
                    <input class="form-control" type="text" placeholder="Enter your email address or phone number">
                  </div>
                  <div class="position-relative mb-2">
                    <label for="password" class="mb-0">Password</label>
                    <input id="password" :type="showPassword ? 'password' : 'text'" class="form-control" placeholder="Enter your password" />
                    <button type="button" class="btn visibility-icon" @click="showPassword=!showPassword">
                      <span v-if="showPassword" class="cursor-pointer eyeIcon"><i class="fas fa-eye-slash"></i></span>
                      <span v-else class="cursor-pointer eyeIcon"><i class="fas fa-eye"></i></span>
                    </button>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="checkbox">
                      <label><input class="remember-me-checkbox" type="checkbox" value=""><span class="ms-2 text-gray">Remember me</span></label>
                    </div>
                    <div>
                      <NuxtLink to="#" style="font-size: 15px" class="style-none"><span class="text-gray hover-brand">Forgot Password?</span></NuxtLink>
                    </div>
                  </div>
                  <div><NuxtLink to="#" class="rounded-fill-btn d-block text-center py-1 mt-4 rounded-2">Sign In</NuxtLink></div>
                  <p class="mb-0 mt-4">By proceeding, I agree to HiTasks's <span><NuxtLink to="#" class="text-brand hover-lime">Terms & Conditions, Community Guidelines,</NuxtLink></span> & <span><NuxtLink to="#" class="text-brand hover-lime">Privacy Policy</NuxtLink></span></p>
                  <div class="mt-4">
                    <hr>
                    <p class="mb-0">Don’t have an account an account? <span><NuxtLink to="/sign-up" class="text-lime fw-bold ms-xl-4 ms-lg-2 ms-0 hover-brand">Sign up</NuxtLink></span></p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-md-block d-none">
                <img class="img-fluid" src="/images/frontend/auth/login-img.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  
  const showPassword = ref(true)
  </script>
  
  <style scoped>
  .login-bg {
    background-image: url('/images/frontend/auth/login-bg.png');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    padding: 80px 0;
  }
  
  .remember-me-checkbox {
    cursor: pointer;
    accent-color: var(--brandColor);
  }
  
  .visibility-icon {
    position: absolute;
    top: 25px;
    right: 3px;
  }
  
  .eyeIcon {
    color: rgb(180, 180, 180);
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .eyeIcon:hover {
    color: var(--brandColor);
  }
  
  @media(max-width:786px){
    .login-bg{
      padding: 50px 0;
    }
  }
  </style>