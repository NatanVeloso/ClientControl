<template>
    <q-layout>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { Component, toNative, Vue } from 'vue-facing-decorator';

@Component
export class LoadingLayout extends Vue {

} export default toNative(LoadingLayout);
</script>

<style scoped>

</style>