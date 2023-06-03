<template>
    <header class="px-2 py-4 bg-gray">
        <section class="flex items-center justify-between max-container">
            <div class="font-bold uppercase">
                <h1 class="text-2xl">LOGO HERE</h1>
            </div>

            <nav>
                <ul class="flex items-center gap-8">
                    <li v-for="(item, index) in 4" :key="index">
                        <a href="#">Just Text</a>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
</template>
<script>
export default {};
</script>
<style></style>
