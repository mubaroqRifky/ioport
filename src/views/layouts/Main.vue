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

import { StatusBar, Style } from "@capacitor/status-bar";
import { isPlatform } from "@ionic/vue";

if (isPlatform("mobile") && !isPlatform("mobileweb")) {
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setStyle({ style: Style.Light });
    StatusBar.setBackgroundColor({ color: "#e3e3e3" });
}
</script>

<style lang="scss">
#main {
    @apply bg-white flex-1 flex flex-col overflow-hidden;
}

.max-container {
    @apply max-w-[90%] md:max-w-[85%] lg:max-w-[900px] xl:max-w-[1100px] mx-auto;
}
</style>
