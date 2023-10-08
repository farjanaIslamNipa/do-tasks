<template>
  <div class="user-profile-sticky-sidebar">
    <div class="text-center border-box py-4 px-2">
      <div class="position-relative mb-4">
        <img class="user-img" src="/images/frontend/user-profile/profile.png" alt="">
        <div class="camera-icon-position">
          <div class="profile-img-up-box">
            <input type="file" name="" class="form-control">
            <div class="profile-img-up-icon">
              <span><i class="fa-solid fa-camera"></i></span>
            </div>
          </div>
        </div>
      </div>
      <h5 class="text-brand fw-bold mt-2 mb-1">Deepankar R</h5>
      <p class="text-lime"><span class="text-12 pe-2"><i class="fa-solid fa-circle"></i></span>I am online</p>
      <div>
        <div class="d-flex">
          <label for="as-tasker" class="checkbox-container w-100">
            <input id="as-tasker" class="user-checkbox-input" type="radio" checked name="profile-checkbox" />
            <div class="user-checkbox-content tasker-checkbox-content">
              <span>As a Tasker</span>
            </div>
          </label>

          <label for="as-poster" class="checkbox-container w-100">
            <input id="as-poster" class="user-checkbox-input" type="radio" name="profile-checkbox" />
            <div class="user-checkbox-content poster-checkbox-content">
              <span>As a Poster</span>
            </div>
          </label>
        </div>
        <div class="pt-4 pb-3">
          <p class="mb-0"><em>Looks like you haven’t received any reviews just yet.</em></p>
          <NuxtLink to="/post-task" class="text-brand fw-bold hover-lime"><em>Let’s go post a task</em></NuxtLink>
        </div>
      </div>
      <div class="text-center mt-3 mb-5">
        <NuxtLink to="/profile" class="rounded-fill-btn py-2">Go back to profile</NuxtLink>
      </div>
      <div class="text-start">
        <div class="d-flex justify-content-center">
          <table>
            <tbody>
              <tr>
                <td class="w-50" style="vertical-align:top">
                  <img src="/images/frontend/user-profile/location-icon.svg" alt="">
                  <span class="text-light-gray d-inline-block ms-1">From</span>
                </td>
                <td class="w-50">Brighton-Le-Sands NSW, Australia</td>
              </tr>
              <tr>
                <td class="w-50" style="vertical-align:top">
                  <img src="/images/frontend/user-profile/profile-icon.svg" alt="">
                  <span class="text-light-gray d-inline-block ms-1">Member since</span>
                </td>
                <td class="w-50">5th Jun 2015</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="mt-4 border-box pt-3 pb-4 px-2">
      <div class="d-flex justify-content-between align-items-end">
        <h6 class="text-uppercase text-brand">Description</h6>
        <button class="profile-edit-btn btn" @click="handleDescription"><i class="fa-solid fa-pencil"></i></button>
      </div>
      <p class="mb-3 pt-2">No description have been added.</p>
      <div id="update-description-box" class="update-description-height">
        <div class="basic-form px-2">
          <textarea name="" rows="4" placeholder="Enter description" class="w-100 rounded"></textarea>
          <div class="mt-3 text-center">
            <button class="btn bg-purple-light rounded-pill py-0 px-3 text-white" @click="handleDescription">Cancel</button>
            <button class="btn bg-brand rounded-pill py-0 px-4 ms-2 text-white">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 border-box py-4 px-2">
      <h6 class="text-uppercase text-brand">BADGES</h6>
      <div class="mt-4 mb-2">
        <NuxtLink to="/user/get-badges" class="badge-learn-more-btn">Get a badge</NuxtLink>
      </div>
    </div>
    <div class="mt-4 border-box py-4 px-2 mb-4">
      <div>
        <div class="d-flex justify-content-between align-items-end">
          <h6 class="text-uppercase text-brand">SKILLS</h6>
          <button class="profile-edit-btn btn" @click="handleSkill"><i class="fa-solid fa-pencil"></i></button>
        </div>
        <p class="mb-3 pt-2">This user has not added any skills yet.</p>
        <div id="update-skill-box" class="update-skill-height">
          <div class="px-2">
            <div class="mb-3">
              <label class="mb-1 fw-bold text-gray" for="">What are you good at?</label>
              <input-tag v-model="tags" :add-tag-on-blur="true" placeholder="Add tag" class="rounded tag-input"></input-tag>
            </div>
            <div class="mb-3">
              <label class="mb-3 fw-bold text-gray" for="">How do you get around?</label>
              <div>
                <div class="form-check form-check-inline mb-2">
                  <input id="bicycle" class="form-check-input" type="checkbox" name="transportation">
                  <label class="form-check-label mb-0" for="bicycle">Bicycle</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input id="car" class="form-check-input" type="checkbox" name="transportation">
                  <label class="form-check-label mb-0" for="car">Car</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input id="online" class="form-check-input" type="checkbox" name="transportation">
                  <label class="form-check-label mb-0" for="online">Online</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input id="scooter" class="form-check-input" type="checkbox" name="transportation">
                  <label class="form-check-label mb-0" for="scooter">Scooter</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input id="truck" class="form-check-input" type="checkbox" name="transportation">
                  <label class="form-check-label mb-0" for="truck">Truck</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input id="walk" class="form-check-input" type="checkbox" name="transportation">
                  <label class="form-check-label mb-0" for="walk">Walk</label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="mb-1 fw-bold text-gray" for="">What languages can you speak/write?</label>
              <input-tag v-model="tags" :add-tag-on-blur="true" placeholder="Add tag" class="rounded tag-input"></input-tag>
            </div>
            <div class="mb-3">
              <label class="mb-1 fw-bold text-gray" for="">What qualifications have you got?</label>
              <input-tag v-model="tags" :add-tag-on-blur="true" placeholder="e.g. Higher School Certificate, Barista" class="rounded tag-input"></input-tag>
            </div>
            <div class="mb-3">
              <label class="mb-1 fw-bold text-gray" for="">What's your work experience?</label>
              <input-tag v-model="tags" :add-tag-on-blur="true" placeholder="e.g. 3 years as a Barista at The Cafe" class="rounded tag-input"></input-tag>
            </div>
            <div class="mt-3 text-center">
            <button class="btn bg-purple-light rounded-pill py-0 px-3 text-white" @click="handleSkillCancel">Cancel</button>
            <button class="btn bg-brand rounded-pill py-0 px-4 ms-2 text-white">Save</button>
          </div>
          </div>
        </div>
      </div>
      <!-- <div class="language-section-border my-4 pt-4 pb-3">
        <h6 class="text-uppercase text-brand mb-3">LANGUAGES</h6>
        <div class="d-flex flex-wrap">
          <h6 class="mx-1 fw-bold">English</h6>
        </div>
      </div>
      <div>
        <h6 class="text-uppercase text-brand mb-3">TRANSPORTATION</h6>
        <div class="d-flex flex-wrap">
          <h6 class="skill-badge mx-1">Car</h6>
          <h6 class="skill-badge mx-1">Truck</h6>
          <h6 class="skill-badge mx-1">Bicycle</h6>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const updateDescription = ref(false)
