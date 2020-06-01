<template>
  <q-tabs v-model="tab" class="text-teal">
    <q-tab name="stock" icon="fas fa-dollar-sign" label="小孩" />
    <q-tab name="estate" icon="fas fa-dollar-sign" label="貸款" />
  </q-tabs>
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
