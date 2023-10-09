<template>
  <div class="row">
    <div class="col-md-8 px-0">
      <div class="listing-form-view-height px-2 py-2">
        <div class="bg-white basic-form card-shadow rounded pt-4 pb-4 px-4">
          <h5 class="text-brand fw-bold">Set your availability</h5>
          <div class="pt-2 d-md-none d-block">
              <CreateListingHints />
              <CreateListingHints />
              <CreateListingAvoid />
          </div>
          <p class="mb-2 text-gray">Let customers know what your schedule looks like and when you are available to provide this service.</p>
          <textarea type="text" class="form-control textarea-resize mb-4" rows="5" placeholder="I am available on ..."></textarea>
          <p class="text-gray">Customers will request to book your listing. You’ll be notified of new booking requests and given the opportunity to confirm or reject the booking.</p>
          <p class="text-gray">You can ask questions and discuss requirements with the customer before making this decision.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="pt-2 d-md-block d-none">
          <CreateListingHints />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>