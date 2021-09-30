<template>
  <div class="py-4 px-6 lg:py-8 lg:px-12 bg-white rounded-xl absolute -bottom-52 lg:-bottom-16 flex flex-col lg:flex-row gap-y-4 gap-x-12 lg:divide-x-2">
    <div class="flex flex-col text-center">
      <h3 class="uppercase text-xs mb-2 text-dark-grey">IP Address</h3>
      <span class="text-base lg:text-xl font-semibold text-very-dark-grey">{{ipInfo.address}}</span>
    </div>
    <div class="flex flex-col lg:pl-6 text-center">
      <h3 class="uppercase text-xs mb-2 text-dark-grey">Location</h3>
      <span class="text-base lg:text-xl font-semibold text-very-dark-grey">{{ipInfo.location}}</span>
    </div>
    <div class="flex flex-col lg:pl-6 text-center">
      <h3 class="uppercase text-xs mb-2 text-dark-grey">Timezone</h3>
      <span class="text-base lg:text-xl font-semibold text-very-dark-grey">{{ipInfo.timezone}}</span>
    </div>
    <div class="flex flex-col lg:pl-6 text-center">
      <h3 class="uppercase text-xs mb-2 text-dark-grey">Isp</h3>
      <span class="text-base lg:text-xl font-semibold text-very-dark-grey">{{ipInfo.isp}}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
    ipInfo : Object
})
</script>

<style></style>
