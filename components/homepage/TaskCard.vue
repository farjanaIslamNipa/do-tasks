<template>
  <div>
    <NuxtLink to="#" class="getting-done-card bg-white d-block text-gray">
      <h5>Removals</h5>
      <div class="d-flex justify-content-between align-items-start w-100 border-t border-b getting-done-card-border">
        <img style="height:50px" class="img-fluid" src="/images/frontend/home/default-image.svg" alt="">
        <div class="px-2">
          <p style="font-size:16px" class="mb-0 text-400">Break down and take away boxes</p>
        </div>
        <div>
          <h4>$160</h4>
        </div>
      </div>
      <p class="mb-0 mt-2"><span style="color:goldenrod"><i class="fa-solid fa-star"></i></span> 5 Star</p>
    </NuxtLink>
  </div>
</template>

<script setup>

</script>

<style scoped>

.getting-done-card{
border-radius: 8px;
padding: 20px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11);
transition: all 0.3s ease;
}
.getting-done-card:hover{
  box-shadow: #9668b83b 0px 2px 8px 0px;
  color: #414141;
}
.getting-done-card-border{
  border-top: 1px solid rgb(236, 236, 236);
  border-bottom: 1px solid rgb(236, 236, 236);
  padding: 10px 0;
}
.getting-done-link{
  color: #414141;
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  padding: 0 30px;
}
.getting-done-link:hover{
  color: var(--brandColor);
  background-color: var(--purpleLighter);
  border-radius: 30px;
  transition: all 0.3s ease;
}
@media(max-width:1199px){
  .getting-done-link{
  font-size: 18px;
  padding: 0 20px;
}
}
@media(max-width:991px){
  .getting-done-link{
  font-size: 18px;
  padding: 0 20px;
}
}
</style>