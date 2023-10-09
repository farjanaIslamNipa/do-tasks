<template>
  <div class="row">
    <div class="col-md-8 px-0">
      <div class="listing-form-view-height px-2 py-2">
        <div class="bg-white basic-form card-shadow rounded pt-4 pb-4 px-4">
            <h5 class="text-brand fw-bold">What type of service will this listing offer?</h5>
            <p class="mb-4">Choose a category that best describes the service being offered in this listing. This will help
                customers find and book your listing.</p>
            <div class="pt-2 d-md-none d-block">
                <CreateListingHints />
                <CreateListingHints />
                <CreateListingAvoid />
            </div>
            <div class="mb-4">
                <label class="fw-bold" for="">Title</label>
                <p class="mb-0">Write a short title that accurately describes the service you'll provide</p>
                <input v-model="taskTitle" type="text" class="form-control" placeholder="e.g. Family and Newborn Photography">
            </div>
            <div class="mb-lg-5 mb-4">
                <label class="fw-bold" for="">Search Tags</label>
                <p class="mb-0">Type and enter up to 15 search terms customers might use when searching for your listing</p>
                <input-tag v-model="tags" :add-tag-on-blur="true" placeholder="e.g. Higher School Certificate, Barista" class="rounded tag-input"></input-tag>
            </div>
            <div class="">
                <label class="fw-bold" for="">Description</label>
                <p class="mb-0">Please describe the service you are offering in detail</p>
                <textarea v-model="taskDescription" type="text" class="form-control textarea-resize" rows="4"> </textarea>
                <p class="mb-0">Do not put prices in your listing description. You can set up price packages for your listing in the next step.</p>
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
import {ref} from 'vue';

const taskTitle = ref('')
const taskDescription = ref('')
const tags = ref([])
</script>

<style>
.tag-input:focus{
  outline: none !important;
  border: none !important;
}
</style>