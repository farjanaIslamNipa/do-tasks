<template>
  <div class="pt-md-5 pt-2 mb-5">
    <div v-if="step!==5" class="container">
      <div class="col-lg-9 ms-auto ps-4"><h2 class="text-brand fw-bold mb-3">Post your task</h2></div>
      <div class="row justify-content-center">
        <div class="col-lg-3 col-12 text-center">
          <div class="d-lg-block d-none pt-2">
            <AppProgressBar :step-bar="stepBar" :step="step" />
          </div>
          <div class="d-lg-none d-block text-underline fw-bold text-lime"><h6>Step <span>{{ step }}</span>/4</h6></div>
        </div>
        
        <div class="col-lg-9 col-12">
          <KeepAlive>
            <component :is="currentComponent" />
          </KeepAlive>
          <div v-if="step === 1" class="text-center mt-4">
            <button class="rounded-fill-btn py-md-2 py-1 w-75" @click="goNext()">Next</button>
          </div>
          <div v-else class="d-flex justify-content-between">
              <button class="rounded-outline-btn py-md-2 py-1 px-5 mx-2" @click="goBack()">Back</button>
              <button class="rounded-fill-btn py-md-2 py-1 px-5 mx-2" @click="goNext()">{{ step === 4 ? 'Submit' : 'Next' }}</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step===5" class="container">
      <div class="bg-white basic-form card-shadow rounded pt-5 pb-5 px-4 text-center mb-5">
          <img src="/images/frontend/listing/success-img.png" alt="">
          <h3 class="mt-4">Task Created Successfully</h3>
          <div class="d-flex gap-2 item-content-center justify-content-center mt-4 pb-4">
              <NuxtLink to="/" class="rounded-outline-btn py-1">Go to Home</NuxtLink>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, shallowRef} from 'vue'
import PostTaskStepOne from '@/components/post-task/StepOne.vue'
import PostTaskStepTwo from '@/components/post-task/StepTwo.vue'
import PostTaskStepThree from '@/components/post-task/StepThree.vue'
import PostTaskStepFour from '@/components/post-task/StepFour.vue'

const currentComponent = shallowRef(PostTaskStepOne)

const step = ref(1)
const stepBar = ref([
      {
          id: 1,
          name: 'Title & Date'
      },
      {
          id: 2,
          name: 'Location'
      },
      {
          id: 3,
          name: 'Details'
      },
      {
          id: 4,
          name: 'Budget'
      }
])

const goNext = () => {
  step.value++
  if(step.value === 2){
        currentComponent.value = PostTaskStepTwo
    }
    if(step.value === 3){
        currentComponent.value = PostTaskStepThree
    }
    if(step.value === 4){
        currentComponent.value = PostTaskStepFour
    }
}

const goBack = () => {
  step.value--
  if(step.value === 1){
        currentComponent.value = PostTaskStepOne
    }
  if(step.value === 2){
        currentComponent.value = PostTaskStepTwo
    }
  if(step.value === 3){
        currentComponent.value = PostTaskStepThree
    }
}
</script>

<style scoped>
.horizontal-gray-line {
    border-top: 2px solid #cccccc;
    margin: 0 50px;
  }

  .line-active {
    border-top: 2px solid var(--brandColor);
  }

  .task-bar-margin {
    margin-top: -21px;
  }

  .progress-count {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #cccccc;
    border-radius: 50%;
    height: 38px;
    width: 38px;
    background-color: rgb(245, 245, 245);
    color: #cccccc;
    position: relative;
  }

  .progress-count span {
    line-height: 0;
    display: inline-block;
    padding-top: 5px;
  }

  .count-active {
    border-color: var(--brandColor) !important;
    color: var(--brandColor) !important;
    background-color: rgb(255, 242, 255);
    position: relative;
  }

  .task-bar-title {
    color: #cccccc;
  }

  .task-bar {
    margin-top: 30px;
    height: 60px;
  }

  .task-title {
    border-bottom: 1px solid gray;
  }

</style>