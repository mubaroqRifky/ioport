<template>
    <div class="app-container">
        <RouterView> </RouterView>
    </div>
</template>

<script setup>
import { App as CapacitorApp } from "@capacitor/app";
import { Dialog } from "@capacitor/dialog";

CapacitorApp.addListener("backButton", ({ canGoBack }) => {
    if (!canGoBack) {
        alert(Dialog);
        Dialog.confirm({
            title: "Confirm",
            message: `Are you sure to exit the App?`,
        }).then(({ value }) => {
            if (value) CapacitorApp.exitApp();
        });
    }
});
</script>

<style scoped>
.app-container {
    @apply max-w-[2500px] mx-auto;
}
</style>
