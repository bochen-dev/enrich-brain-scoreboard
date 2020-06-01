<template>
  <q-card class="my-card" flat bordered style="margin:20px;">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ occupation.nameZh }}</q-item-label>
        <q-item-label caption>
          <q-icon
            name="fas fa-star"
            v-for="i in occupation.starLevel"
            :key="i"
          />
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-card-section horizontal>
      <q-card-section>
        <q-item>
          <q-item-section>
            <q-item-label>工作收入</q-item-label>
            <q-item-label caption>{{ occupation.workIncome }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>現金流</q-item-label>
            <q-item-label caption>{{
              this.$store.getters.monthlyCashFlow
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import Occupation from '@/data/occupations.js';
export default {
  data() {
    return {
      occupation: Occupation[0],
    };
  },
};
</script>
