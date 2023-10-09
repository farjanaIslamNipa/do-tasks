<template>
    <div class="pt-md-4 pt-0 ps-2">
      <div class="py-2 my-1 ps-3 active-setting"><NuxtLink to="/user/settings/account" class="text-capitalize text-gray text-600 hover-brand">Account</NuxtLink></div>
      <div class="py-2 my-1 ps-3"><NuxtLink to="/user/settings/email-and-notifications" class="text-capitalize text-gray text-600 hover-brand">Email & Notifications</NuxtLink></div>
      <div class="py-2 my-1 ps-3"><NuxtLink to="/user/settings/change-password" class="text-capitalize text-gray text-600 hover-brand">Change Password</NuxtLink></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .active-setting{
        border-left: 3px solid var(--brandColor);
    }
</style>