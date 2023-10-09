<template>
    <div class="bg-white rounded py-4 px-4 card-shadow">
        <div class="row">
            <div class="col-xl-8 mb-xl-0 mb-5">
                <div>
                    <div>
                        <span class="d-inline-block text-uppercase text-white bg-lime rounded-pill pt-1 px-md-3 px-2 mx-1 fw-bold text-12 mb-2">OPEN</span>
                        <span class="d-inline-block text-uppercase text-purple-light rounded-pill pt-1 px-md-3 px-2 mx-1 fw-bold text-12 mb-2">ASSIGNED</span>
                        <span class="d-inline-block text-uppercase text-purple-light rounded-pill pt-1 px-md-3 px-2 mx-1 fw-bold text-12 mb-2">COMPLETED</span>
                        <span class="d-inline-block text-brand rounded-pill pt-2 pb-1 px-md-3 px-2 mx-1 fw-bold bg-purple-lighter cursor-pointer"><span><i class="fa-regular fa-heart"></i> Follow</span></span>
                    </div>
                    <div class="ps-2">
                        <div class="pt-5">
                            <h3 class="fw-bold text-capitalize text-gray">Hair extensions</h3>
                            <div class="d-flex align-items-center mt-4">
                                <div>
                                    <img class="no-user-img" src="/images/frontend/general/no-user.svg" alt="">
                                </div>
                                <div class="ms-3 w-100">
                                    <p class="mb-0 text-uppercase">POSTED BY</p>
                                    <p class="mb-2 text-capitalize text-brand fw-bold">Lyn M.</p>
                                    <div class="me-5"><hr class="m-0 gray-line"></div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-5">
                            <div class="d-flex align-items-center">
                                <div><img class="purple-icon" src="/images/frontend/find-task/purple-location-icon.svg" alt=""></div>
                                <div class="ms-4">
                                    <p class="mb-0 text-uppercase text-gray text-14">LOCATION</p>
                                    <h6 class="text-600 text-capitalize mb-0 text-gray">Ferntree Gully VIC, AustraliaView map</h6>
                                </div>
                            </div>
                            <div class="d-flex align-items-center my-5">
                                <div><img class="purple-icon" src="/images/frontend/find-task/purple-calendar-icon.svg" alt=""></div>
                                <div class="ms-4">
                                    <p class="mb-0 text-uppercase text-gray text-14">DUE DATE</p>
                                    <h6 class="text-600 text-capitalize mb-0 text-gray">Thursday, 22nd Sep 2022</h6>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <div><img class="purple-icon" src="/images/frontend/find-task/purple-time-icon.svg" alt=""></div>
                                <div class="ms-4">
                                    <p class="mb-0 text-uppercase text-gray text-14">Time</p>
                                    <h6 class="text-600 text-capitalize mb-0 text-gray">Afternoon (2pm - 6pm)</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4">
                <div>
                    <div class="border rounded-3">
                        <div class="bg-purple-lighter py-3">
                            <h6 class="text-brand fw-bold mb-0 text-center">Task Budget</h6>
                        </div>
                        <hr class="m-0 gray-line">
                        <div class="mt-3 mb-2">
                            <h2 class="mb-0 fw-bold text-center text-gray">$150</h2>
                        </div>
                        <div class="px-3 pb-1"><hr class="m-2 gray-line"></div>
                        <div class="text-center mt-3 mb-4">
                            <button class="rounded-fill-btn">Make an offer</button>
                        </div>
                    </div>
                    <div class="task-option-select mt-3">
                    <multi-select v-model="selected" :options="options" :show-labels="false">
                    </multi-select>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-5">
            <!-- DETAILS -->
            <div>
                <h6 class="text-brand text-uppercase fw-bold text-underline">DETAILS</h6>
                <h6 class="text-gray text-600">I need to move up my hair extensions.</h6>
                <hr class="gray-line">
            </div>
            <!-- OFFERS -->
            <div class="pt-4">
                <h6 class="text-brand text-uppercase fw-bold text-underline">OFFERS(0)</h6>
                <div class="text-center">
                    <img class="" src="/images/frontend/find-task/blank-offer-img.png" alt="">
                    <div class="mt-4">
                        <button class="rounded-fill-btn">Make an offer</button>
                    </div>
                </div>
            </div>
            <!-- QUESTIONS -->
            <div class="mt-5 mb-4">
                <h6 class="text-brand text-uppercase fw-bold text-underline">QUESTIONS(0)</h6>
                <h6 class="text-gray text-600">Please don't share personal info – insurance won't apply to tasks not done through DoTasks!</h6>
                <div class="question-box">
                    <textarea rows="4" class="w-100"></textarea>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="clip-icon">
                            <input type="file" >
                            <span class="text-brand"><i class="fa-solid fa-paperclip"></i></span>
                        </div>
                        <div><button class="btn text-purple-light px-0 hover-brand">Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.no-user-img{
    height: 70px;
    width: 70px;
    border-radius: 50%;
}
.purple-icon{
    height: 28px;
}
.question-box{
    border: 1px solid var(--purpleLight);
    border-radius: 6px;
    margin-top: 20px;
    padding: 0 15px;
}
.question-box textarea {
    border: none !important;
}
.question-box textarea:focus{
    border: none !important;
    outline: none !important;
}
.question-box textarea::-webkit-resizer {
    display: none;
}
.clip-icon{
    position: relative;
    cursor: pointer;
}
.clip-icon input{
    position: absolute;
    cursor: pointer;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 1;
}
.clip-icon span{
    cursor: pointer !important;
    height: 50px;
}
</style>