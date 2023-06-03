<template>
    <section class="bg-gray h-[28rem] md:h-5xl flex flex-col">
        <div
            class="max-container grid md:grid-cols-2 gap-8 flex-1 items-center"
        >
            <div class="text-center md:text-left">
                <p>Hy, My Name is</p>
                <h2 class="text-3xl md:text-5xl font-bold uppercase">
                    Mubaroq Rifky
                </h2>
                <h3 class="text-base lg:text-3xl" style="letter-spacing: 4.7px">
                    FRONTEND DEVELOPER
                </h3>

                <p class="text-xs md:text-sm mt-4 md:leading-5 italic">
                    I am very interested in programming. I like it because
                    programming requires us to think and develop. It makes me
                    feel very challenged and because of that I am someone who is
                    never bored or never get tired. The programming language
                    that I like is JavaScript, because with it we can create a
                    web app, mobile app and even desktop-based app. if there is
                    a case that I have never encountered, then at that time I am
                    so excited, because within that I can learn a new thing and
                    I know how to get the answer. And no matter how long it will
                    take, I will make sure to get the answer. because all of
                    this is about passion and self-development.
                </p>
            </div>
            <div class="hidden md:block"></div>
        </div>
    </section>

    <section
        class="max-container flex flex-wrap justify-center gap-6 md:gap-12 py-16 md:py-24"
    >
        <div
            class="bg-gray p-4 md:p-12 grid gap-4 text-center w-32 md:w-72"
            v-for="(item, index) in slogans"
            :key="index"
        >
            <div>
                <h5 class="font-bold md:text-4xl">
                    LOGO <br />IS<br />
                    HERE
                </h5>
            </div>
            <p class="text-xs md:text-base uppercase">{{ item.title }}</p>
        </div>
    </section>

    <section class="bg-gray mt-0.5 py-10 md:py-20 flex flex-col" id="projects">
        <h3
            class="text-base md:text-4xl text-center mb-10 md:mb-20"
            style="letter-spacing: 5px"
        >
            RECENTLY PROJECT
        </h3>

        <section class="max-container grid gap-8">
            <div
                class="flex flex-row-reverse md:flex-row gap-4 md:gap-16"
                v-for="(item, index) in projects"
                :key="index"
            >
                <div class="pt-4 md:pt-8 flex gap-2 md:w-36">
                    <span
                        class="timeline"
                        :class="
                            index < projects.length - 1
                                ? 'after:block'
                                : 'after:hidden'
                        "
                    >
                        <i class="circle"> </i>
                    </span>
                    <div class="hidden md:block mt-0.5">
                        <p>{{ item.year }}</p>
                        <p class="text-sm">{{ item.from }} - {{ item.to }}</p>
                    </div>
                </div>

                <div class="flex-1 bg-white p-4 md:px-8 md:py-6">
                    <h4
                        class="text-base md:text-lg font-semibold"
                        v-if="item.link"
                    >
                        <a
                            class="flex items-center gap-1"
                            :href="item.link"
                            target="_blank"
                        >
                            <IconLink class="w-4 h-4" />
                            {{ item.title }}
                        </a>
                    </h4>
                    <h4 class="text-md md:text-lg font-semibold" v-else>
                        {{ item.title }}
                    </h4>
                    <p class="text-xs leading-3 flex items-center gap-2">
                        <span class="flex items-center gap-1">
                            <IconWebsite class="w-4 h-4" />
                            <IconMobile class="w-3.5 h-3.5" />
                        </span>
                        {{ item.base }}
                    </p>
                    <p class="mt-4 text-xs md:text-sm leading-4">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
        </section>
    </section>

    <section class="max-container py-10 md:py-20" id="experience">
        <h3
            class="text-base md:text-4xl text-center mb-10 md:mb-20"
            style="letter-spacing: 5px"
        >
            WORKING EXPERIENCE
        </h3>

        <section class="flex flex-col gap-8">
            <div
                class="bg-gray px-4 py-3 md:px-8 md:py-6 grid md:flex gap-4 md:gap-8"
                v-for="(item, index) in experience"
                :key="index"
            >
                <article>
                    <h4 class="text-base md:text-lg font-semibold">
                        <a
                            class="flex items-center gap-1"
                            :href="item.link"
                            target="_blank"
                        >
                            <IconLink class="w-4 h-4" />
                            {{ item.title }}
                        </a>
                    </h4>
                    <p class="text-xs md:text-sm leading-3">
                        {{ item.position }}
                    </p>
                    <p class="mt-4 text-xs md:text-sm leading-4">
                        {{ item.desc }}
                    </p>
                </article>

                <div class="md:w-96 flex justify-end gap-2">
                    <div
                        class="flex md:flex-col justify-between items-end gap-2 md:gap-[5rem] text-xs md:text-sm whitespace-nowrap"
                    >
                        <p>{{ item.from }}</p>
                        <i class="block md:hidden">-</i>
                        <p>{{ item.to }}</p>
                    </div>
                    <div class="hidden md:flex flex-col gap-[5rem]">
                        <span class="timeline-working flex-1 after:block">
                            <i class="circle"> </i>
                        </span>
                        <span class="timeline-working after:hidden">
                            <i class="circle -mb-0.5"> </i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <section
        class="flex gap-4 overflow-x-auto px-4 md:ml-14 lg:ml-20 md:pr-14 lg:pr-20 mb-10 md:mb-20 scroll-hidden"
    >
        <div
            class="bg-gray px-4 md:px-8 py-4 md:py-6 flex gap-3 md:gap-6 min-w-[11.5rem] md:min-w-fit"
            v-for="(item, index) in language"
            :key="index"
        >
            <div>
                <h5 class="font-bold md:text-3xl text-center">
                    LOGO <br />IS<br />
                    HERE
                </h5>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-sm md:text-lg">{{ item.title }}</p>
                <div class="flex-1 flex flex-col gap-2">
                    <article class="text-xs md:text-sm leading-3 md:leading-4">
                        <p>{{ item.experience }}</p>
                        <p>Experience</p>
                    </article>
                    <div class="flex items-center text-cpp">
                        <IconStar
                            class="w-4 md:w-6 h-4 md:h-6"
                            v-for="(val, i) in 5"
                            :key="val"
                            :filled="val <= item.rate ? true : ''"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-gray py-10 md:py-20 mb-10 md:mb-20">
        <div
            class="max-container flex flex-wrap gap-4 md:gap-12 justify-center"
        >
            <div
                class="bg-white p-6 md:p-12 w-[45%] md:w-72 flex flex-col justify-center items-center text-center"
                v-for="(item, index) in frameworks"
                :key="index"
            >
                <div>
                    <h5 class="font-bold md:text-xl">
                        LOGO <br />IS<br />
                        HERE
                    </h5>
                </div>
                <p class="text-sm md:text-lg mt-2">{{ item.title }}</p>
                <div class="flex items-center text-cpp">
                    <IconStar
                        v-for="(val, i) in 5"
                        :key="val"
                        class="w-5 md:w-8 h-5 md:h-8"
                        :filled="val <= item.rate ? true : ''"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconStar from "@/components/icons/IconStar.vue";
