<script setup>

</script>

<template>
    <div class="text-slate-500 grid grid-cols-5 gap-12">
        <div class="flex col-span-2 justify-end">
            <img src="/cat.jpeg" alt="Picture of Camille" width="200" height="200" class="rounded-full"/>
        </div>
        <div class="col-span-3">
            <div>
                <h1 class="text-2xl mb-2"><span
                        class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-violet-400">Camille Leonard</span>
                </h1>
            </div>
            <div class="text-sm">
                <ul class="list-disc pl-3.5">
                    <li class="font-bold">{{ $t('about.p1') }}</li>
                    <li>{{ $t('about.p2') }}</li>
                    <li>{{ $t('about.p3') }}</li>
                    <li>{{ $t('about.p4') }}</li>
                    <li>{{ $t('about.p5') }}</li>
                    <li>{{ $t('about.p6') }}</li>
                    <li>{{ $t('about.p7') }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>