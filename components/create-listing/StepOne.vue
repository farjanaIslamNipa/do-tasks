<template>
    <div class="row">
    <div class="col-md-8 px-1">
        <div class="listing-form-view-height py-2 px-2">
            <div class="bg-white basic-form card-shadow rounded py-4 px-4">
                <h5 class="text-brand fw-bold">What type of service will this listing offer?</h5>
                <p>Choose a category that best describes the service being offered in this listing. This will help
                    customers find and book your listing.</p>
                <div class="pt-2 d-md-none d-block">
                    <CreateListingHints />
                    <CreateListingHints />
                </div>
                <div class="mb-4 mt-5">
                    <label class="fw-bold">Choose a main category</label>
                    <VueMultiselect
              v-model="selected"
              :options="options" :show-labels="false">
            </VueMultiselect>
                </div>
                <div class="mb-5">
                    <label class="fw-bold" for="">Choose a main subcategory</label>
                    <VueMultiselect
              v-model="subCategory"
              :options="subCategoryOptions" :show-labels="false">
            </VueMultiselect>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 d-md-block d-none">
        <div class="pt-2">
            <CreateListingHints />
            <CreateListingHints />
        </div>
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue';
import VueMultiselect from 'vue-multiselect'
const selected = ref(null)
const subCategory = ref(null)
const options = ref(['Auto Electrical', 'Hair and Beauty', 'Cleaning'])
const subCategoryOptions = ref(['Auto Electrical', 'Hair and Beauty', 'Cleaning'])

// const props = defineProps({
//   step: Number
// })
// const emit = defineEmits(["go-next"])
// const goForward = (step, component) => {
//   emit("go-next", step);
// }
</script>

<style scoped>

</style>