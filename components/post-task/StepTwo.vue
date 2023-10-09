<template>
  <div class="post-task-form-height px-2">
    <div class="bg-white rounded-2 card-shadow mt-5 pt-4 pb-5 px-4">
      <h5 class="task-title px-3"><span class="fw-bold text-brand me-2 text-stroke">2</span>Tell us where</h5>
      <div class="px-3">
        <div class="pt-4 pb-3">
          <p class="mb-2" for="">Is this a removals task?</p>
          <div class="d-flex align-items-center">
            <label class="me-2">
              <input v-model="removalTask" class="yes-no-checkbox custom-radio-or-check-input" name="removal-task" type="radio" value="yes" />
              <div class="custom-radio-or-check-label">
                <div class="radio-or-check-content"><p class="mb-0">Yes</p></div>
              </div>
            </label>
            <label>
              <input v-model="removalTask" class="yes-no-checkbox custom-radio-or-check-input" name="removal-task" type="radio" value="no" />
              <div class="custom-radio-or-check-label">
                <div class="radio-or-check-content"><p class="mb-0">No</p></div>
              </div>
            </label>
          </div>
        </div>
        <div v-if="removalTask === 'yes'">
          <div class="pt-4 pb-4">
            <label for="">Pickup suburb</label>
            <input type="text" class="form-control" placeholder="Enter suburb or postcode">
          </div>
          <div class="pb-3">
            <label for="">Drop-off suburb <small class="text-gray">(optional)</small></label>
            <input type="text" class="form-control" placeholder="Enter suburb or postcode">
          </div>
        </div>
        <div v-if="removalTask === 'no'" class="pt-2">
          <label class="me-2">
            <input v-model="removalTaskType" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="removal-task-type" value="in-person" />
            <div class="removal-task-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <span class="custom-radio-or-check-icon"><i class="fa-solid fa-person"></i></span>
                <h6 class="mb-1 mt-0">In-person</h6>
                <p>Select this if you need the Tasker physically there</p>
              </div>
            </div>
          </label>
          <label>
            <input v-model="removalTaskType" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="removal-task-type" value="online" />
            <div class="removal-task-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <span style="font-size:28px;" class="custom-radio-or-check-icon"><i class="fa-solid fa-mobile-screen"></i></span>
                <h6 class="mb-1 mt-0">Online</h6>
                <p>Select this if the Tasker can do it from home</p>
              </div>
            </div>
          </label>
          <div v-if="removalTaskType === 'in-person'" class="pt-4">
            <label class="mb-1" for="">Where do you need this done?</label>
            <input type="text" class="form-control placeholder-font" placeholder="Enter address">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const removalTask = ref('')
const removalTaskType = ref('')
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

</style>