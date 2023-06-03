<template>
    <HeaderNav />
    <main id="main">
        <router-view></router-view>
    </main>
    <Footer />
</template>

<script setup>
import Footer from "./Footer.vue";
import HeaderNav from "../layouts/HeaderNav.vue";
</script>

<style lang="scss">
#main {
    @apply bg-white flex-1 flex flex-col overflow-hidden;
}

.max-container {
    @apply max-w-[1100px] mx-auto;
}
</style>
