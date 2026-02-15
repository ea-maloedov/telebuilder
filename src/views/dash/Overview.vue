<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, Users, MessageSquare, Zap, Plus } from 'lucide-vue-next'

const stats = [
  { label: 'Всего юзеров', value: '12,402', trend: '+12%', icon: Users, color: 'text-blue-600' },
  {
    label: 'Сообщений',
    value: '45.2k',
    trend: '+8%',
    icon: MessageSquare,
    color: 'text-purple-600',
  },
  { label: 'Активность', value: '98.2%', trend: '+2%', icon: Zap, color: 'text-orange-600' },
]
</script>

<template>
  <div class="space-y-8 p-1" data-aos="fade-up">
    <!-- Приветственный блок -->
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900 p-10 rounded-[3rem] text-white overflow-hidden relative"
    >
      <div class="z-10">
        <h2 class="text-4xl font-black tracking-tight mb-2 italic">Центр управления 🚀</h2>
        <p class="text-slate-400 font-medium max-w-md">
          Все ваши боты работают в штатном режиме. Сегодня привлечено 142 новых пользователя.
        </p>
      </div>
      <Button
        size="lg"
        class="bg-blue-600 hover:bg-blue-500 rounded-2xl h-14 px-8 font-black shadow-xl shadow-blue-500/20 z-10 transition-all active:scale-95"
      >
        <Plus class="mr-2 h-5 w-5" /> Создать бота
      </Button>
      <div class="absolute -right-10 -top-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Метрики -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        v-for="stat in stats"
        :key="stat.label"
        class="border-none shadow-sm rounded-[2.5rem] bg-white group hover:shadow-xl hover:shadow-slate-200/50 transition-all"
      >
        <CardContent class="p-8">
          <div class="flex justify-between items-start mb-6">
            <div
              :class="stat.color"
              class="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform"
            >
              <component :is="stat.icon" class="h-6 w-6" />
            </div>
            <Badge
              variant="secondary"
              class="bg-green-50 text-green-600 border-none font-black rounded-lg"
            >
              {{ stat.trend }}
            </Badge>
          </div>
          <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
            {{ stat.label }}
          </p>
          <h3 class="text-3xl font-black text-slate-900">{{ stat.value }}</h3>
        </CardContent>
      </Card>
    </div>

    <!-- Список ботов -->
    <div class="space-y-6">
      <div class="flex justify-between items-center px-4">
        <h3 class="text-xl font-black tracking-tight">Ваши проекты</h3>
        <Button variant="ghost" class="font-bold text-blue-600">Все проекты</Button>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card
          v-for="i in 2"
          :key="i"
          class="border-none shadow-sm rounded-[3rem] p-4 bg-white overflow-hidden group"
        >
          <CardContent class="p-6">
            <div class="flex gap-6 items-start">
              <div
                class="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform"
              >
                {{ i === 1 ? '☕' : '🤖' }}
              </div>
              <div class="flex-1">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="text-xl font-black">
                    Бот {{ i === 1 ? 'Coffee Shop' : 'AI Helper' }}
                  </h4>
                  <Badge
                    class="bg-blue-50 text-blue-600 border-none rounded-md text-[10px] font-black uppercase"
                    >LIVE</Badge
                  >
                </div>
                <p class="text-slate-500 text-sm mb-6 leading-relaxed">
                  Автоматизация заказов и интеграция с CRM системой магазина.
                </p>
                <div class="flex gap-4">
                  <Button class="flex-1 rounded-xl font-black h-12">Конструктор</Button>
                  <Button variant="secondary" class="rounded-xl h-12 w-12 p-0"
                    ><ArrowUpRight class="h-5 w-5"
                  /></Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
