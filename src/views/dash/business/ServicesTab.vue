<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h3 class="font-semibold">Услуги</h3>
      <Button class="rounded-xl gap-2">
        <Plus class="w-4 h-4" />
        Добавить услугу
      </Button>
    </div>

    <div
      v-for="service in services"
      :key="service.id"
      class="bg-white border border-slate-200 rounded-2xl p-5 flex justify-between items-center hover:shadow-sm transition"
    >
      <div>
        <p class="font-medium">{{ service.name }}</p>
        <p class="text-xs text-slate-500">{{ service.duration }} мин · {{ service.price }} ₽</p>
      </div>

      <Button variant="outline" class="rounded-xl text-xs"> Редактировать </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const services = ref([
  { id: 1, name: 'Стрижка', duration: 60, price: 1500 },
  { id: 2, name: 'Окрашивание', duration: 120, price: 3500 },
])
</script>
