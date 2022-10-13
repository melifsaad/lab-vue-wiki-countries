<template>
    <div class="column is-4" style="overflow: auto">
        <router-link :to="{name:'details', params:{code:countrie.alpha3Code}}" v-for="countrie in countries"
            class="media is-clickable" href="/ABW">
            <figure class="media-left">
                <p class="image is-64x64">
                    <!-- <img :src="getImage(countrie.alpha2Code)" :alt="countrie.name" /> -->
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{countrie.name.common}}</strong>
                    </p>
                </div>
            </div>
        </router-link>

    </div>

    <router-view></router-view>
</template>

<script setup>
import countries from '../assets/countries.json';
</script>

<style scoped>

</style>