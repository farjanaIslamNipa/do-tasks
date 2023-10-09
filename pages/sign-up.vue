<template>
 <div class="sign-up-bg py-sm-5 py-4">
    <div class="container">
      <h3 v-if="step === 1" class="text-brand fw-bold text-center mb-4 text-capitalize">create a new account</h3>
      <div class="row justify-content-center">
        <div class="col-xl-9 col-lg-11 col-12">
          <div class="bg-white card-shadow rounded-3 py-md-5 py-4 px-md-5 px-3">
            <div class="row justify-content-center align-items-center">
              <div class="col-xl-9 col-lg-10">
                <div v-if="step === 1" class="basic-form">
                  <div class="mb-4">
                    <label class="" for="">Email</label>
                    <input class="form-control" type="text" placeholder="Enter your email address or phone number">
                  </div>
                  <div class="position-relative mb-5">
                    <label for="password" class="mb-0">Password</label>
                    <input id="password" :type="!showPassword ? 'password' : 'text'" class="form-control" placeholder="Enter your password" />
                    <button type="button" class="btn visibility-icon" @click="showPassword=!showPassword">
                      <span v-if="!showPassword" class="cursor-pointer eyeIcon"><i class="fas fa-eye-slash"></i></span>
                      <span v-else class="cursor-pointer eyeIcon"><i class="fas fa-eye"></i></span>
                    </button>
                  </div>
                  <div>
                    <button @click="step++" class="sign-up-btn d-block text-center py-2 rounded-2 w-100">Sign Up</button>
                  </div>
                  <p class="mb-0 mt-4">By proceeding, I agree to HiTasks's <span>
                      <NuxtLink to="/community-guidelines" class="text-brand hover-lime">Terms & Conditions, Community Guidelines,
                      </NuxtLink>
                    </span> & <span>
                      <NuxtLink to="#" class="text-brand hover-lime">Privacy Policy</NuxtLink>
                    </span></p>
                  <div class="mt-4 text-center pt-1">
                    <hr>
                    <p class="mb-0">Already have an account? <span>
                        <NuxtLink to="/login" class="text-lime fw-bold ms-xl-4 ms-lg-2 ms-0 hover-brand">Login
                        </NuxtLink>
                      </span></p>
                  </div>
                </div>
                <div v-if="step === 2" class="basic-form">
                  <div class="d-flex mb-3">
                    <div class="w-25"><span class="sign-up-back-btn" @click="goBack"><i class="fa-solid fa-chevron-left"></i></span></div>
                    <div class="w-75 ms-5">
                      <h4 class="text-brand fw-bold mb-4 text-capitalize">Set up your account</h4>
                    </div>
                  </div>
                  <div class="mb-5">
                    <label for="">Select your region</label>
                    <input class="form-control" type="text" placeholder="Enter your email address or phone number">
                  </div>
                  <h5 class="text-brand fw-bold my-4 text-center text-capitalize">Create your Profile</h5>
                  <div class="position-relative mb-3">
                    <label for="" class="mb-0">First Name</label>
                    <input class="form-control" type="text" placeholder="Enter first name">
                  </div>
                  <div class="position-relative mb-3">
                    <label for="" class="mb-0">Last Name</label>
                    <input class="form-control" type="text" placeholder="Enter last name">
                  </div>
                  <div class="position-relative mb-4">
                    <label for="" class="mb-0">Address</label>
                    <vue-google-autocomplete
                      id="map"
                      ref="address"
                      class="form-control"
                      placeholder="Please type your address"
                      country="au"
                      @placechanged="getAddressData"
                    >
                  </vue-google-autocomplete>
                    <div v-if="street || suburb || state || zip_code">
                      <p class="text-lime text-18 text-center font-weight-bold mb-3 mt-4"><span class="blink-text"><i class="fa-solid fa-circle-info"></i></span> Please modify the following address fields, if there anything wrong.</p>
                      <div class="d-flex">
                        <div class="form-group w-100 mb-4 me-4">
                          <label class="booking-label" for="booking-street">Street</label>
                          <input v-model="street" type="text" name="street" class="form-control" placeholder="Enter street name">
                          <!-- <p class="mb-0 text-danger">This field is required</p> -->
                        </div>
                        <div class="form-group w-100 mb-4">
                          <label class="booking-label" for="booking-suburb">Suburb</label>
                          <input v-model="suburb" type="text" name="suburb" class="form-control" placeholder="Enter suburb">
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="form-group w-100 mb-4 me-4 state-select">
                            <label class="booking-label" for="booking-state">State</label>
                            <input v-model="state" type="text" class="form-control" placeholder="Enter state name">
                        </div>
                        <div class="form-group w-100 mb-4">
                            <label class="booking-label" for="booking-zip">Zip Code</label>
                            <input v-model="zip_code" type="text" class="form-control" name="zip_code" placeholder="Enter zip code">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="position-relative mb-3">
                    <label for="" class="mb-0">What is your main goal on HiTasks?</label>
                    <div>
                      <label for="feature1" class="main-goal-radio-container">
                        <input id="feature1" class="main-goal-radio-one-input" type="radio" name="main-goal" />
                        <div class="main-goal-radio-one-content">
                          <div style="line-height: 1.2;" class="text-center">
                            <span class="d-block text-lime"><i class="fa-solid fa-check-to-slot"></i></span>
                            <span>Get things done</span>
                          </div> 
                        </div>
                      </label>

                      <label for="feature2" class="main-goal-radio-container">
                        <input id="feature2" class="main-goal-radio-one-input" type="radio" name="main-goal" />
                        <div class="main-goal-radio-one-content">
                          <div class="text-center" style="line-height: 1.2;">
                            <span class="d-block text-lime"><i class="fa-solid fa-dollar-sign"></i></span>
                            <span>Earn money</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="ms-1 d-flex align-items-start">
                    <input class="confirm-checkbox mt-1" type="checkbox">
                    <label class="ms-2">
                      I do not want to receive product updates or marketing material
                    </label>
                  </div>

                  <div class="mt-4">
                    <NuxtLink to="/profile" class="rounded-fill-btn rounded-2 d-block text-center py-1">Complete my account</NuxtLink>
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
import {ref} from 'vue'
  const step = ref(1)
  const showPassword = ref(false)
  const address = ref('')
  const suburb = ref('')
  const state = ref('')
  const zip_code = ref('')

  const getAddressData = (addressData, states) => {
    address.value = addressData;
    allState.value = states;
    street.value = addressData.route;
    suburb.value = addressData.locality;
    state.value = addressData.administrative_area_level_1;
    zip_code.value = addressData.postal_code;
  }

  const goBack = () => {
    step.value--
  }
