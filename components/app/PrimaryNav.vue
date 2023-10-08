<template>
<div id="sticky-navbar">
  <nav class="navbar-expand-lg primary-nav">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-2 col-3">
          <div class="d-flex align-items-center">
            <span class="hamburger-icon me-3" @click="openNav"><i class="fa-solid fa-bars"></i></span>
            <div>
              <NuxtLink class="" to="/">
                <img src="/images/frontend/general/do-task-logo-1.svg" alt="Logo" class="brand-logo">
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-9">
          <div id="sideBarMenu" class="small-device-collapse-nav full-width">
            <div class="d-lg-flex d-block justify-content-between align-items-center w-100 sidenav-content">
              <div class="d-flex justify-content-between">
                <div class="d-lg-none d-block mb-4" @click="closeSideNav">
                  <NuxtLink class="" to="/">
                    <img class="brand-logo" src="/images/frontend/general/do-task-logo-1.svg" alt="Logo">
                  </NuxtLink>
                </div>
                <div class="">
                  <span style="cursor:pointer" class="brand-color nav-close-btn" @click="closeNav"><i class="fa-solid fa-xmark"></i></span>
                </div>
              </div>
              <div class="ms-lg-3 ms-0">
                <ul class="m-0 p-0 list-unstyled">
                  <li class="d-lg-inline-block d-none" @click="closeSideNav">
                    <NuxtLink id="post-task" class="post-a-task-btn" to="/post-task" data-text="Post a Task">Post a Task</NuxtLink>
                  </li>
                  <li class="menu-item d-lg-none d-block" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="/profile">Profile</NuxtLink>
                  </li>
                  <li class="menu-item" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="/categories">Categories</NuxtLink>
                  </li>
                  <li class="menu-item" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="/find-tasks">Find Tasks</NuxtLink>
                  </li>
                  <li class="menu-item" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="/how-it-works" >How it works</NuxtLink>
                  </li>
                <!-- MOBILE VIEW SECTION FOR LOGGED IN USER START  -->
                  <li class="menu-item d-lg-none d-block" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="#">Email & Notifications</NuxtLink>
                  </li>
                  <li class="menu-item d-lg-none d-block" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="#">Payment Methods</NuxtLink>
                  </li>
                  <li class="menu-item d-lg-none d-block" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="#">Settings</NuxtLink>
                  </li>
                  <li class="menu-item d-lg-none d-block" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="#">My Dashboard</NuxtLink>
                  </li>
                  <li class="menu-item d-lg-none d-block" @click="closeSideNav">
                    <NuxtLink class="menu-link" to="#">Logout</NuxtLink>
                  </li>
                <!-- MOBILE VIEW SECTION FOR LOGGED IN USER END  -->
                </ul>
              </div>
              <div>
                <ul class="m-0 p-0 list-unstyled">
                  <li class="menu-item mx-1" @click="closeSideNav"><NuxtLink class="menu-link" to="/sign-up">Sign up</NuxtLink></li>
                  <li class="menu-item ms-2 me-3" @click="closeSideNav"><NuxtLink class="menu-link" to="/login">Login</NuxtLink></li>
                  <li  class="menu-item me-0 ms-0" @click="closeSideNav"><NuxtLink id="become-tasker" class="become-a-tasker-btn" to="/become-a-tasker">Become a Tasker</NuxtLink></li>
                </ul>

                <!-- WEB VIEW SECTION FOR LOGGED IN USER START  -->
                <!-- <ul class="m-0 p-0 list-unstyled d-lg-flex d-none align-items-center">
                  <li class="mx-3">
                    <NuxtLink to="#">
                      <span class="info-icon"><i class="fa-regular fa-bell"></i></span>
                    </NuxtLink>
                  </li>
                  <li class="mx-2">
                    <NuxtLink class="" to="#">
                      <span class="info-icon"><i class="fa-regular fa-envelope"></i></span>
                    </NuxtLink>
                </li>
                  <li  class="ms-3">
                    <div class="d-flex align-items-center">
                      <div><img class="user-img" src="~/assets/images/frontend/general/user.png" alt=""></div>
                      <div class="dropdown">
                        <button id="dropdownMenuButton" class="btn dropdown-toggle text-brand p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <li><a class="dropdown-item" href="#">Profile</a></li>
                          <li>
                            <a class="dropdown-item" href="#">My Dashboard</a>
                          </li>
                          <li class="has-sub position-relative">
                            <a class="dropdown-item" href="#">
                              Payments &raquo;
                            </a>
                            <ul class="sub-menu">
                              <li>
                                <a class="" href="#">Submenu item 1</a>
                              </li>
                              <li>
                                <a class="" href="#">Submenu item 2</a>
                              </li>
                              <li>
                                <a class="" href="#">Submenu item 3</a>
                              </li>
                            </ul>
                          </li>
                          <li class="has-sub position-relative">
                            <a class="dropdown-item" href="#">
                              Settings &raquo;
                            </a>
                            <ul class="sub-menu">
                              <li>
                                <a class="" href="#">Accounts</a>
                              </li>
                              <li>
                                <a class="" href="#">Email & Notifications</a>
                              </li>
                              <li>
                                <a class="" href="#">Change Password</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">Logout</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul> -->
                <!-- WEB VIEW SECTION FOR LOGGED IN USER END -->
              </div>
            </div>
          </div>
          <div class="d-lg-none d-block text-end">
            <NuxtLink class="small-device-post-task-btn" to="/post-task" @click="closeSideNav">Post a Task</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script setup>

    onMounted(() => {
      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;
        const postTaskBtn = document.getElementById('post-task');
        const becomeTaskerBtn = document.getElementById('become-tasker');
        if (currentScrollPos > 0) {
          postTaskBtn.classList.add('sticky-post-task-btn');
          becomeTaskerBtn.classList.add('sticky-become-tasker-btn');
        }
        if (currentScrollPos === 0) {
          postTaskBtn.classList.remove('sticky-post-task-btn')
          becomeTaskerBtn.classList.remove('sticky-become-tasker-btn')
        }
      }
    })
    const openNav = () => {
      const sideNav = document.getElementById("sideBarMenu");
      sideNav.style.width = "100%";
    }

    const closeNav = () => {
      const sideNav = document.getElementById("sideBarMenu");
      sideNav.style.width = "0";
    }
    const closeSideNav = () =>{
      const sideNav = document.getElementById("sideBarMenu");
      if(sideNav.style.width === "100%") {sideNav.style.width = "0" }
    }
