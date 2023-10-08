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

                    <div v-if="step === 1">
                     <CreateListingStepOne @go-next="goNext" />
                    </div>
                    <div v-if="step === 2">
           
                    </div>
                    <div v-if="step === 3">
                     
                    </div>
                    <div v-if="step === 4">
                 
                    </div>
                    <div v-if="step === 5">
                       
                    </div>
                    <div v-if="step === 6">
                
                    </div>
                    <div v-if="step === 7">
                     
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import {ref, shallowRef} from 'vue';
import CreateListingStepOne from '@/components/create-listing/StepOne.vue';
import CreateListingStepTwo from '@/components/create-listing/StepTwo.vue';

const currentComponent = shallowRef(CreateListingStepOne)

const step = ref(1)
const currentStep = ref({value: ''})

const goNext = (nextComponent) => {
    step.value++
    currentComponent.value = nextComponent
}
const goBack = () => {
    step.value--
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