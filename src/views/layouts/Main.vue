<template lang="">
    <main id="main" class="mobile-width-constraint">
        <router-view></router-view>
    </main>
</template>

<script setup></script>

<style lang="scss">
#main {
    @apply bg-softGray flex-1 flex flex-col overflow-hidden;
}
</style>
