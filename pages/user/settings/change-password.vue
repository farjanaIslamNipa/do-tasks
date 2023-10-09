<template>
  <div class="py-md-5 py-4">
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <UserSettingSidebar />
              </div>
              <div class="col-md-8">
                  <div class="bg-white rounded card-shadow py-4 px-md-5 px-3">
                      <h4 class="text-brand text-capitalize">Change Password</h4>
                      <div class="basic-form">
                          <div class="mb-4 mt-4 position-relative">
                              <label for="">Current Password</label>
                              <input id="currentPassword" :type="togglePassword.currentPassword ? 'password' : 'text'" class="form-control" placeholder="Current Password">
                              <button type="button" class="btn visibility-icon" @click="togglePassword.currentPassword=!togglePassword.currentPassword">
                              <span v-if="togglePassword.currentPassword" class="cursor-pointer"><i class="fas fa-eye-slash"></i></span>
                              <span v-else class="cursor-pointer"><i class="fas fa-eye"></i></span>
                          </button>
                          </div>
                          <div class="mb-4 position-relative">
                              <label for="">New Password</label>
                              <input id="newPassword" :type="togglePassword.newPassword ? 'password' : 'text'" class="form-control" placeholder="New Password">
                              <button type="button" class="btn visibility-icon" @click="togglePassword.newPassword=!togglePassword.newPassword">
                              <span v-if="togglePassword.newPassword" class="cursor-pointer"><i class="fas fa-eye-slash"></i></span>
                              <span v-else class="cursor-pointer"><i class="fas fa-eye"></i></span>
                          </button>
                          </div>
                          <div class="mb-4 position-relative">
                              <label for="">Confirm Password</label>
                              <input id="confirmPassword" :type="togglePassword.confirmPassword ? 'password' : 'text'" class="form-control" placeholder="Confirm Password">
                              <button type="button" class="btn visibility-icon" @click="togglePassword.confirmPassword=!togglePassword.confirmPassword">
                              <span v-if="togglePassword.confirmPassword" class="cursor-pointer"><i class="fas fa-eye-slash"></i></span>
                              <span v-else class="cursor-pointer"><i class="fas fa-eye"></i></span>
                          </button>
                          </div>
                          <div class="py-3">
                              <button class="btn rounded-fill-btn rounded py-2">Save Changes</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const togglePassword = ref({
  newPassword: true,
  currentPassword: true,
  confirmPassword: true,
})
</script>

<style scoped>
.visibility-icon{
    position: absolute;
    top: 25px;
    right: 3px;
}
.visibility-icon span{
    color: rgb(180, 180, 180);
    font-size: 14px;
    transition: all 0.3s ease;
}
.visibility-icon span:hover{
    color: var(--brandColor);
}
</style>