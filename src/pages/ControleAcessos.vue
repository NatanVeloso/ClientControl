<template>
    <div>
        <h1>CR7</h1>
    </div>
</template>

<script lang="ts">
import { Component, toNative, Vue } from 'vue-facing-decorator';

@Component
export class ControleAcessos extends Vue {
    created() { this.$q.loading.hide(); }
} export default toNative(ControleAcessos);
</script>

<style scoped>

</style>