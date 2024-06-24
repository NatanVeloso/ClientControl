<template>
    <div>
        <h1>Messi</h1>
    </div>
</template>

<script lang="ts">
import { Component, toNative, Vue } from 'vue-facing-decorator';

@Component
export class Financeiro extends Vue {
    created() { this.$q.loading.hide(); }
} export default toNative(Financeiro);
</script>

<style scoped>

</style>