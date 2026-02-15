<template>
  <div class="space-y-6">
    <h3 class="font-semibold">Правила записи</h3>

    <div class="flex justify-between items-center">
      <div>
        <p class="font-medium">Автоподтверждение</p>
        <p class="text-xs text-slate-500">Клиент получает запись сразу</p>
      </div>
      <Switch v-model="rules.autoConfirm" />
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium"> Минимальное время до записи (часов) </label>
      <input
        v-model="rules.minHours"
        type="number"
        class="w-32 px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@/components/ui/switch'

const rules = ref({
  autoConfirm: true,
  minHours: 2,
})
</script>
