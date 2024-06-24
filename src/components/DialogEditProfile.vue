<template>
    <div>
        <q-dialog v-model="showEditProfile" >
            <div class="row q-col-gutter-sm">
                <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
                    <q-card style="width: 500px; max-width: 80vw;">
                        <q-card-section class="row items-center q-py-sm bg-grey-4">
                        <div class="text-h6">Editar Perfil</div>
                        <q-space />
                        <q-btn icon="close" flat round dense @click="$emit('closeEditProfile')" />
                      </q-card-section>
                        <q-card-section class="q-pa-sm">
                            <q-list class="row">
                                <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <q-item-section side>
                                        <q-avatar size="100px">
                                            <img
                                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745">
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-btn label="Alterar Foto" class="text-capitalize" rounded color="info"
                                            type="file" style="max-width: 120px"></q-btn>
                                    </q-item-section>
                                </q-item>

                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input v-model="text" label="Nome de Usuário">
                                            <template v-slot:prepend>
                                                <q-icon color="blue" name="person" />
                                            </template>
                                        </q-input>
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input v-model="text" type="date" label="Data de Nascimento">

                                        </q-input>
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input v-model="data" label="Email ">
                                            <template v-slot:prepend>
                                                <q-icon color="orange" name="email" />
                                            </template>

                                        </q-input>
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input mask="###.###.###-##" v-model="nome" label="CPF">

                                            <template v-slot:prepend>
                                                <q-icon color="black" name="badge" />
                                            </template>
                                        </q-input>
                                    </q-item-section>
                                </q-item>

                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input v-model="telefone" mask="(##) #### - ####" label="Telefone">

                                            <template v-slot:prepend>
                                                <q-icon color="green" name="call" />
                                            </template>
                                        </q-input>
                                    </q-item-section>
                                </q-item>

                            </q-list>
                        </q-card-section>
                        <q-card-actions align="right" v-close-popup>
                            <q-btn class="text-capitalize  text-white" icon="save" color="green">Salvar</q-btn>
                        </q-card-actions>
                    </q-card>

                    <!-- <q-avatar>
                        <q-img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
                      </q-avatar>
                      <div class="col-12 row q-col-gutter-md">

                        <q-input class="col-6 q-pa-md" label="Nome de Usuário" v-model="nome" >
                          <template v-slot:prepend>
                            <q-icon name="person" />
                          </template>
                        </q-input>
                        <q-input label="Data de Nascimento" class="col-6 q-pa-md" v-model="data" type="date"
                          >

                        </q-input>
                      </div>
                      <div class="col-12 row q-col-gutter-md">

                        <q-input v-model="senha" class="col-6 q-pa-md" :type="isPwd ? 'password' : 'text'"
                          >
                          <template v-slot:append>
                            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                              @click="isPwd = !isPwd" />
                          </template>
                        </q-input>

                        <q-input class="col-6 q-pa-md"  v-model="email" type="email" prefix="Email:"
                          suffix="@gmail.com">
                          <template v-slot:prepend>
                            <q-icon name="mail" />
                          </template>
                        </q-input>
                      </div> -->


                </div>
            </div>
        </q-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Prop, toNative, Vue } from 'vue-facing-decorator';

@Component({
    emits: ['closeEditProfile']
})
export class DialogEditProfile extends Vue {

    @Prop({ type: Boolean, required: true, default: false })
    readonly showEditProfile!: boolean

    text: string = '';
    nome: string = '';
    data: string = '';
    telefone: string = '';

    closeEditProfile() {
        this.$emit('showEditperfil')
    }

} export default toNative(DialogEditProfile);
</script>

<style scoped>

</style>