</script>

<style scoped>
.brand-logo{
  height: 50px;
}
#sticky-navbar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
}

.sticky-post-task-btn {
  border-radius: 30px;
  transition: all 0.3s ease;
}

.sticky-become-tasker-btn {
  border-radius: 30px;
  transition: all 0.3s ease;
}

.primary-nav {
  box-shadow: rgb(231 173 255 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
  background-color: white;
}

.menu-item {
  display: inline-block;
  margin: 0 18px;
  position: relative;
}

.menu-link {
  color: #414141;
  font-weight: bold;
  font-size: 16px;
  text-transform: capitalize;
  display: block;
  padding: 20px 0;
}

.menu-item::after {
  content: " ";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  background-color: var(--brandColor);
  width: 0;
  height: 3px;
  transition: all 300ms ease-out;
}

.menu-item:hover::after {
  width: 100%;
}

/* Post a task button css */
.post-a-task-btn {
  display: inline-block;
  text-align: center;
  background-color: var(--brandColor);
  font-weight: bold;
  letter-spacing: 2px;
  color: transparent;
  position: relative;
  transition: all 0.2s ease;
  padding: 8px 10px;
}

.post-a-task-btn::before {
  content: attr(data-text);
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  letter-spacing: initial;
  color: #fff;
  transition: all 0.2s ease;
}

.post-a-task-btn:hover::before {
  letter-spacing: 2px;
  color: #fff;
}

.small-device-post-task-btn {
  display: inline-block;
  text-align: center;
  background-color: var(--brandColor);
  border: 2px solid var(--brandColor);
  color: white;
  font-weight: bold;
  transition: all 0.2s ease;
  padding: 3px 20px;
  border-radius: 30px;
}

.small-device-post-task-btn:hover {
  background-color: var(--purpleLighter);
  color: var(--brandColor);
  border: 2px solid var(--brandColor);
}

/* Login and Sign up button css */
.become-a-tasker-btn {
  position: relative;
  display: inline-block;
  text-align: center;
  background-color: var(--purpleLighter);
  border: 2px solid var(--purpleLight);
  font-weight: bold;
  padding: 8px 10px;
  transition: all 0.2s ease;
  color: var(--brandColor);
}

.hamburger-icon {
  font-size: 25px;
  line-height: 1;
  padding-top: 3px;
  display: none;
  cursor: pointer;
}

a.nuxt-link-exact-active {
  color: var(--brandColor);
}

.user-img{
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.info-icon{
  color: var(--brandColor);
  font-size: 20px;
}
.dropdown-menu{
  border: none;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
}
.sub-menu{
  position: absolute;
  min-width: 200px;
  top: 0;
  right: 160px;
  background: white;
  border-radius: 8px;
  padding: 10px 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transition: ease-out .3s;
  -moz-transition: ease-out .3s;
  -webkit-transition: ease-out .3s;
}
.sub-menu li {
  list-style: none;
  padding: 8px 30px 8px 8px;
  text-align: right;

}
.sub-menu li:hover{
  background-color: var(--purpleLighter);
  transition: all 0.3s ease;
}
.sub-menu li a {
  color: #414141;
}
.has-sub:hover .sub-menu {
    opacity: 1;
    visibility: visible;
    transition: ease-out .3s;
    -moz-transition: ease-out .3s;
    -webkit-transition: ease-out .3s;
}

@media (max-width:1399px) {
  .menu-item {
    margin: 0 12px;
  }
}

@media (max-width:1199px) {
  .menu-item {
    margin: 0 6px;
  }

  .menu-link {
    font-size: 15px;
  }

  .post-a-task-btn {
    padding: 8px 2px;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 1;
  }

  .post-a-task-btn:hover::before {
    letter-spacing: 1px;
  }

  .become-a-tasker-btn {
    padding: 6px;
    font-size: 15px;
    line-height: 1;
  }

}

@media(min-width:992px) {
  .full-width {
    width: auto !important;
  }

  .nav-close-btn {
    display: none !important;
  }

}

@media (max-width:991px) {
  .primary-nav {
    padding: 16px 0;
  }

  .hamburger-icon {
    display: block;
    padding-top: 3px;
  }

  .nav-close-btn {
    display: block !important;
    font-size: 22px;
    color: var(--brandColor);
    border: 1px solid #8DC63F;
    border-radius: 50%;
    line-height: 0;
    padding: 3px 7px;
  }

  .nav-close-btn:hover {
    background-color: var(--brandColor);
    color: white;
    border: 1px solid var(--brandColor);
    transition: all 0.4s ease;
  }

  .small-device-collapse-nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    transition: 0.5s;
    white-space: nowrap;
  }

  .sidenav-content {
    padding: 30px 60px;
  }

  .menu-item {
    display: block;
    border-bottom: 1px solid var(--purpleLight);
  }

  .menu-link {
    font-size: 17px;
    padding: 15px 0;
  }
  .become-a-tasker-btn {
    display: block;
    border: none;
    background: none;
    color: #414141;
    margin-left: 5px;
    font-size: 17px;
    padding: 17px 0;
    border-bottom: 1px solid var(--purpleLight) !important;
    text-align: left;
  }

  .post-a-task-btn {
    background: none;
    font-size: 17px;
    color: #414141;
    padding: 15px 0;
    display: block !important;
    border-bottom: 1px solid var(--purpleLight) !important;
    text-align: left;
  }

  .post-a-task-btn::before {
    content: '' !important;
  }

  .menu-item:hover::after {
    width: 0 !important;
  }

  .menu-link:hover,
  .auth-btn:hover,
  .post-a-task-btn:hover,
  .become-a-tasker-btn:hover {
    transition: all 0.3s ease;
    letter-spacing: 2px;
  }

  .menu-link:hover,
  .post-a-task-btn:hover,
  .become-a-tasker-btn:hover {
    transition: all 0.3s ease;
    letter-spacing: 2px;
    color: var(--brandColor);
  }
}

@media (max-width:991px) {
  .sidenav-content {
    padding: 30px 30px;
  }
  .post-a-task-btn{
    color: white !important;
  }
  .sticky-post-task-btn{
    border-radius: 0 !important;
  }
  .sticky-become-tasker-btn{
    border-radius: 0 !important;
    border: none !important;
  }
}

@media (max-width:424px) {
  .sidenav-content {
    padding: 30px 10px;
  }
}
</style>