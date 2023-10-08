<template>
    <div class="container pt-lg-5 pt-3">
        <div class="row">
            <div class="col-lg-3 col-12">
                <div class="d-lg-block d-none">
                    <div class="sticky-listing-menu">
                        <AppProgressBar :step-bar="stepBar" :step="step" :current-step="currentStep" />
                    </div>
                </div>
                <div class="d-lg-none d-block text-underline fw-bold text-lime"><h6>Step <span>{{ step }}</span>/7</h6></div>
            </div>
            <div class="col-lg-9 col-12">
                <div>
                    <h3 class="text-brand fw-bold mb-2">Create your listing</h3>
                    <div>
                      <KeepAlive>
                        <component :is="currentComponent" />
                      </KeepAlive>
                      <div v-if="step === 1" class="col-md-8 mb-4">
                          <div class="text-center mt-4"><button class="rounded-fill-btn py-md-2 py-1 w-75" @click="goNext()">Next</button></div>
                      </div>
                      <div v-else class="col-md-8 mb-4 mt-4">
                        <div class="d-flex justify-content-between">
                            <button class="rounded-outline-btn py-md-2 py-1 mx-2 w-100" @click="goBack()">Back</button>
                            <button class="rounded-fill-btn py-md-2 py-1 mx-2 w-100" @click="goNext()">Next</button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import {ref, } from 'vue';
import CreateListingStepOne from '@/components/create-listing/StepOne.vue';
import CreateListingStepTwo from '@/components/create-listing/StepTwo.vue';
import CreateListingStepThree from '@/components/create-listing/StepThree.vue';

const currentComponent = ref(CreateListingStepOne)

const step = ref(1)
const currentStep = ref({value: ''})

const goNext = () => {
    step.value++
  }
    
const goBack = () => {
    step.value--
    if(step===2){
      currentComponent.value = CreateListingStepTwo
      }
    if(step===3){
      currentComponent.value = CreateListingStepThree
      }
}
const stepBar = ref([
    {
        id: 1,
        name: 'Category'
    },
    {
        id: 2,
        name: 'Description'
    },
    {
        id: 3,
        name: 'Pricing & Packaging'
    },
    {
        id: 4,
        name: 'Location'
    },
    {
        id: 5,
        name: 'Availability'
    },
    {
        id: 6,
        name: 'Images'
    },
    {
        id: 7,
        name: 'Booking Message'
    }
])
</script>

<style scoped>

</style>