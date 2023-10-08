<template>
    <div class="">
        <header>
            <div class="bg-purple-lighter list-my-services-header py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="">
                                <h1 class="fw-bold pe-5">List your skills fast and free, <span class="text-brand">with Listings</span></h1>
                                <h5>Advertise your skills to millions of people on HiTasks looking to get more done</h5>
                                <div class="pt-4">
                                    <NuxtLink to="/create-listing" class="rounded-fill-btn rounded-0">Create my first listing</NuxtLink>
                                </div>
                                <p class="text-brand mt-4 ms-5 ps-5 mb-0">It’s FREE!</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ul class="slideshow">
                                <li><span></span></li>
                                <li><span>2</span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                            </ul>
                            <!-- <div class="sliding-image">
                                
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <section class="pt-md-5 pt-3">
                    <div class="row align-items-center py-md-4 py-0">
                        <div class="col-md-6">
                            <div>
                                <img src="/images/frontend/list-my-services/unlimited-listing.png" alt="" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <h2 class="text-brand fw-bold mb-4">Create unlimited listings.</h2>
                                <h5>Set up as many listings as you like for all the services you wish to offer. You define the service, your availability and price packages. We’ll be there to guide you and ensure you create a listing customers will love.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row py-md-4 py-0">
                        <div class="col-md-6 order-md-1 order-2">
                            <div>
                                <div class="text-end mb-3 d-lg-block d-none"><img src="/images/frontend/list-my-services/icon-1.svg" alt="" class="img-fluid icon-img"></div>
                                <h2 class="text-brand fw-bold mb-4 pt-5">Get found by buyers.</h2>
                                <h5>Buyers can browse and discover listings all within the existing HiTasks app. Your listing will be shown with other listings for buyers to find, compare and book.</h5>
                            </div>
                        </div>
                        <div class="col-md-6 order-md-2 order-1">
                            <div class="text-md-end text-center pt-md-5 pt-3">
                                <img src="/images/frontend/list-my-services/get-found.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col-md-6">
                            <div class="pt-md-5 pt-0">
                                <img src="/images/frontend/list-my-services/get-booked.png" alt="" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <div class=" d-lg-block d-none"><img src="/images/frontend/list-my-services/icon-2.svg" alt="" class="img-fluid icon-img"></div>
                                <div class="ms-lg-5 ms-0 pt-lg-4 pt-0">
                                    <h2 class="text-brand fw-bold mb-4 pt-5">Get booked. Like magic.</h2>
                                    <h5>Buyers can automatically book your listing for one of the price packages you set. You’ll be notified of new bookings and can update your availability or pause a listing anytime.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section class="bg-purple-lighter">
                <div class="container">
                    <div class="text-center py-5">
                        <h5 class="fw-bold">Start for free!</h5>
                        <h5 class="fw-bold text-brand">Create unlimited listings</h5>
                        <div class="mt-4 mb-3">
                            <NuxtLink to="/create-listing" class="rounded-fill-btn">Create listing</NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pt-5 mt-md-5 mt-0">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="mb-md-0 mb-4">
                                <img class="img-fluid" src="/images/frontend/list-my-services/mobile-design.png" alt="">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-center">
                                <h3 class="text-brand fw-bold text-center">Monetise your special skills</h3>
                                <h5>Find inspiration in the wide range of listings others are creating on Airtasker</h5>
                                <div class="mt-4 mb-md-0 mb-5">
                                    <NuxtLink to="/listing" class="rounded-outline-btn">Browse all listings</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-purple-lighter">
                <div class="container">
                    <div class="text-center py-5">
                        <h5 class="fw-bold">Start for free!</h5>
                        <h5 class="fw-bold text-brand">Create unlimited listings</h5>
                        <div class="mt-4 mb-3">
                            <NuxtLink to="/create-listing" class="rounded-fill-btn">Create listing</NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sliding-image{
    background-image: url('/images/frontend/list-my-services/painting.png');
    height: 500px;
    background-size: cover;
    background-position: center center;
    animation: slideshow 10s linear;
}
@keyframes slideshow {
    25% {
        background-image: url('/images/frontend/list-my-services/cleaning.png');
    }
    50% {
        background-image: url('/images/frontend/list-my-services/gardenning.png');
    }
    75% {
        background-image: url('/images/frontend/list-my-services/photography.png');
    }
    100% {
        background-image: url('/images/frontend/list-my-services/cleaning.png');
    }
}
.list-my-services-header{
    height: 500px;
    display: flex;
    align-items: center;
}
.slideshow {
  list-style-type: none;
}

/** SLIDESHOW **/


.slideshow li span { 
	position: absolute;
    min-width: 600px;
    min-height: 450px;
    top: 10%; 
    right: 12%;
    color: transparent;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 30s linear infinite 0s; 
}



.slideshow li:nth-child(1) span { 
    background-image: url("/images/frontend/list-my-services/painting.png"); 
}
.slideshow li:nth-child(2) span { 
    background-image: url("/images/frontend/list-my-services/cleaning.png");
    animation-delay: 6s; 
}
.slideshow li:nth-child(3) span { 
    background-image: url("/images/frontend/list-my-services/gardenning.png");
    animation-delay: 12s; 
}
.slideshow li:nth-child(4) span { 
    background-image: url("/images/frontend/list-my-services/photography.png");   
    animation-delay: 18s; 
}
.slideshow li:nth-child(5) span { 
    background-image: url("/images/frontend/list-my-services/painting.png");
    animation-delay: 24s; 
}



@keyframes imageAnimation { 
    0% { opacity: 0; animation-timing-function: ease-in; }
    8% { opacity: 1; animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}


@keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}


.no-cssanimations .cb-slideshow li span {
	opacity: 1;
}
@media (max-width:1599px) {
    .slideshow li span{
        right: 6%;
        min-width: 500px;
    }
}
@media (max-width:1299px) {
    .slideshow li span{
        right: 6%;
    }
}
@media (max-width:1199px) {
    .slideshow li span{
        right: 4%;
  
    }
}
@media (max-width:991px) {
    .list-my-services-header{
    height: 400px;
}
    .slideshow li span{
        top: 5%;
        right: 4%;
        min-width: 400px;
    }
}
@media (max-width:767px) {
    .list-my-services-header{
    height: 400px;
}
    .slideshow {
        display: none !important;
    }
}
</style>