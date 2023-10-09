<template>
    <div class="py-md-5 py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <UserSettingSidebar />
                </div>
                <div class="col-md-8">
                    <div class="bg-white rounded card-shadow py-4 px-4">
                        <h4 class="text-brand text-capitalize">Account</h4>
                        <div class="basic-form">
                            <div class="d-sm-flex d-block">
                                <div class="mb-3 w-100 me-sm-3 me-0">
                                    <label for="">First name</label>
                                    <input type="text" class="form-control" placeholder="Enter your first name">
                                </div>
                                <div class="mb-3 w-100">
                                    <label for="">Last name</label>
                                    <input type="text" class="form-control" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="mb-3 w-100">
                                <label for="">Tagline</label>
                                <input type="text" class="form-control" placeholder="Mini bio">
                            </div>
                            <div class="mb-3 w-100">
                                <label for="">Address</label>
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
                            <div class="mb-3">
                                <label for="">Email</label>
                                <input type="email" class="form-control" placeholder="Enter your email address or phone number">
                            </div>
                            <div class="mb-3">
                                <label for="">Date of Birth</label>
                                <client-only>
                                    <date-picker v-model="onDate" class="form-control" placeholder="Select your date of birth" format="MM/dd/yyyy" />
                                </client-only>
                            </div>
                            <div class="mb-3">
                                <label for="">ABN</label>
                                <input type="text" class="form-control" placeholder="Enter ABN">
                            </div>
                            <div class="mb-3">
                                <label for="">Description</label>
                                <textarea class="form-control" rows="4" placeholder="Enter description"></textarea>
                            </div>
                            <div class="position-relative mb-3 pt-2">
                                <label for="" class="mb-1">On HiTasks I want to</label>
                                <div>
                                <label for="things-done" class="main-goal-radio-container">
                                    <input id="things-done" class="main-goal-radio-one-input" type="radio" name="main-goal" />
                                    <div class="main-goal-radio-one-content">
                                    <div style="line-height: 1.2;" class="text-center">
                                        <span class="d-block text-lime"><i class="fa-solid fa-check-to-slot"></i></span>
                                        <span>Get things done</span>
                                    </div>
                                    </div>
                                </label>

                                <label for="earn-money" class="main-goal-radio-container">
                                    <input id="earn-money" class="main-goal-radio-one-input" type="radio" name="main-goal" />
                                    <div class="main-goal-radio-one-content">
                                    <div class="text-center" style="line-height: 1.2;">
                                        <span class="d-block text-lime"><i class="fa-solid fa-dollar-sign"></i></span>
                                        <span>Earn money</span>
                                    </div>
                                    </div>
                                </label>
                                </div>
                            </div>
                            <div class="mt-4">
                                <button class="btn rounded-fill-btn rounded py-2">Save Changes</button>
                            </div>
                            <hr>
                            <div class="mt-5">
                                <h4 class="fw-bold text-gray">Mobile Number</h4>
                                <h6 class="">We will send you a verification code</h6>
                                <div class="basic-form d-flex align-items-center mb-4">
                                    <input type="text" class="form-control mobile-number-input" >
                                    <button type="submit" class="ms-2 py-2 disabled-send-btn">Send</button>
                                </div>
                                <p class="mb-5">Verifying your mobile number helps us know you're a genuine human! We won't show it to anyone or sell it on to any 3rd party, it's just for us to send you some good stuff.</p>
                            </div>
                            <hr>
                            <div class="mb-3 pt-2">
                                <button class="btn btn-danger">Deactivate my account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const address = ref('')
const street = ref('')
const suburb = ref('')
const state = ref('')
const zip_code = ref('')
const onDate = ref('')

const togglePasswordView = () => {
  const loginPassword = document.getElementById('password');
  loginPassword.type = loginPassword.type === 'password' ? 'text' : 'password';
  loginPassword.type === 'password' ? (this.showPassword = '<i class="fas fa-eye-slash"></i>') : (this.showPassword = '<i class="fas fa-eye"></i>');
}

const getAddressData = (addressData, states) => {
  address = addressData;
  allState = states;
  street = addressData.route;
  suburb = addressData.locality;
  state = addressData.administrative_area_level_1;
  zip_code = addressData.postal_code;
}
</script>

<style scoped>
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
    .main-goal-radio-container {
        position: relative;
        margin: 5px;
        border: 1px solid rgb(218, 217, 217);
        border-radius: 5px;
        box-sizing: border-box;
        }

    .main-goal-radio-container .main-goal-radio-one-content {
        width: 160px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 25px;
        transition: .3s ease;
        }

    .main-goal-radio-container .main-goal-radio-one-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 140px;
        height: 100px;
        opacity: 0;
        cursor: pointer;
        border-radius: 5px;
        }

    .main-goal-radio-one-input[type=radio]:checked ~ .main-goal-radio-one-content {
        background-color: var(--brandColor);
        color: white;
        border-radius: 5px;
    }
    .mobile-number-input{
        max-width: 300px;
    }
    .disabled-send-btn{
        background-color: var(--purpleLight);
        border: none;
        border-radius: 30px;
        padding: 8px 25px;
        color: white;
    }
</style>