import IconLink from "@/components/icons/IconLink.vue";
import IconWebsite from "@/components/icons/IconWebsite.vue";
import IconMobile from "@/components/icons/IconMobile.vue";

const slogans = [
    {
        id: 1,
        title: "Passion",
        image: "",
    },
    {
        id: 2,
        title: "Occupation",
        image: "",
    },
    {
        id: 3,
        title: "Inovation",
        image: "",
    },
];

const language = [
    {
        id: 1,
        title: "Vue.js",
        experience: "1+ Year",
        rate: 5,
        image: "",
    },
    {
        id: 2,
        title: "React.js",
        experience: "2+ Year",
        rate: 4,
        image: "",
    },
    {
        id: 3,
        title: "Laravel",
        experience: "2+ Year",
        rate: 4,
        image: "",
    },
    {
        id: 4,
        title: "Sass",
        experience: "3+ Year",
        rate: 5,
        image: "",
    },
    {
        id: 5,
        title: "Tailwindcss",
        experience: "2+ Year",
        rate: 5,
        image: "",
    },
    {
        id: 6,
        title: "Bootstrap",
        experience: "2+ Year",
        rate: 5,
        image: "",
    },
    {
        id: 7,
        title: "Ionic",
        experience: "1+ Year",
        rate: 4,
        image: "",
    },
    {
        id: 8,
        title: "React Native",
        experience: "1+ Year",
        rate: 4,
        image: "",
    },
];
const frameworks = [
    {
        id: 1,
        title: "Javascript",
        rate: 5,
        image: "",
    },
    {
        id: 2,
        title: "PHP",
        rate: 4,
        image: "",
    },
    {
        id: 3,
        title: "Node.js",
        rate: 4,
        image: "",
    },
    {
        id: 4,
        title: "HTML5",
        rate: 5,
        image: "",
    },
    {
        id: 5,
        title: "CSS3",
        rate: 5,
        image: "",
    },
];

