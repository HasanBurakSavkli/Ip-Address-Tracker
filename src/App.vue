<template>
  <div class="flex flex-col max-h-screen h-screen">
    <header class="relative z-20 bg-hero-pattern bg-cover h-1/3 relative flex flex-col items-center pt-8">
      <div class="max-w-screen-sm w-full px-4">
        <h1 class="capitalize text-white text-center text-3xl">IP address tracker</h1>
        <div class="flex mt-4">
          <input v-model="ipSearch" type="text" placeholder="Search for any IP address or domain (8.8.8.8)" class="w-full py-2 px-4 rounded-l-xl focus:outline-none" />
          <div @click="getIp" class="flex items-center justify-center p-4 bg-black hover:bg-gray-700 transition rounded-r-xl cursor-pointer">
            <img src="./assets/ip-address-tracker-master/images/icon-arrow.svg" />
          </div>
        </div>
      </div>

      <TheInfo v-if="ipInfo" :ipInfo="ipInfo" />
      <div v-if="isLoading" class="text-2xl font-medium text-white absolute bottom-8 ">Loading...</div>
    </header>

    <div id="mapid" class="h-2/3 z-10"></div>
  </div>
</template>

<script setup>
import TheInfo from './components/TheInfo.vue';
import leaflet from 'leaflet';
import {onMounted, ref} from 'vue'
import axios from 'axios'

let mymap;

const ipSearch = ref("")
const ipInfo = ref(null)
const isLoading = ref(false)

onMounted(() => {
  mymap = leaflet.map('mapid').setView([51.505, -0.09], 10);

  leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnVyYWtzYXZrbGkiLCJhIjoiY2t1NnFwOWg3M250dDJ1cDhyZDcxdTlzbiJ9.vTNNM7Ksue79dhRGSWJL_g', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnVyYWtzYXZrbGkiLCJhIjoiY2t1NnFwOWg3M250dDJ1cDhyZDcxdTlzbiJ9.vTNNM7Ksue79dhRGSWJL_g',
  }).addTo(mymap);
})

const getIp = async () => {
  try {
    isLoading.value = true
    const data = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_RpsHpf2AOBTrvuRSdCPfZ84eqf0SE&ipAddress=${ipSearch.value}`)
    console.log(data.data);
    const result = data.data
    ipInfo.value = {
      address : result.ip,
      location : result.location.city,
      timezone : result.location.timezone,
      isp : result.isp,
      lat : result.location.lat,
      lon : result.location.lng
    },
    isLoading.value = false
    leaflet.marker([ipInfo.value.lat, ipInfo.value.lon]).addTo(mymap);
    mymap.setView([ipInfo.value.lat, ipInfo.value.lon], 13);
  } catch (err) {
    console.log(err.message)
  }
}

</script>


<style>
* {
  font-family: 'Rubik', sans-serif;
}
</style>
