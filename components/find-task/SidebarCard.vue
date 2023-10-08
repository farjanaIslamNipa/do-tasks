
<template>
      <NuxtLink to="/task-view" class="d-block bg-white card-shadow find-task-card open-active px-2 py-3 mb-2">
        <div class="d-flex justify-content-between align-items-center">
            <h6 class="fw-bold text-gray mb-0 text-uppercase">Hair extensions</h6>
            <h5 class="fw-bold text-gray mb-0">$160</h5>
        </div>
        <div class="pe-5">
            <hr class="task-card-line">
        </div>
        <div class="">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <div class="d-flex align-items-center">
                        <div><img class="find-task-card-icon" src="/images/frontend/find-task/location-icon.svg" alt=""></div>
                        <p class="mb-0 text-gray text-300 ms-2">Ferntree Gully VIC</p>
                    </div>
                    <div class="d-flex align-items-center my-2">
                        <div><img class="find-task-card-icon" src="/images/frontend/find-task/date-icon.svg" alt=""></div>
                        <p class="mb-0 text-gray text-300 ms-2">Thu, 22 Sep</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <div><img class="find-task-card-icon" src="/images/frontend/find-task/time-icon.svg" alt=""></div>
                        <p class="mb-0 text-gray text-300 ms-2">Afternoon</p>
                    </div>
                </div>
                <div>
                    <img class="no-user-img" src="/images/frontend/general/no-user.svg" alt="">
                </div>
            </div>
        </div>
        <div class="pe-5">
            <hr class="task-card-line">
        </div>
        <h6 class="fw-bold text-lime text-capitalize mb-0">Open</h6>
    </NuxtLink>
</template>

<style scoped>
.find-task-card {
    border-radius: 8px;
}

.open-active {
    border-left: 3px solid var(--lime);
}

.completed-active {
    border-left: 3px solid rgb(180, 12, 12);
}

.assigned-active {
    border-left: 3px solid var(--brandColor);
}

.no-user-img {
    height: 55px;
    width: 55px;
    border-radius: 50%;
}

.find-task-card-icon {
    height: 18px;
    width: 18px;
}

.task-card-line {
    border-top: 1px solid rgb(167, 167, 167);
    margin: 8px;
}
</style>