<script setup lang="ts">
import { useRouter } from "vue-router";

const route = useRouter();

const goToPage1 = () => {
  route.push("/Comp1").catch((err) => console.log(err));
};

const goToPage2 = () => {
  route.push("/Comp2").catch((err) => console.log(err));
};
</script>

<template>
  <div class="row">RouterView2</div>

  <div class="row">
    <q-btn label="Comp1" @click="goToPage1"></q-btn>
    <q-btn label="Comp2" @click="goToPage2"></q-btn>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive v-if="$route.meta.keepAlive">
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
