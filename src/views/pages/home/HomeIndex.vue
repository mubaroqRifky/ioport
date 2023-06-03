<template>
    <section class="bg-gray mt-0.5 h-5xl flex flex-col">
        <div class="max-container grid grid-cols-2 gap-8 flex-1 items-center">
            <div>
                <p>Hy, My Name is</p>
                <h2 class="text-5xl font-bold uppercase">Mubaroq Rifky</h2>
                <h3 class="text-3xl" style="letter-spacing: 4.7px">
                    FRONTEND DEVELOPER
                </h3>

                <p class="mt-4 leading-5 italic">
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
            <div></div>
        </div>
    </section>

    <section class="max-container flex justify-between gap-12 py-24">
        <div
            class="bg-gray p-12 grid gap-4 text-center w-72"
            v-for="(item, index) in 3"
            :key="index"
        >
            <div>
                <h5 class="font-bold text-4xl">
                    LOGO <br />IS<br />
                    HERE
                </h5>
            </div>
            <p>Caption Here</p>
        </div>
    </section>

    <section class="bg-gray mt-0.5 py-20 flex flex-col">
        <h3 class="text-4xl text-center mb-20" style="letter-spacing: 10px">
            RECENTLY PROJECT
        </h3>

        <section class="max-container grid gap-8">
            <div class="flex gap-16">
                <div class="pt-6 flex gap-2 w-36">
                    <span class="timeline after:block">
                        <i class="circle"> </i>
                    </span>
                    <div class="mt-0.5">
                        <p>2023</p>
                        <p class="text-sm">Mei - Now</p>
                    </div>
                </div>

                <div class="flex-1 bg-white px-8 py-6">
                    <h4 class="text-lg font-semibold">
                        Product Development Request
                    </h4>
                    <p class="text-sm leading-3">
                        Laravel, Vue.js & Tailwind css
                    </p>
                    <p class="mt-4">
                        Product Development Request is an application that is
                        used to assist product development processes or new
                        product ideas that were previously done manually and
                        required a long time for approval from superiors, now it
                        can be done faster.
                    </p>
                </div>
            </div>
            <div class="flex gap-16">
                <div class="pt-6 flex gap-2 w-36">
                    <span class="timeline after:block">
                        <i class="circle"> </i>
                    </span>
                    <div class="mt-0.5">
                        <p>2023</p>
                        <p class="text-sm">Maret - Mei</p>
                    </div>
                </div>

                <div class="flex-1 bg-white px-8 py-6">
                    <h4 class="text-lg font-semibold">Fish Taking Order</h4>
                    <p class="text-sm leading-3">
                        Laravel, Vue.js & Tailwind css
                    </p>
                    <p class="mt-4">
                        The Fish Taking Order App is a web application that
                        assists partners or hatcheries in developing fish seeds
                        and selling these seeds to customers when they are ready
                        to harvest.
                    </p>
                </div>
            </div>
            <div class="flex gap-16">
                <div class="pt-6 flex gap-2 w-36">
                    <span class="timeline after:block">
                        <i class="circle"> </i>
                    </span>
                    <div class="mt-0.5">
                        <p>2023</p>
                        <p class="text-sm">April - Mei</p>
                    </div>
                </div>

                <div class="flex-1 bg-white px-8 py-6">
                    <h4 class="text-lg font-semibold">Web Assessment 360</h4>
                    <p class="text-sm leading-3">
                        Laravel, Vue.js & Tailwind css
                    </p>
                    <p class="mt-4">
                        Web Assessment 360 is an application created for the
                        assessment of employees who may get a promotion. With
                        this website, someone will get a test questionnaire and
                        the answers will then be submitted to the assessor.
                    </p>
                </div>
            </div>
            <div class="flex gap-16">
                <div class="pt-6 flex gap-2 w-36">
                    <span class="timeline after:hidden">
                        <i class="circle"> </i>
                    </span>
                    <div class="mt-0.5">
                        <p>2023</p>
                        <p class="text-sm">Januari - Maret</p>
                    </div>
                </div>

                <div class="flex-1 bg-white px-8 py-6">
                    <h4 class="text-lg font-semibold">Panenqu</h4>
                    <p class="text-sm leading-3">
                        Laravel, Vue.js & Tailwindcss
                    </p>
                    <p class="mt-4">
                        PanenQu is a brand from a startup company that is here
                        to deliver fresh fish from farmers directly to the hands
                        of buyers or fish connoisseurs, both live, frozen and
                        processed fish.
                    </p>
                </div>
            </div>
        </section>
    </section>

    <section class="max-container py-20">
        <h3 class="text-4xl text-center mb-20" style="letter-spacing: 10px">
            WORKING EXPERIENCE
        </h3>

        <section class="grid gap-8">
            <div class="bg-gray px-8 py-6 flex gap-8">
                <article>
                    <h4 class="text-lg font-semibold">
                        PT Central Proteina Prima
                    </h4>
                    <p class="text-sm leading-3">
                        Specialist Software Developer
                    </p>
                    <p class="mt-4">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed
                        to using 'Content here.
                    </p>
                </article>

                <div class="w-96 flex justify-end gap-2">
                    <div
                        class="flex flex-col items-end gap-[5rem] text-sm whitespace-nowrap"
                    >
                        <p>Juli 2022</p>
                        <p>Now</p>
                    </div>
                    <div class="flex flex-col gap-[5rem]">
                        <span class="timeline-working after:block">
                            <i class="circle"> </i>
                        </span>
                        <span class="timeline-working after:hidden">
                            <i class="circle"> </i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bg-gray px-8 py-6 flex gap-8">
                <article>
                    <h4 class="text-lg font-semibold">
                        The Artanata IT Solution
                    </h4>
                    <p class="text-sm leading-3">Frontend Developer</p>
                    <p class="mt-4">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed
                        to using 'Content here.
                    </p>
                </article>

                <div class="w-96 flex justify-end gap-2">
                    <div
                        class="flex flex-col items-end gap-[5rem] text-sm whitespace-nowrap"
                    >
                        <p>Juni 2021</p>
                        <p>Mei 2022</p>
                    </div>
                    <div class="flex flex-col gap-[5rem]">
                        <span class="timeline-working after:block">
                            <i class="circle"> </i>
                        </span>
                        <span class="timeline-working after:hidden">
                            <i class="circle"> </i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.timeline {
    @apply relative;

    &:after {
        @apply bg-darkGray absolute left-1/2;
        content: "";
        margin-top: -3px;
        transform: translateX(-50%);
        height: calc(100% + 2rem + 5px);
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