const updateSkill = ref(false)
const  handleDescription = () => {
      const updateDescriptionBox = document.getElementById('update-description-box');
      updateDescriptionBox.classList.toggle('update-description-auto-height');
    }
  const handleSkill = () => {
      const updateSkillBox = document.getElementById('update-skill-box');
      updateSkillBox.classList.toggle('update-skill-auto-height');
    }
  const handleSkillCancel = () => {
      const updateSkillBox = document.getElementById('update-skill-box');
      updateSkillBox.classList.remove('update-skill-auto-height');
    }

</script>

<style scoped>
.user-img {
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 50%;
}



.tasker-checkbox-content {
  border-radius: 20px 0 0 0;
  background-color: var(--purpleLighter);
  color: var(--brandColor);
}

.poster-checkbox-content {
  border-radius: 0 20px 0 0;
  background-color: var(--purpleLighter);
  color: var(--brandColor);
}

.checkbox-container {
  position: relative;
  height: 40px;
  box-sizing: border-box;
}

.checkbox-container .user-checkbox-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  transition: .3s ease;
}

.checkbox-container .user-checkbox-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 100px;
  opacity: 0;
  cursor: pointer;
}

.user-checkbox-input[type=radio]:checked~.user-checkbox-content {
  background-color: var(--brandColor);
  color: white;
}

@keyframes slidein {
  from {
    margin-top: 100%;
    width: 300%;
  }

  to {
    margin: 0%;
    width: 100%;
  }
}

/* .user-profile-sticky-sidebar{
  position: fixed;
  top: 80px;
  z-index: 99999;
} */
.border-box {
  border: 1px solid rgb(240, 239, 239);
}

.badge-learn-more-btn {
  background-color: var(--purpleLighter);
  border-radius: 30px;
  color: var(--brandColor);
  font-weight: bold;
  padding: 10px 20px;
}

.skill-badge {
  border: 1px solid var(--purpleLight);
  border-radius: 30px;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.language-section-border {
  border-top: 1px solid var(--purpleLight);
  border-bottom: 1px solid var(--purpleLight);
}

.profile-img-up-box {
  position: relative;
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: #eee0f7;
  border-radius: 50%;
  line-height: 1;
  border: 2px solid white;
}

.profile-img-up-box input {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
}

.profile-img-up-icon {
  font-size: 17px;
}

.camera-icon-position {
  position: absolute;
  right: 88px;
  bottom: -8px;
}

.update-description-height {
  max-height: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
}

.update-description-auto-height {
  max-height: 500px;
  transition: max-height 0.3s ease-in;
}
.update-skill-height {
  max-height: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
}

.update-skill-auto-height {
  max-height: 600px;
  transition: max-height 0.3s ease-in;
}

.profile-edit-btn {
  border-radius: 50%;
  transition: all 0.3s ease;
}

.profile-edit-btn:hover {
  background-color: var(--purpleLighter);
  border-radius: 50%;
  transition: all 0.3s ease;
}

</style>