<template>
<div class="post-task-form-height px-2 pt-2">
    <div class="task-form bg-white rounded-2 card-shadow">
      <h5 class="task-title px-3"><span class="fw-bold text-stroke">1</span> Let's start with the basics</h5>
      <div class="px-xl-3 px-0">
        <div class="pt-4">
          <label class="mb-1" for="">In a few words, what do you need done?</label>
          <input type="text" class="form-control placeholder-font" placeholder="e.g. Help washing my car">
        </div>
        <div class="py-sm-5 py-3">
          <p class="mb-1" for="">When do you need this done?</p>
          <div class="d-flex flex-wrap align-items-center pb-md-0 pb-3">
            <div>
              <client-only>
                <date-picker v-model="onDate" class="post-task-form-datepicker-input" placeholder="On Date" format="MM/dd/yyyy" />
              </client-only>
            </div>
            <div class="mx-2 my-2">
              <client-only>
                <date-picker v-model="beforeDate" class="post-task-form-datepicker-input" placeholder="Before Date" format="MM/dd/yyyy" />
              </client-only>
            </div>
            <label>
              <input v-model="flexible" class="flexible-checkbox custom-radio-or-check-input" type="radio" value="flexible" checked  />
              <div class="flexible-checkbox-label custom-radio-or-check-label">
                <div class="radio-or-check-content"><span>I am Flexible</span></div>
              </div>
            </label>
          </div>
        </div>
        <div class="certain-time-container">
          <div class="form-check custom-check-box mb-3">
            <input id="flexCheckDefault" v-model="certainTime" class="form-check-input" type="checkbox">
            <label class="form-check-label ms-2" for="flexCheckDefault">
              I need a certain time of day
            </label>
          </div>
          <div class="row">
            <div class="col-md-3 col-6">
              <div>
                <label>
                  <input v-model="timeSchedule" class="time-selector-checkbox custom-radio-or-check-input" type="radio" name="time-schedule" value="morning" />
                  <div class="time-selector-label custom-radio-or-check-label">
                    <div class="radio-or-check-content text-center">
                      <img v-if="timeSchedule === 'morning'" src="/images/frontend/post-task/morning-icon-white.svg" alt="">
                      <img v-else src="/images/frontend/post-task/morning-icon.svg" alt="">
                      <h6 class="mb-0">Morning</h6>
                      <p>Before 10 am</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div>
                <label>
                  <input v-model="timeSchedule" class="time-selector-checkbox custom-radio-or-check-input" type="radio" name="time-schedule" value="midday" />
                  <div class="time-selector-label custom-radio-or-check-label">
                    <div class="radio-or-check-content text-center">
                      <img v-if="timeSchedule === 'midday'" src="/images/frontend/post-task/midday-icon-white.svg" alt="">
                      <img v-else src="/images/frontend/post-task/midday-icon.svg" alt="">
                      <h6 class="mb-0">Midday</h6>
                      <p>10am - 2pm</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div>
                <label class="me-3">
                  <input v-model="timeSchedule" class="time-selector-checkbox custom-radio-or-check-input" type="radio" name="time-schedule" value="afternoon" />
                  <div class="time-selector-label custom-radio-or-check-label">
                    <div class="radio-or-check-content text-center">
                      <img v-if="timeSchedule==='afternoon'" src="/images/frontend/post-task/afternoon-icon-white.svg" alt="">
                      <img v-else src="/images/frontend/post-task/afternoon-icon.svg" alt="">
                      <h6 class="mb-0">Afternoon</h6>
                      <p>2pm - 6px</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div>
                <label>
                  <input v-model="timeSchedule" class="time-selector-checkbox custom-radio-or-check-input" type="radio" name="time-schedule" value="evening" />
                  <div class="time-selector-label custom-radio-or-check-label">
                    <div class="radio-or-check-content text-center">
                      <img v-if="timeSchedule==='evening'" src="/images/frontend/post-task/evening-icon-white.svg" alt="">
                      <img v-else src="/images/frontend/post-task/evening-icon.svg" alt="">
                      <h6 class="mb-0">Evening</h6>
                      <p>After 6pm</p>
                    </div>
                  </div>
                </label>
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

const certainTime =ref('')
const flexible =ref('')
const onDate =ref('')
const beforeDate =ref('')
const timeSchedule =ref('')
</script>

<style>
.v3dp__elements button:not(:disabled):hover span {
    background-color: var(--brandColor) !important;
    color: white !important;
}
.v3dp__elements button.current span {
    outline: 2px solid var(--brandColor) !important;
}
.v3dp__elements button.selected span {
  background-color: var(--brandColor) !important;
    color: white !important;
}
.flexible-checkbox-label {
  width: 150px;
  height: 40px;
}

.post-task-form-datepicker-input {
  width: 150px !important;
  height: 40px !important;
  background-color: #fff !important;
  border: 1px solid rgb(148, 146, 146) !important;
  border-radius: 5px !important;
  text-align: center;
  cursor: pointer;
}

.post-task-form-datepicker-input::placeholder {
  color: #424242 !important;
}

.post-task-form-datepicker-input input:focus {
  color: var(--brandColor) !important;
  border: 1px solid var(--brandColor) !important;
  outline: none !important;
}

.custom-check-box .form-check-input {
  margin-top: 2px;
  height: 1.2em;
  width: 1.2em;
  border-radius: 3px;
  cursor: pointer;
}

.custom-check-box .form-check-input:focus {
  border: 1px solid rgb(148, 146, 146);
}

.time-selector-label {
  width: 150px;
  height: 110px;
}


.certain-time-container {
  margin-right: 140px;
}


@media(max-width:1399px) {
  .certain-time-container {
    margin-right: 20px;
  }

}

@media(max-width:1199px) {
  .certain-time-container {
    margin-right: 10px;
  }

  .time-selector-label {
    width: 130px;
    height: 110px;
  }
}

@media(max-width:991px) {
  .certain-time-container {
    margin-right: 100px;
  }

  .time-selector-label {
    width: 130px;
    height: 110px;
  }
}

@media(max-width:767px) {
  .flexible-checkbox-label {
    width: 135px;
  }

  .post-task-form-datepicker-input input {
    width: 135px !important;
  }

  .certain-time-container {
    margin-right: 32px;
  }

  .time-selector-label {
    width: 210px;
    height: 110px;
  }

}

@media(max-width:525px) {
  .certain-time-container {
    margin-right: 10px;
  }

  .time-selector-label {
    width: 200px;
    height: 110px;
  }

}

@media(max-width:488px) {
  .certain-time-container {
    margin-right: 10px;
  }

  .time-selector-label {
    width: 170px;
    height: 110px;
  }

}

@media(max-width:424px) {
  .certain-time-container {
    margin-right: 10px;
  }

  .time-selector-label {
    width: 155px;
    height: 110px;
  }

}

@media(max-width:374px) {
  .flexible-checkbox-label {
    width: 130px;
  }

  .post-task-form-datepicker-input input {
    width: 130px !important;
  }

  .certain-time-container {
    margin-right: 10px;
  }

  .time-selector-label {
    width: 135px;
    height: 110px;
  }

}
</style>