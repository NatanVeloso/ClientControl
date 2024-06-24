<template>
  <q-item clickable tag="a" :target="target" @click="navigate(routerName)" :class="{ 'active-link': isActive }">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" :class="{'unactive-link': !isActive}" />
      <q-tooltip v-if="miniState && $q.screen.width >500">{{title}}</q-tooltip>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, toNative } from 'vue-facing-decorator';
import { useRoute, useRouter } from 'vue-router';

@Component({
  name: 'EssentialLink'
})
export class EssentialLink extends Vue {
  @Prop({ default: '' }) icon!: string;
  @Prop({ default: '' }) title!: string;
  @Prop({ default: '' }) caption!: string;
  @Prop({ default: '/' }) routerName!: string;
  @Prop({ default: '_self' }) target!: string;
  @Prop({ default: false }) miniState!: boolean;

  private router = useRouter();
  private route = useRoute();

  isActive: boolean = false;

  @Watch('router.currentRoute.value.name')
  changeIsActive() {
    this.isActive = this.route.path === this.routerName;
  }

  @Watch('miniState')
  teste() {
    console.log(this.miniState)
  }

  created() {
    this.changeIsActive();
  }

  navigate(routerName: string) {
    if (routerName !== this.router.currentRoute.value.fullPath) {
      this.$q.loading.show();
      this.router.push(routerName);
    }
  }
}
export default toNative(EssentialLink);
</script>

<style scoped>
.active-link {
  background: linear-gradient(90deg, #0b47c9 0%, #4b74cc);
  color: rgb(255, 255, 255);
}

.unactive-link {
  color: rgb(88, 88, 88);
}

.q-item {
  border-radius: 8px !important;
}
</style>
