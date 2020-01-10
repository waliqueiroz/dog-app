<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#"><span class="fas fa-dog"></span> Dog App</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/"><span class="fas fa-home"></span> Início</router-link>
                </li>
                <li class="nav-item">
                    <router-link tag="a" class="nav-link" to="/galeria"><span class="fas fa-image"></span> Galeria</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style>
</style>