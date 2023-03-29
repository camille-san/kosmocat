<script setup>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import {MENU, store} from "@/menu_utils.js";

function changeCurrentTab(value) {
    store.currentPage = value;
}

</script>

<template>
    <header class="w-2/3 mx-auto">
        <nav class="grid grid-cols-3 auto-cols-max pb-3 mb-6 px-3 font-medium">
            <div class="flex align-text-bottom">
                <img src="/star_logo.png" class="-rotate-12 w-5 h-5 mr-1 mt-1" alt="logo"/>
                <span class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-violet-400 text-lg">Kosmo</span>
            </div>
            <div class="flex col-span-2 justify-end text-sm">
                <ul v-for="item in MENU" class="flex flex-row mt-1">
                    <li>
                        <a @click="changeCurrentTab(item)"
                           :class="'font-bold hover:underline cursor-pointer mr-2 '+item.color">
                            {{ $t(item.label) }}
                        </a>
                    </li>
                </ul>
                <LanguageSwitcher/>
            </div>
        </nav>
    </header>
</template>