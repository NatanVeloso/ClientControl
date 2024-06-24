<template>
    <div>
        <h1>Agenda</h1>
    </div>
</template>

<script lang="ts">
import { Component, toNative, Vue } from 'vue-facing-decorator';

@Component
export class Agenda extends Vue {
    created() { this.$q.loading.hide(); }
} export default toNative(Agenda);
</script>

<style scoped>

</style>