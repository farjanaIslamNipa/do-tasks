<template>
  <div class="row listing-form-view-height">
    <div class="col-md-8 px-0">
      <div class="px-2 py-2">
        <div class="bg-white basic-form card-shadow rounded pt-4 pb-4 px-4">
          <h5 class="text-brand fw-bold">Add images</h5>
          <p class="mb-2 text-gray">Add high quality images that visually describe this listing.</p>
          <div class="pt-2 d-block d-md-none">
              <CreateListingHints />
          </div>
          <!-- main image -->
          <div class="mb-4">
              <h6 class="fw-bold pt-4 mb-2">Main image</h6>
              <p class="text-gray">This is the first image potential customers see when viewing your listing</p>
              <div class="text-center m-4">
                  <div class="bg-white card-shadow rounded py-4 px-4">
                      <p class="text-300">Drag and drop or click to upload. Supported files: .jpg, .jpeg, .png. Max file size: 10MB</p>
                      <div class="px-md-5 px-2 pb-1">
                          <div class="upload-img-box my-3">
                              <input type="file" >
                              <div>
                                  <img class="up-img-icon" src="/images/frontend/general/no-img-icon.svg" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Gallery image -->
          <div>
            <h6 class="fw-bold pt-4 mb-2">Gallery Images (optional)</h6>
            <p class="text-gray">Choose up to 15 images to showcase your work and skill</p>
            <div class="text-center m-4">
              <div class="bg-white card-shadow rounded py-4 px-4">
                <p class="text-300">Drag and drop or click to upload. Supported files: .jpg, .jpeg, .png. Max file size: 10MB</p>
                <div class="px-md-5 px-2 pb-1">
                  <div class="upload-img-box my-3">
                      <input type="file" >
                      <div>
                          <img class="up-img-icon" src="/images/frontend/general/no-img-icon.svg" alt="">
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
.upload-img-box{
    position: relative;
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, #662d914a 60%, transparent 50%), linear-gradient(to right, #662d914a 60%, transparent 50%), linear-gradient(to bottom, #662d914a 60%, transparent 50%), linear-gradient(to bottom, #662d914a 60%, transparent 50%);
    background-position: left top, left bottom, left top, right top;
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 20px 2px, 20px 2px, 2px 20px, 2px 20px;
    border-radius: 5px;
}
.upload-img-box input{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
}
.up-img-icon{
    height: 60px;
    width: 60px;
}
@media (max-width:1399px) {
    .upload-img-box{
        height: 250px;
    }
}
@media (max-width:1199px) {
    .upload-img-box{
        height: 200px;
    }
}
</style>