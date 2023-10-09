<template>
  <div class="row">
    <div class="col-md-8 px-0">
      <div class="listing-form-view-height px-2 py-2">
        <div class="bg-white basic-form card-shadow rounded pt-4 pb-4 px-4">
            <h5 class="text-brand fw-bold text-18">Choose where you will deliver this service</h5>
            <div class="pt-2 d-md-none d-block">
                <CreateListingHints />
                <CreateListingHints />
                <CreateListingAvoid />
            </div>
            <div class="mb-4 mt-4">
                <label class="me-2">
                <input v-model="deliverType" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="removal-task-type" value="in-person" />
                <div class="removal-task-checkbox-label custom-radio-or-check-label">
                    <div class="radio-or-check-content text-center">
                    <span class="custom-radio-or-check-icon"><i class="fa-solid fa-person"></i></span>
                    <h6 class="mb-1 mt-0">In-person</h6>
                    <p>Select this if you need the Tasker physically there</p>
                    </div>
                </div>
                </label>
                <label>
                <input v-model="deliverType" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="removal-task-type" value="online" />
                <div class="removal-task-checkbox-label custom-radio-or-check-label">
                    <div class="radio-or-check-content text-center">
                    <span style="font-size:28px;" class="custom-radio-or-check-icon"><i class="fa-solid fa-mobile-screen"></i></span>
                    <h6 class="mb-1 mt-0">Online</h6>
                    <p>Select this if the Tasker can do it from home</p>
                    </div>
                </div>
                </label>
            </div>
            <div v-if="deliverType === 'in-person'">
                <div class="mb-4 position-relative">
                    <div class="d-flex align-items-center">
                        <p class="mb-1 fw-bold">I will serve customers within</p>
                        <div style="width:90px" class="bg-purple-lighter px-3 py-1 rounded ms-2 text-center">
                            <span class="text-brand text-18">{{ rangeInputValue }}</span><span>km</span>
                        </div>
                    </div>
                    <div class="range-input">
                        <input v-model="rangeInputValue" class="range" type="range" min="0" max="1000">
                    </div>
                </div>
                <div class="mb-5">
                    <label class="fw-bold" for="">From my location</label>
                    <vue-google-autocomplete
                        id="map"
                        ref="address"
                        class="form-control"
                        placeholder="Please type your address"
                        country="au"
                        @placechanged="getAddressData"
                        >
                    </vue-google-autocomplete>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="pt-2 d-md-block d-none">
        <CreateListingHints />
        <CreateListingHints />
        <CreateListingAvoid />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const rangeInputValue = ref(5)
const address = ref('')
const deliverType = ref('')

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
.custom-radio-or-check-label {
  width: 100px;
  height: 40px;
}

.removal-task-checkbox-label {
  width: 230px;
  height: 130px;
}

.custom-radio-or-check-icon {
  font-size: 30px;
  line-height: 1;
}
.range-input input {
  -webkit-appearance:none;
  width:250px;
  height:2px;
  background: var(--brandColor);
  border:2px solid gray;
  border:none;
  outline:none;
}
.range-input input::-webkit-slider-thumb {
  -webkit-appearance:none;
  width:20px;
  height:20px;
  background:#eee;
  border:2px solid var(--brandColor);
  border-radius:50%;
}
.range-input input::-webkit-slider-thumb:hover {
  background: var(--brandColor);
}
</style>