<script setup>
</script>

<template>
    <div class="w-2/3 mx-auto mt-12 px-3 text-center bottom-0">
        <div class="flex justify-center">
            <div>
                <button type="button"
                        onclick="window.open('https://github.com/camille-san','_blank')"
                        class="text-xs text-white bg-amber-400 font-medium rounded-lg px-2 py-1 text-center mr-2 mb-2">
                    <font-awesome-icon :icon="['fab', 'github']" class="mr-1"/>
                    Github
                </button>
                <button type="button"
                        onclick="window.open('https://www.linkedin.com/in/camilleleonard/','_blank')"
                        class="text-xs text-white bg-emerald-400 font-medium rounded-lg px-2 py-1 text-center mr-2 mb-2">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-1"/>
                    Linkedin
                </button>
            </div>
        </div>
    </div>
</template>