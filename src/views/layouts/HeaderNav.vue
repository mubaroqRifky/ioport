<template>
    <header
        class="px-2 py-4 md:py-6 bg-lightGray border-b border-solid border-gray"
    >
        <section class="flex items-center justify-between max-container">
            <div class="font-bold">
                <h1 class="text-xl md:text-2xl flex items-center">
                    <div class="w-10 h-auto">
                        <img
                            class="w-full h-full object-contain"
                            :src="LogoImage"
                            alt="My Profile Logo"
                        />
                    </div>
                    MyProfile
                </h1>
            </div>

            <nav class="hidden sm:block">
                <ul class="flex items-center gap-8">
                    <li v-for="(item, index) in nav_links" :key="index">
                        <a :href="item.link">{{ item.title }}</a>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
</template>

<script setup>
import LogoImage from "@/assets/images/logo.png";

const nav_links = [
    {
        id: 1,
        title: "Projects",
        link: "/home#projects",
    },
    {
        id: 2,
        title: "Experience",
        link: "/home#experience",
    },
    {
        id: 3,
        title: "Contact",
        link: "/home#contact",
    },
];
</script>

<style></style>
