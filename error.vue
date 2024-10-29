<template>
<section class="bg-primary-500 flex items-center justify-center h-screen">
  <div class="text-center">
    <h1 class=" text-display-large  font-calypso text-secondary1-500">{{ error.statusCode }}</h1>
    <p class="text-headline-medium text-secondary1-500 mt-2 mb-1">Oops! Page not found.</p>
    <p class="text-secondary1-500 mt-2">Beauty can be found in the most unexpected places, just not here. 😁</p>
    <a @click="handleError" class="mt-6 inline-block text-secondary1-500 cursor-pointer text-label-large underline underline-offset-4 decoration-double hover:text-secondary1-800 ">Go Home</a>
  </div>
</section>
</template>

<script setup lang="ts">
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<style scoped></style>
