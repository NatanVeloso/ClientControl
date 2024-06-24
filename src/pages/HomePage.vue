<template>
    <div class="row justify-center q-pt-md">
        <q-card class="col-12">
            <q-card-section>
                <q-input label="nome" v-model="nome"></q-input>
            </q-card-section>
        </q-card>
    </div>

</template>

<script lang="ts">
import { Component, toNative, Vue } from 'vue-facing-decorator';

@Component({ name: 'HomePage' })

export class HomePage extends Vue {
    nome: string | null = null

    

    created() {
        this.$q.loading.hide();
    }

} export default toNative(HomePage);
</script>

<style scoped>

</style>