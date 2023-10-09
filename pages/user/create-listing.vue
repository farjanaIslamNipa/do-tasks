<template>
    <div class="container pt-lg-5 pt-3">
        <div v-if="step!==8" class="row">
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
                            <button class="rounded-fill-btn py-md-2 py-1 mx-2 w-100" @click="goNext()">{{ step === 7 ? 'Submit' : 'Next' }}</button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div v-if="step===8">
            <div class="bg-white basic-form card-shadow rounded pt-5 pb-5 px-4 text-center mb-5">
                <img src="/images/frontend/listing/success-img.png" alt="">
                <h3 class="mt-4">List Created Successfully</h3>
                <div class="d-flex gap-2 item-content-center justify-content-center mt-4 pb-4">
                    <NuxtLink to="/" class="rounded-outline-btn py-1">Go to Home</NuxtLink>
                    <NuxtLink to="/listed-services" class="rounded-fill-btn py-1">View Listing</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, shallowRef} from 'vue';
import CreateListingStepOne from '@/components/create-listing/StepOne.vue';
import CreateListingStepTwo from '@/components/create-listing/StepTwo.vue';
import CreateListingStepThree from '@/components/create-listing/StepThree.vue';
import CreateListingStepFour from '@/components/create-listing/StepFour.vue';
import CreateListingStepFive from '@/components/create-listing/StepFive.vue';
import CreateListingStepSix from '@/components/create-listing/StepSix.vue';
import CreateListingStepSeven from '@/components/create-listing/StepSeven.vue';

const currentComponent = shallowRef(CreateListingStepOne)

const step = ref(1)
const currentStep = ref({value: ''})

const goNext = () => {
    step.value++
    if(step.value === 2){
        currentComponent.value = CreateListingStepTwo
    }
    if(step.value === 3){
        currentComponent.value = CreateListingStepThree
    }
    if(step.value === 4){
        currentComponent.value = CreateListingStepFour
    }
    if(step.value === 5){
        currentComponent.value = CreateListingStepFive
    }
    if(step.value === 6){
        currentComponent.value = CreateListingStepSix
    }
    if(step.value === 7){
        currentComponent.value = CreateListingStepSeven
    }
  }
    
const goBack = () => {
    step.value--
    if(step.value === 1){
        currentComponent.value = CreateListingStepOne
    }
    if(step.value === 2){
        currentComponent.value = CreateListingStepTwo
    }
    if(step.value === 3){
        currentComponent.value = CreateListingStepThree
    }
    if(step.value === 4){
        currentComponent.value = CreateListingStepFour
    }
    if(step.value === 5){
        currentComponent.value = CreateListingStepFive
    }
    if(step.value === 6){
        currentComponent.value = CreateListingStepSix
    }
    if(step.value === 7){
        currentComponent.value = CreateListingStepSeven
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