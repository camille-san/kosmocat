<script setup>
import translation from "@/i18n/translation"
const supportedLocales = translation.supportedLocales;

const switchLanguage = async (event) => {
  await translation.switchLanguage(event.target.value)
}

</script>

<template>
  <select @change="switchLanguage">
    <option
        v-for="locale in supportedLocales"
        :key="locale"
        :value="locale"
        :selected="translation.currentLocale === locale"
    >
      {{ locale }}
    </option>
  </select>
</template>