<template>
  <q-layout view="hHh lpR lFr">
    <q-drawer v-model="right" side="right" overlay elevated>
      occupation details...
    </q-drawer>

    <q-page-container>
      <Header></Header>
      <div class="q-pa-md">
        <router-view />
      </div>
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-route-tab name="income" label="收入" to="/gameboard/income" exact />
        <q-route-tab
          name="expense"
          label="支出"
          to="/gameboard/expense"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import Header from '@/views/partials/Header.vue';
export default {
  components: {
    Header,
  },
  data() {
    return {
      right: false,
      tab: 'income',
    };
  },
};
</script>