const experience = [
    {
        id: 1,
        title: "PT Central Proteina Prima Tbk",
        position: "Specialist Software Developer",
        from: "Juli 2022",
        to: "Now",
        link: "https://www.cpp.co.id/",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.",
    },
    {
        id: 2,
        title: "The Artanata IT Solution",
        position: "Frontend Developer",
        from: "Juni 2021",
        to: "Mei 2022",
        link: "https://artanata.com/",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.",
    },
];

const projects = [
    {
        id: 1,
        title: "Product Development Request",
        base: "Website, Mobile Web",
        desc: "Product Development Request is an application that is used to assist product development processes or new product ideas that were previously done manually and required a long time for approval from superiors, now it can be done faster.",
        link: "",
        year: 2023,
        from: "Mei",
        to: "Now",
    },
    {
        id: 2,
        title: "Fish Taking Order",
        base: "Website, Mobile Web & Mobile App",
        desc: "The Fish Taking Order App is a web application that assists partners or hatcheries in developing fish seeds and selling these seeds to customers when they are ready to harvest.",
        link: "https://fishtakingorder-dev.cpp.co.id/",
        year: 2023,
        from: "Maret",
        to: "Mei",
    },
    {
        id: 3,
        title: "Assessment 360",
        base: "Website, Mobile Web",
        desc: "Web Assessment 360 is an application created for the assessment of employees who may get a promotion. With this website, someone will get a test questionnaire and the answers will then be submitted to the assessor.",
        link: "https://ass360-dev.cpp.co.id/",
        year: 2023,
        from: "April",
        to: "Mei",
    },
    {
        id: 4,
        title: "Panenqu",
        base: "Website, Mobile Web",
        desc: "PanenQu is a brand from a startup company that is here to deliver fresh fish from farmers directly to the hands of buyers or fish connoisseurs, both live, frozen and processed fish.",
        link: "https://panenqu.com/",
        year: 2023,
        from: "Januari",
        to: "Maret",
    },
];
</script>

<style lang="scss" scoped>
.timeline {
    @apply relative;

    &:after {
        @apply bg-darkGray absolute left-1/2 -mt-[1rem] md:-mt-[3px];
        content: "";
        transform: translateX(-50%);
        height: calc(100% + 3rem + 5px);
        width: 2px;
    }
}
.timeline-working {
    @apply relative;

    &:after {
        @apply bg-darkGray absolute left-1/2;
        content: "";
        margin-top: -3px;
        transform: translateX(-50%);
        height: calc(100% + 4rem + 5px);
        width: 2px;
    }
}

.circle {
    @apply bg-darkGray inline-block w-5 h-5 rounded-full relative;
    &::after {
        @apply bg-white w-2 h-2 rounded-full inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10;
        content: "";
    }
}
</style>
