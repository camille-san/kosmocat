<script setup>
import translation from "@/i18n/translation"
import {LANG} from "@/lang_utils.js";

const switchLanguage = async (event) => {
    console.log(JSON.stringify(event.target.value))
    await translation.switchLanguage(event.target.value)
}

</script>
<template>
    <select @change="switchLanguage" class="pl-2.5 pr-1.5 pb-0.5 text-slate-400 bg-transparent">
        <option
                v-for="l in LANG"
                :key="l.locale"
                :value="l.locale"
                :selected="translation.currentLocale === l.locale"
        >
            {{ $t(l.label) }}
        </option>
    </select>
</template>