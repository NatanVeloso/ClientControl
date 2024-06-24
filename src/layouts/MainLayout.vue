<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="tpoHeader()" elevated>
      <q-toolbar class=" justify-between">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="menuLateral" />
        <q-toolbar-title>
          {{ $router.currentRoute.value.name }}
        </q-toolbar-title>
        <div class="row q-gutter-x-lg items-center">
          <ChangeTheme />

          <q-btn round dense flat icon="notifications">
            <q-badge color="red" text-color="white" floating>2</q-badge>
            <q-tooltip>Notificações</q-tooltip>
          </q-btn>

          <div class="borderAvatar">
            <q-avatar style="cursor: pointer;">
              <q-img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745">
                <q-menu transition-show="rotate" transition-hide="rotate">
                  <q-list class="menu">
                    <q-item v-close-popup>
                      <q-item-section avatar>
                        <q-avatar>
                          <q-img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
                        </q-avatar>

                      </q-item-section>
                      <q-item-section>
                        <q-item-label> michel </q-item-label>
                        <q-item-label class="text-italic text-caption text-grey">Admin
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator />

                    <q-item  v-close-popup clickable @click="showEditProfile = true;">
                      <q-item-section avatar>
                        <i class="fa-solid fa-user"></i>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Editar Perfil</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator />

                    <q-item clickable v-close-popup>
                      <q-item-section avatar>
                        <i class="fa-solid fa-right-from-bracket"></i>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Sair</q-item-label>
                      </q-item-section>
                    </q-item>

                  </q-list>
                </q-menu>
              </q-img>

              <DialogEditProfile :showEditProfile="showEditProfile" @closeEditProfile="showEditProfile = false" />

            </q-avatar>
          </div>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :mini="miniState" :width="310" bordered :breakpoint="500">
      <div class="bg-grey-1 q-pt-lg">
        <div class="row col-12 q-px-xs justify-center">
          <q-avatar class="bg-primary" size="45px">
            <q-img style="margin: 3px;"
              src="https://acaipurissimo.com.br/wp-content/uploads/2021/06/logo-acai-purissimo.png">
            </q-img>
          </q-avatar>
        </div>
        <q-item-section class="text-center q-pt-sm">
          <q-item-label class="text-h6 text-bold text-grey-8  ">Michel Rocha e Natan Veloso</q-item-label>
        </q-item-section>

        <br>
      </div>

      <q-separator />

      <q-list class="q-py-md ">
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" class="q-mx-sm"
          :miniState="miniState" />
      </q-list>
      <div v-if="$q.screen.width > 500" class="q-mini-drawer-hide absolute btnMenu q-pa-sm"
        style="top: 15px; right: -22px">
        <q-btn dense round unelevated class="bg-primary" icon="chevron_left" @click="miniState = true" size="11px" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Watch, toNative } from 'vue-facing-decorator';
import EssentialLink from 'components/EssentialLink.vue';
import { Cookies } from 'quasar';
import { ChangeTheme } from 'src/components/ChangeTheme.vue';
import DialogEditProfile from 'src/components/DialogEditProfile.vue';

@Component({
  name: 'MainLayout',

  components: {
    EssentialLink,
    ChangeTheme,
    DialogEditProfile
  },
})
export class MainLayout extends Vue {
  leftDrawerOpen = false;
  miniState: any = this.updateMiniState();
  showEditProfile = false;
  isPwd = true;
  text = '';
  nome = '';
  email = '';
  data = '';
  senha = '';
  telefone = '';
  file = null;

  dense = false;
  linksList = [
    {
      title: 'Home',
      icon: 'home',
      routerName: '/',
      target: '_self',
    },
    {
      title: 'Agenda',
      caption: 'github.com/quasarframework',
      icon: 'schedule',
      routerName: '/Agenda',
      target: '_self',
    },
    {
      title: 'Cadastro de Clientes',
      caption: 'github.com/quasarframework',
      icon: 'group_add',
      routerName: '/CadastroClientes',
      target: '_self',
    },
    {
      title: 'Controle de Acessos',
      caption: 'github.com/quasarframework',
      icon: 'settings_accessibility',
      routerName: '/ControleAcessos',
      target: '_self',
    },
    {
      title: 'Financeiro',
      caption: 'github.com/quasarframework',
      icon: 'attach_money',
      routerName: '/Financeiro',
      target: '_self',
    }

  ];


  @Watch('$q.screen.width')
  updateMiniState() {
    if (this.$q.screen.width <= 500) this.miniState = true;
    else this.miniState = true;
  }

  changeIconChangeThemeMode() {
    const darkMode = Cookies.get('darkMode');
    if (darkMode) {
      this.$q.dark.set(darkMode === 'true');
    }
  }

  created() {
    this.updateMiniState();
    this.tpoHeader();
  }

  tpoHeader() {
    if (!this.miniState) return "q-ml-lg q-pa-sm";
    else return "q-pa-sm"
    // q-mx-lg q-my-md q-pa-sm rounded-borders
  }

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }

  menuLateral() {
    if (this.$q.screen.width <= 500) {
      this.miniState = true;
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
    else {
      if (!this.leftDrawerOpen) this.leftDrawerOpen = true;
      this.miniState = !this.miniState;
    }
  }
} export default toNative(MainLayout);
</script>

<style scoped>
.btnMenu {
  color: rgb(255, 255, 255);
  background-color: #F3F3F7;
  border-radius: 120px;
}

.borderAvatar {
  background-color: #f7f7f7;
  border-radius: 120px;
  padding: 2px;
}
</style>
