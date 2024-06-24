<template>
    <q-page id="bgImage" class="content-center">
        <div class="row col-12 flex flex-center">
            <q-card class="col-5 q-pa-md" style="min-width: 300px;">
                <q-card-section>
                    <p class="text-h3 text-center q-pb-md text-blue-grey-9 text-bold">Login</p>
                    <div :class=" $q.screen.xs ? 'row q-col-gutter-sm' : 'row q-col-gutter-sm q-px-lg'">
                        <q-input v-model="model.user" label="Usuário" class="col-12" outlined color="white"
                            :error="v$.model.user.$invalid && v$.model.user.$error"
                            :error-message="errorsMsgs.informUser" />
                        <q-input v-model="model.password" label="Senha" class="col-12" outlined  
                            color="white" :type="isPwd ? 'password' : 'text'"
                            :error="v$.model.password.$invalid && v$.model.password.$error"
                            :error-message="errorsMsgs.informPassword">
                            <template v-slot:append>
                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                    @click="isPwd = !isPwd" />
                            </template>
                        </q-input>
                    </div>
                    <p class="text-right text-white text-subtitle2 cursor-pointer">Esqueci minha senha</p>
                    <div class="row justify-center">
                        <q-btn label="Entrar" class="col-6 darkBlue text-white" rounded @click="logar()"></q-btn>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script lang="ts">
import { Component, Setup, toNative, Vue } from 'vue-facing-decorator';
import * as models from '../util/models';
import { useVuelidate, type Validation } from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'
import { Notify } from 'quasar';
import { ErrorsMsgs } from '../util/ErrorsMsgs';

@Component({
    options: {
        validations() {
            return {
                model: {
                    user: { required },
                    password: { required, minLength: minLength(3) }
                }
            }
        }
    }
})
export class LoginPage extends Vue {
    public model: models.UserLogin = new models.UserLogin();
    isPwd: boolean = true;
    errorsMsgs = ErrorsMsgs

    @Setup(() => useVuelidate())
    v$!: Validation

    logar() {
        this.v$.$touch();
        if (this.v$.$invalid) Notify.create({ message: 'Preencha os campos obrigatórios.', timeout: 4000, icon: 'warning', progress: true, color: 'red' })
    }

} export default toNative(LoginPage)
</script>

<style scoped>
#bgImage {
    background: url("public/img/Loading.jpg") no-repeat;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
}

.q-card {
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.123);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.329);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.bg-transparent {
    background: rgb(255, 0, 0) !important;
}

.darkBlue {
    background: #012b5e;
}
</style>