<template>
    <div class="py-md-5 py-3">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <UserSettingSidebar />
                </div>
                <div class="col-md-8">
                    <div class="bg-white rounded card-shadow py-4 px-4">
                        <h4 class="text-brand text-capitalize">Email & Notifications</h4>
                        <div class="basic-form">
                            <div class="d-sm-flex d-block">
                                <div class="mb-3 w-100 me-sm-3 me-0">
                                    <label for="">Email</label>
                                    <input type="email" class="form-control" placeholder="Enter your email address">
                                </div>
                                <div class="mb-3 w-100">
                                    <label for="">Password</label>
                                    <input type="password" class="form-control" placeholder="Enter your password">
                                </div>
                            </div>
                            <button class="rounded-fill-btn rounded py-2 mt-3 mb-3 button-small">Update email address</button>
                            <hr class="gray-line">
                            <div class="pt-4">
                                <h5 class="fw-bold text-capitalize">Transactional</h5>
                                <p class="text-gray">You will always receive important notifications about any payments, cancellations and your account.</p>
                                <div class="text-center mt-4 mb-5">
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="transactional-email-notification" class="form-check-input" type="radio" name="transactional-notification">
                                    <label class="form-check-label mb-0" for="transactional-email-notification">Email</label>
                                    </div>
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="push-notification" class="form-check-input" type="radio" name="transactional-notification">
                                    <label class="form-check-label mb-0" for="push-notification">Push</label>
                                    </div>
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="transactional-sms-notification" class="form-check-input" type="radio" name="transactional-notification">
                                    <label class="form-check-label mb-0" for="transactional-sms-notification">SMS</label>
                                    </div>
                                </div>
                                <hr class="gray-line">
                            </div>
                            <div class="pt-4">
                                <h5 class="fw-bold text-capitalize">reminders & updates</h5>
                                <p class="text-gray">Receive updates on any new comments, private messages, offers and reviews.</p>
                                <div class="text-center mt-4 mb-5">
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="updates-email-notification" class="form-check-input" type="radio" name="updates-notification">
                                    <label class="form-check-label mb-0" for="updates-email-notification">Email</label>
                                    </div>
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="updates-push-notification" class="form-check-input" type="radio" name="updates-notification">
                                    <label class="form-check-label mb-0" for="updates-push-notification">Push</label>
                                    </div>
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="updates-sms-notification" class="form-check-input" type="radio" name="updates-notification">
                                    <label class="form-check-label mb-0" for="updates-sms-notification">SMS</label>
                                    </div>
                                    <p class="text-start text-gray py-4">Friendly reminders if you’ve forgotten to accept an offer, release a payment or leave a review.</p>
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="reminder-email-notification" class="form-check-input" type="radio" name="reminder-notification">
                                    <label class="form-check-label mb-0" for="reminder-email-notification">Email</label>
                                    </div>
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="reminder-push-notification" class="form-check-input" type="radio" name="reminder-notification">
                                    <label class="form-check-label mb-0" for="reminder-push-notification">Push</label>
                                    </div>
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="reminder-sms-notification" class="form-check-input" type="radio" name="reminder-notification">
                                    <label class="form-check-label mb-0" for="reminder-sms-notification">SMS</label>
                                    </div>
                                </div>
                                <hr class="gray-line">
                            </div>
                                <div class="pt-4">
                                <h5 class="fw-bold text-capitalize">Recommended task alert</h5>
                                <p class="text-gray">Get notified about tasks we think you’d be interested in based on your activity on Airtasker.</p>
                                <div class="text-center mt-4 mb-lg-4 mb-0">
                                    <div class="form-check form-check-inline mb-2 mx-sm-3 mx-2">
                                    <input id="task-alert-push-notification" class="form-check-input" type="radio" name="task-alert-pushication">
                                    <label class="form-check-label mb-0" for="task-alert-push-notification">Push</label>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 text-end">
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

</script>

<style scoped>

</style>