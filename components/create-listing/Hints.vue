<template>
    <div class="d-flex bg-purple-lighter px-2 p-mdy-4 py-2 rounded mb-4">
        <div class="ms-3">
            <div class="d-flex align-items-end mb-1">
                <div class="me-2"><img class="hints-icon" src="/images/frontend/general/hints-icon.svg" alt=""></div>
                <h6 class="text-brand text-18 fw-bold mb-0">Hints</h6>
            </div>
            <p class="mb-0 text-gray">Don't see your category? Just select 'Other'. We encourage creativity and new
                categories!</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hints-icon{
    height: 30px;
}
@media (max-width:767px) {
    .hints-icon{
        height: 25px;
    }
}
</style>