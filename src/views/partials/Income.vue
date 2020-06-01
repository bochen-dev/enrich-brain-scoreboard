<template>
  <div class="q-gutter-y-md">
    <q-tabs v-model="tab" class="text-teal">
      <q-tab name="stock" icon="fas fa-dollar-sign" label="股票" />
      <q-tab name="estate" icon="fas fa-dollar-sign" label="房地產" />
      <q-tab name="business" icon="fas fa-dollar-sign" label="生意" />
    </q-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'stock',
    };
  },
};
</script>
