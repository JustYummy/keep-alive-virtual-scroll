<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();

const goToPage1 = () => {
  route.push("/Comp1/Comp11").catch((err) => console.log(err));
};

const goToPage2 = () => {
  route.push("/Comp1/Comp12").catch((err) => console.log(err));
};

const includeData = ref(["/Comp11", "/Comp12"]);
</script>

<template>
  <div class="row">RouterView3 Comp1</div>

  <div class="row">
    <q-btn label="Comp11" @click="goToPage1"></q-btn>
    <q-btn label="Comp12" @click="goToPage2"></q-btn>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive v-if="$route.meta.keepAlive" :include="includeData">
      <component :is="Component" :key="$route.path"></component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive"></component>
  </router-view>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
