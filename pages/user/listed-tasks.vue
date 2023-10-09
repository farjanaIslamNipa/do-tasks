<template>
    <div class="bg-purple-lighter">
        <FrontendFindTaskSubNav />
        <div class="container">
            <div class="row pt-4 position-relative">
                <div class="col-lg-4 mb-lg-0 mb-4 pe-lg-0 pe-2">
                    <div class="sticky-taskbar-section">
                        <div class="sidebar-width">
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 ps-lg-0 ps-2 mb-4">
                    <div class="bg-white rounded py-4 px-4 card-shadow">
                        <div class="row">
                            <div class="col-xl-8 mb-xl-0 mb-5">
                                <div>
                                    <div>
                                        <span class="d-inline-block text-uppercase text-white bg-lime rounded-pill pt-1 px-md-3 px-2 mx-1 fw-bold text-12 mb-2">Draft</span>
                                        <span class="d-inline-block text-uppercase text-purple-light rounded-pill pt-1 px-md-3 px-2 mx-1 fw-bold text-12 mb-2">open</span>
                                    </div>
                                    <div class="ps-2">
                                        <div class="pt-4">
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
                                                    <p class="mb-0 text-uppercase text-gray text-15">LOCATION</p>
                                                    <h6 class="text-600 text-capitalize mb-0 text-gray">Ferntree Gully VIC, AustraliaView map</h6>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center my-5">
                                                <div><img class="purple-icon" src="/images/frontend/find-task/purple-calendar-icon.svg" alt=""></div>
                                                <div class="ms-4">
                                                    <p class="mb-0 text-uppercase text-gray text-15">DUE DATE</p>
                                                    <h6 class="text-600 text-capitalize mb-0 text-gray">Thursday, 22nd Sep 2022</h6>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div><img class="purple-icon" src="/images/frontend/find-task/purple-time-icon.svg" alt=""></div>
                                                <div class="ms-4">
                                                    <p class="mb-0 text-uppercase text-gray text-15">Time</p>
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
                                            <!-- If task is open budget will show otherwise will be hidden -->
                                            <!-- <h2 class="mb-0 fw-bold text-center">$150</h2> -->
                                        </div>
                                        <div class="px-3 pb-1"><hr class="m-2 gray-line"></div>
                                        <div class="text-center mt-3 mb-4">
                                            <button class="rounded-fill-btn py-2">Make an offer</button>
                                        </div>
                                    </div>
                                    <div class="task-option-select mt-3">
                                      <VueMultiselect
                                        v-model="selected"
                                        :options="options" :show-labels="false">
                                      </VueMultiselect>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-5">
                            <!-- DETAILS -->
                            <div>
                                <h6 class="text-brand text-uppercase fw-bold text-underline">DETAILS</h6>
                                <h6 class="text-gray text-600">I need to move up my hair extensions.</h6>
                                <div v-if="offerActive" class="my-3">
                                    <div class="row">
                                        <div class="col-md-4 col-6 mb-4">
                                            <div class="details-img">
                                                <img src="/images/frontend/find-task/details.png" alt="" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-6 mb-4">
                                            <div class="details-img">
                                                <img src="/images/frontend/find-task/details.png" alt="" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-6 mb-4">
                                            <div class="details-img">
                                                <img src="/images/frontend/find-task/details.png" alt="" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-6 mb-4">
                                            <div class="details-img">
                                                <img src="/images/frontend/find-task/details.png" alt="" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-6 mb-4">
                                            <div class="details-img">
                                                <img src="/images/frontend/find-task/details.png" alt="" class="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="upload-img-box my-3">
                                        <input type="file" >
                                        <div>
                                            <img class="up-img-icon" src="/images/frontend/general/no-img-icon.svg" alt="">
                                        </div>
                                    </div>
                                    <h6 class="text-gray text-400">Adding images can give you more accurate offers</h6>
                                </div>
                                <hr class="gray-line">
                            </div>
                            <!-- OFFERS -->
                            <div class="pt-4">
                                <h6 class="text-brand text-uppercase fw-bold text-underline">OFFERS(0)</h6>
                                <div v-if="offerActive">
                                    <div class="d-sm-flex d-block mt-4">
                                        <div class="user-img">
                                            <img src="/images/frontend/general/no-user.svg" alt="">
                                        </div>
                                        <div class="ms-sm-3 ms-0">
                                            <h6 class="text-brand fw-bold text-capitalize mb-1">Ritchel Novella</h6>
                                            <div>
                                                <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
                                                <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
                                                <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
                                                <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
                                                <span class="text-warning text-12"><i class="fa-solid fa-star"></i></span>
                                                <span class="text-light-gray">(27)</span>
                                            </div>
                                            <h6 class="fw-bold text-gray">94% Completion rate</h6>
                                            <div class="bg-purple-lighter py-3 px-3 mb-3">
                                                <p class="mb-0">Chhavi and their team did a great job, we really appreciate the help with the cleaning and the rooms were spotless. Thank you team!</p>
                                            </div>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="text-400 text-gray mb-0">21 Minutes ago</p>
                                                <div class="ms-5">
                                                    <button class="reply-btn" @click="replyInput=!replyInput">
                                                        <img src="/images/frontend/find-task/reply-icon.svg" alt="">
                                                        <span class="text-brand">Reply</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div v-if="replyInput" class="">
                                                <span class="textarea reply-input" role="textbox" contenteditable></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="text-center">
                                    <img class="" src="/images/frontend/find-task/blank-offer-img.png" alt="">
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
                                <div v-if="hasQuestion">
                                    <div class="d-flex mt-4">
                                        <div class="question-user-img">
                                            <img src="/images/frontend/general/no-user.svg" alt="">
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="text-brand fw-bold text-capitalize mb-1">Ritchel Novella</h6>
                                            <div class="bg-purple-lighter py-1 px-2 mb-3">
                                                <p class="mb-0">Hi when do you want to get it done</p>
                                            </div>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="text-400 text-gray mb-0">21 Minutes ago</p>
                                                <div class="ms-5">
                                                    <button class="reply-btn" @click="replyInput=!replyInput">
                                                        <img src="/images/frontend/find-task/reply-icon.svg" alt="">
                                                        <span class="text-brand">Reply</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div v-if="replyInput" class="">
                                                <span class="textarea reply-input" role="textbox" contenteditable></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-4 ms-md-5 ms-0 ps-md-5 ps-0">
                                        <div class="question-user-img">
                                            <img src="/images/frontend/general/no-user.svg" alt="">
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="text-brand fw-bold text-capitalize mb-1">Ritchel Novella <span class="d-inline-block ms-3 bg-lime rounded-pill text-white px-2">Poster</span></h6>
                                            <div class="bg-purple-lighter py-1 px-2 mb-3">
                                                <p class="mb-0">Friday Evening</p>
                                            </div>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="text-400 text-gray mb-0">21 Minutes ago</p>
                                                <div class="ms-5">
                                                    <button class="reply-btn" @click="replyInput=!replyInput">
                                                        <img src="/images/frontend/find-task/reply-icon.svg" alt="">
                                                        <span class="text-brand">Reply</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div v-if="replyInput" class="">
                                                <span class="textarea reply-input" role="textbox" contenteditable></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
    const selected = ref(null);
    const offerActive = ref(true);
    const replyInput = ref(false);
    const hasQuestion = ref(true);
    const options = ref(['Most Recent', 'Last Month', 'All'])
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
textarea::-webkit-resizer {
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
.sticky-taskbar-section{
    height: 95vh;
    position: sticky;
    top: 80px;
    transition: all 0.3s ease;
    display: inline-block;
    overflow: hidden;
    width: 98%;
}
.sidebar-width{
    max-width: 405px;
}
.sticky-taskbar-section:hover{
    overflow-y: overlay;

}
.sticky-taskbar-section::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.sticky-taskbar-section::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

.sticky-taskbar-section::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #ece0f3;
}
.upload-img-box{
    position: relative;
    height: 130px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed var(--purpleLight);
    border-radius: 2px;
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
.details-img{
    height: 155px;
    max-width: 250px;
}
.details-img img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.reply-btn{
    background: none;
    border: none;
    font-size: 15px;
}
.reply-input{
    display: block;
    width: 100%;
    overflow: hidden;
    resize: both;
    min-height: 50px;
    line-height: 20px;
    background-color: rgb(243, 243, 243);
    border: none;
    border-radius: 30px;
    max-width: 80%;
    padding: 10px 20px;
}
.reply-input:focus{
    outline: none;
    border: 1px solid lightgrey;
}
.reply-input{
    resize: none;
}
.user-img img{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
}
.question-user-img img{
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
}
@media only screen and (max-width:1399px){
.sidebar-width{
    max-width: 340px;
    margin: 0 auto;
}
}
@media only screen and (max-width:991px){
    .sticky-taskbar-section{
    height: 23vh;
}
.sidebar-width{
    max-width: 680px;
    margin: 0 auto;
}
}
@media only screen and (max-width:475px){
    .details-img{
    height: 100px;
    max-width: 250px;
}
}
</style>