<template>
    <div>
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
    name: "Template",
    components: {
        Navbar,
    }
};
</script>

<style scoped>
</style>