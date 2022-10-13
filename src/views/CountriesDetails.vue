<template>
    <section class="section" v-if="country">
        <router-link :to="{name:'details', params:{code:countrie.alpha3Code}}" v-for="countrie in countries">
<figure class="image is-128x128">
     <img :src="getImage(countrie.alpha2Code)" :alt="countrie.name" />
</figure>
</router-link>
<div class="title">{{France}}</div>
<table class="table is-fullwidth">
    <tbody>
        <tr>
            <td>Capital</td>
            <td>Paris</td>
        </tr>
        <tr>
            <td>Area</td>
            <td>551695 km <sup>2</sup></td>
        </tr>
        <tr>
            <td>Borders</td>
            <td>
                <ul>
                    <li><a href="/AND">Andorra</a></li>
                    <li><a href="/BEL">Belgium</a></li>
                    <li><a href="/DEU">Germany</a></li>
                    <li><a href="/ITA">Italy</a></li>
                    <li><a href="/MCO">Monaco</a></li>
                    <li><a href="/ESP">Spain</a></li>
                    <li><a href="/CHE">Switzerland</a></li>
                </ul>
            </td>
        </tr>

    </tbody>
</table>
</section>
</template>
<script setup>
</script>
<style scoped>
</style>