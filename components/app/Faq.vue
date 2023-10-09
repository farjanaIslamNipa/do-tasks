<template>
<div class="pt-5">
  <div class="container">
    <h1 class="text-brand text-center mb-lg-5 mb-4">Frequently Asked Questions</h1>
    <div class="row justify-content-center">
      <div class="col-xl-10">
        <div class="faq-accordion">
          <div id="accordionExample" class="accordion">
            <div class="accordion-item">
              <h2 id="headingOne" class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What type of tasks are available?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  There’s a huge range of tasks on DoTasks. From home maintenance tasks such as cleaning, gardening and handyman tasks to office-based tasks, such as admin, graphic design, and web design tasks. There are also a bunch of interesting tasks as well, for example, pet grooming, makeup artistry, tutoring, and cabinet making. <br>The customer will let you know if the task needs to be completed in person or remote and provide dates that tasks need to be completed by.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingTwo" class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Who will I be working with?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  There’s a huge range of tasks on DoTasks. From home maintenance tasks such as cleaning, gardening and handyman tasks to office-based tasks, such as admin, graphic design, and web design tasks. There are also a bunch of interesting tasks as well, for example, pet grooming, makeup artistry, tutoring, and cabinet making.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingThree" class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What type of tasks are available?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  There’s a huge range of tasks on DoTasks. From home maintenance tasks such as cleaning, gardening and handyman tasks to office-based tasks, such as admin, graphic design, and web design tasks. There are also a bunch of interesting tasks as well, for example, pet grooming, makeup artistry, tutoring, and cabinet making.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingFour" class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How do I get assigned to a task?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  There’s a huge range of tasks on DoTasks. From home maintenance tasks such as cleaning, gardening and handyman tasks to office-based tasks, such as admin, graphic design, and web design tasks. There are also a bunch of interesting tasks as well, for example, pet grooming, makeup artistry, tutoring, and cabinet making.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingFive" class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  How do I get paid?
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  There’s a huge range of tasks on DoTasks. From home maintenance tasks such as cleaning, gardening and handyman tasks to office-based tasks, such as admin, graphic design, and web design tasks. There are also a bunch of interesting tasks as well, for example, pet grooming, makeup artistry, tutoring, and cabinet making.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingSix" class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Is there insurance?
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  There’s a huge range of tasks on DoTasks. From home maintenance tasks such as cleaning, gardening and handyman tasks to office-based tasks, such as admin, graphic design, and web design tasks. There are also a bunch of interesting tasks as well, for example, pet grooming, makeup artistry, tutoring, and cabinet making.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-center">
      <h3 class="text-brand fw-bold text-center text-capitalize mb-3">further any query</h3>
      <button class="rounded-fill-btn py-2">Contact Us&nbsp;<span><i class="fa-solid fa-arrow-right-long"></i></span></button>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
.faq-accordion .accordion-item {
  border: 0 !important;
  border-radius: 0 !important;
  margin-bottom: 20px !important;
}

.faq-accordion .accordion-button {
  border: 1px solid var(--brandColor) !important;
  border-radius: 0 !important;
  font-size: 20px;
}

.faq-accordion .accordion-button:not(.collapsed) {
  background: linear-gradient(90deg, var(--brandColor) 0%, var(--purpleLight) 35%, var(--purpleLighter) 80%, var(--purpleLighter) 100%);
  border: 1px solid white !important;
  border-radius: 0 !important;
  color: #fff;

  box-shadow: none !important;
  transition: all 0.3s ease;
}

.faq-accordion .accordion-button:not(.collapsed)::after {
  background-image: url('/images/frontend/earn-money-as-tasker/up-arrow.svg');
}

.faq-accordion .accordion-body {
  background-color: var(--purpleLighter);
  font-size: 17px;
}

.faq-accordion .accordion-header {
  border: none !important;
}
</style>