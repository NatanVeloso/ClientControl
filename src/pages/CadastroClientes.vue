<template>
    <div>
        <h1>Neymar</h1>
    </div>
</template>

<script lang="ts">
import { Component, toNative, Vue } from 'vue-facing-decorator';

@Component
export class CadastroClientes extends Vue {
    created() { this.$q.loading.hide(); }
} export default toNative(CadastroClientes);
</script>

<style scoped>

</style>