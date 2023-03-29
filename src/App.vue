<script setup>
import NavHeader from "@/components/NavHeader.vue";
import About from "@/pages/About.vue";
import Techno from "@/pages/Techno.vue";
import Contact from "@/pages/Contact.vue";
import {ABOUT, CONTACT, store, TECHNO} from "@/menu_utils.js";
import Footer from "@/components/Footer.vue";
import LinksFooter from "@/components/LinksFooter.vue";

function isActive(value) {
    return store.currentPage.label === value.label;
}
</script>

<template>
    <main class="star-bg mx-0 pt-10 h-screen w-screen text-sm text-slate-900 font-roboto">
        <div class="bg-white mt-6 p-3 shadow">
            <NavHeader/>
            <div class="w-2/3 py-3 mx-auto">
                <div v-if="isActive(ABOUT)">
                    <About/>
                </div>
                <div v-else-if="isActive(TECHNO)">
                    <Techno/>
                </div>
                <div v-else-if="isActive(CONTACT)">
                    <Contact/>
                </div>
            </div>
            <LinksFooter/>
        </div>
        <Footer/>
    </main>
</template>

<style>
.font-roboto {
    font-family: "Roboto", sans-serif;
}

.star-bg {
    background: rgba(224, 228, 243, 0.38);
}
</style>