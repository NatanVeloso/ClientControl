<template>
    <div>
        <q-input label="nome" v-model="nome"></q-input>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        var nome = ref('');

        return {
            nome
        }
    }
})
</script>

<style scoped>

</style>