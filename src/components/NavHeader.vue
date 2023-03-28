<script setup>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import {MENU, store} from "@/store.js";

function changeCurrentTab(value) {
  store.currentPage = value;
}

</script>

<template>
  <header>
    <div>
      <nav v-for="item in MENU">
        <a @click="changeCurrentTab(item)" class="text-black">{{ $t(item.label) }}</a>
      </nav>
      <div class="inline-flex items-center">
        <LanguageSwitcher/>
      </div>
    </div>
  </header>
</template>