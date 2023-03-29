<script setup>

</script>

<template>
    <div class="text-slate-500 px-3">
        <div class="text-center">
<!--                    class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-violet-400">Technologies</span>-->
            <h1 class="text-2xl mb-6"><span
                class="font-bold text-rose-400">{{$t('menu.techno')}}</span>
            </h1>
        </div>
        <div class="grid grid-cols-5 gap-5 text-sm">
            <div>
                <h3 class="font-bold text-amber-400 text-lg">Languages</h3>
                <ul class="list-disc pl-3.5">
                    <li>Java</li>
                    <li>Javascript</li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-rose-400 text-lg">Frameworks</h3>
                <ul class="list-disc pl-3.5">
                    <li>Spring Boot</li>
                    <li>Thymeleaf</li>
                    <li>Vue JS</li>
                    <li>React JS</li>
                    <li>Next JS</li>
                    <li>Ignite + GridGain</li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-rose-400 text-lg">UI</h3>
                <ul class="list-disc pl-3.5">
                    <li>Tailwind CSS</li>
                    <li>Primefaces</li>
                    <li>Vuetify</li>
                    <li>BootstrapVue</li>
                    <li>Material UI</li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-violet-400 text-lg">Databases</h3>
                <ul class="list-disc pl-3.5">
                    <li>PostgreSQL</li>
                    <li>Oracle DB</li>
                    <li>MySQL</li>
                    <li>Apache Cassandra</li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-violet-400 text-lg">DevOps</h3>
                <ul class="list-disc pl-3.5">
                    <li>Git CI</li>
                    <li>Docker + Compose</li>
                    <li>Jenkins</li>
                    <li>ELK stack</li>
                    <li>Graphite + Grafana</li>
                </ul>
            </div>
        </div>
    </div>
</template>