</script>

<style scoped>
.sign-up-bg {
  background-image: url('/images/frontend/auth/login-bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
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

#eyeIcon {
  color: rgb(180, 180, 180);
  font-size: 14px;
  transition: all 0.3s ease;
}

#eyeIcon:hover {
  color: var(--brandColor);
}

.sign-up-btn {
  background-color: var(--lime);
  border: 1px solid var(--lime);
  color: white;
  padding: 6px 20px !important;
  transition: all 0.3s ease;
  font-weight: bold;
}

.sign-up-btn:hover {
  background-color: white;
  border: 1px solid var(--lime);
  color: var(--brandColor);
  padding: 6px 20px !important;
}

.sign-up-back-btn {
  font-size: 20px;
  color: var(--brandColor);
  cursor: pointer;
  transition: all 0.3s ease;
}

.sign-up-back-btn:hover {
  color: var(--lime);
}
.main-goal-radio-container {
  position: relative;
  margin: 5px;
  border: 1px solid rgb(218, 217, 217);
  border-radius: 5px;
  box-sizing: border-box;
}

.main-goal-radio-container .main-goal-radio-one-content {
  width: 160px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  transition: .3s ease;
  cursor: pointer;
}

.main-goal-radio-container .main-goal-radio-one-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  /* height: 100px; */
  opacity: 0;
  cursor: pointer;
}

.main-goal-radio-one-input[type=radio]:checked ~ .main-goal-radio-one-content {
  background-color: var(--brandColor);
  color: white;
}

.eyeIcon {
  color: rgb(180, 180, 180);
  font-size: 14px;
  transition: all 0.3s ease;
}

.eyeIcon:hover {
  color: var(--brandColor);
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

.blink-text {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

@media(max-width:786px) {
  .sign-up-bg {
    padding: 50px 0;
  }
}
input[type=checkbox] {
  accent-color: var(--brandColor);
}
</style>