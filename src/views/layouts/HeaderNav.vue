<template>
    <header class="px-2 py-2 bg-gray border-b border-solid border-lightGray">
        <section class="flex items-center justify-between max-container">
            <div class="font-bold">
                <h1 class="text-xl md:text-2xl flex items-center">
                    <img :src="LogoImage" alt="My Profile Logo" />
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
