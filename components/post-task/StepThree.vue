<template>
  <div class="task-form bg-white rounded-2 card-shadow pt-4 mb-4">
    <h5 class="task-title px-3"><span class="fw-bold text-brand me-2 text-stroke">3</span>Provide more details</h5>
    <div class="px-sm-3 px-0">
      <div>
        <div class="pt-sm-4 pt-2">
          <p class="mb-2" for="">What are you moving?</p>
          <label>
            <input v-model="removalTaskItem" class="custom-radio-or-check-input" type="radio" name="moving-type" value="a few items" />
            <div class="moving-type-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <span class="moving-type-icon custom-radio-or-check-icon"><i class="fa-solid fa-boxes-stacked"></i></span>
                <h6 class="mb-1 moving-type-value">A few items</h6>
              </div>
            </div>
          </label>
          <label class="mx-sm-2 mx-0">
            <input v-model="removalTaskItem" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="moving-type" value="apartment" />
            <div class="moving-type-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <span class="moving-type-icon custom-radio-or-check-icon"><i class="fa-solid fa-building"></i></span>
                <h6 class="mb-1 moving-type-value">Apartment</h6>
              </div>
            </div>
          </label>
          <label>
            <input v-model="removalTaskItem" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="moving-type" value="house" />
            <div class="moving-type-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <span class="moving-type-icon custom-radio-or-check-icon"><i class="fa-solid fa-house"></i></span>
                <h6 class="mb-1 moving-type-value">House</h6>
              </div>
            </div>
          </label>
        </div>
        <div class="py-4">
          <p class="mb-2" for="">Are there stairs?</p>
          <label class="me-2">
            <input v-model="hasStairs" class="custom-radio-or-check-input" type="radio" name="has-stairs" value="no" />
            <div class="has-stairs-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <h6>No</h6>
              </div>
            </div>
          </label>
          <label class="me-2">
            <input v-model="hasStairs" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="has-stairs" value="at pickup" />
            <div class="has-stairs-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <h6>At Pickup</h6>
              </div>
            </div>
          </label>
          <label class="me-2">
            <input v-model="hasStairs" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="has-stairs" value="at delivery" />
            <div class="has-stairs-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <h6>At Delivery</h6>
              </div>
            </div>
          </label>
          <label>
            <input v-model="hasStairs" class="removal-task-checkbox custom-radio-or-check-input" type="radio" name="has-stairs" value="both places" />
            <div class="has-stairs-checkbox-label custom-radio-or-check-label">
              <div class="radio-or-check-content text-center">
                <h6>Both Places</h6>
              </div>
            </div>
          </label>
        </div>
        <div class="">
          <p class="mb-2">What key items are you moving?</p>
          <textarea v-model="keyDetails" class="form-control" rows="4"></textarea>
        </div>
      </div>

      <div v-if="removal === 'no'">
        <div>
          <h5 class="task-title px-3"><span style="font-size:28px;" class="fw-bold text-brand me-2">3</span>Provide more details</h5>
          <div class="">
            <p class="mb-2">What are the details?</p>
            <textarea v-model="keyDetails" class="form-control placeholder-font" rows="4" placeholder="write a summery of the key details"></textarea>
          </div>
        </div>
      </div>
      <!-- <div>
        <h5 class="task-title px-3"><span style="font-size:28px;" class="fw-bold text-brand me-2">4</span>Suggest your budget</h5>
        <div class="">
          <p class="mb-2">What is your budget? </p>
          <input v-model="budget" type="text" class="form-control placeholder-font" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const removalTaskItem = ref('')
const keyDetails = ref('')
const hasStairs = ref('')

</script>

<style scoped>
.moving-type-checkbox-label{
  width: 180px;
  height: 100px;
}
.has-stairs-checkbox-label{
  width: 150px;
  height: 40px;
}
.moving-type-icon {
  font-size: 30px;
  line-height: 1;
}
@media(max-width:1199px) {
  .moving-type-checkbox-label{
  width: 150px;
  height: 100px;
}
.has-stairs-checkbox-label{
  width: 110px;
}
}
@media(max-width:767px) {
  .moving-type-checkbox-label{
  width: 110px;
  height: 80px;
}
.has-stairs-checkbox-label{
  width: 150px;
}
.moving-type-icon {
  font-size: 22px;
}
.moving-type-value{
  margin-top: 0 !important;
}
}
@media(max-width:472px) {
  .moving-type-checkbox-label{
  height: 70px;
}
.has-stairs-checkbox-label{
  width: 130px;
}
.moving-type-icon {
  font-size: 20px;
}
}
@media(max-width:375px) {
  .moving-type-checkbox-label{
  width: 88px;
}
.has-stairs-checkbox-label{
  width: 126px;
}
.moving-type-icon {
  font-size: 20px;
}
.moving-type-value{
  margin-top: 0 !important;
  font-size: 15px;
}
}
</style>