<script setup>
import NavHeader from "@/components/NavHeader.vue";
import Home from "@/pages/Home.vue";
import Cv from "@/pages/Cv.vue";
import {CV, HOME, store} from "@/store.js";

function isActive(value) {
  return store.currentPage.label === value.label;
}
</script>

<template>
  <main class="container bg-slate-50 m-auto p-5 w-2/3 h-screen text-sm text-slate-900">
    <NavHeader/>
    <div v-if="isActive(HOME)">
      <Home/>
    </div>
    <div v-else-if="isActive(CV)">
      <Cv/>
    </div>
  </main>
</template>

<style>
:root {
  background: url("@/assets/bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>