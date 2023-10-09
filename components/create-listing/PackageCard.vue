<template>
  <div>
    <div class="bg-white basic-form card-shadow py-3 px-3 rounded">
      <div class="d-flex justify-content-between mb-4">
          <h5 class="fw-bold mb-0">Package 1</h5>
          <div><button class="btn p-0"><img src="/images/frontend/general/trash-icon.svg" alt=""></button>
          </div>
      </div>
      <div class="mb-4 pt-2">
          <label class="fw-bold" for="">Package Name</label>
          <input type="text" class="form-control" placeholder="e.g. 2-room carpet steam clean">
      </div>
      <div class="mb-4 pt-2">
          <label class="fw-bold" for="">Describe this package</label>
          <p class="mb-0">List everything that this package includes</p>
          <textarea type="text" class="form-control textarea-resize" rows="4" placeholder="e.g. 2-room carpet steam clean"> </textarea>
      </div>
      <div class="d-md-flex d-block justify-content-between align-items-end mb-4 pt-2">
          <div class="price-section mb-md-0 mb-3">
              <label for="">Total price</label>
              <div class="input-group flex-nowrap">
                  <span id="addon-wrapping" class="input-group-text">$</span>
                  <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping">
              </div>
          </div>
          <div class="text-section ms-md-4 ms-0">
              <p class="mb-0 text-15 line-height-1 text-gray text-300">DoTasks will deduct a service fee between 10-20% of the package price depending on your tier at time of booking. More info</p>
          </div>
      </div>
      <p>Do not put prices in your listing description. You can set up price packages for your listing in the next step.</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.price-section{
    width: 35%;
}
.text-section{
    width: 65%;
}
@media (max-width: 767px){
    .price-section{
    width: 60%;
}
.text-section{
    width: 100%;
} 
}
</style>