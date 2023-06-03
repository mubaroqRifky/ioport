<template lang="">
    <span :style="styles" :class="className">
        <svg
            v-if="filled"
            :style="{ width, height }"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.6 27.5435L28.179 33.325L25.637 22.4285L34.1 15.097L22.9555 14.1515L18.6 3.875L14.2445 14.1515L3.09998 15.097L11.563 22.4285L9.02098 33.325L18.6 27.5435Z"
                fill="currentColor"
            />
        </svg>
        <svg
            v-else
            :style="{ width, height }"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.7555 14.136L34.9 15.097L26.4525 22.4285L28.979 33.325L19.4 27.5435L9.82102 33.325L12.363 22.4285L3.90002 15.097L15.0445 14.1515L19.4 3.875L23.7555 14.136ZM13.572 28.1635L19.4 24.645L25.2435 28.179L23.6935 21.545L28.8395 17.081L22.0505 16.492L19.4 10.23L16.765 16.4765L9.97602 17.0655L15.122 21.5295L13.572 28.1635Z"
                fill="currentColor"
            />
        </svg>
    </span>
</template>

<script>
export default {
    props: ["width", "height", "styles", "className", "filled"],
};
</script>

<style lang=""></style>
