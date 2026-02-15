<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Users, MousePointer2, Clock, Download, Filter } from 'lucide-vue-next'

const activeRange = ref('7d')

const topPages = [
  { name: 'Главное меню', views: '12,402', ctr: '84%', conversion: '12.4%' },
  { name: 'Каталог товаров', views: '8,120', ctr: '62%', conversion: '8.1%' },
  { name: 'Оформление заказа', views: '2,450', ctr: '92%', conversion: '45.0%' },
]
</script>

<template>
  <div class="space-y-8 p-1" data-aos="fade-up">
    <!-- Header с фильтрами -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <h2 class="text-3xl font-black tracking-tight">Аналитика</h2>
        <p class="text-muted-foreground font-medium text-sm">
          Глубокий анализ поведения ваших пользователей
        </p>
      </div>
      <div
        class="flex items-center gap-3 bg-white p-1.5 rounded-[1.5rem] border border-slate-100 shadow-sm"
      >
        <Tabs v-model="activeRange" class="w-auto">
          <TabsList class="bg-transparent h-10 gap-1">
            <TabsTrigger
              value="24h"
              class="rounded-xl px-4 text-xs font-bold data-[state=active]:bg-slate-900 data-[state=active]:text-white"
              >24ч</TabsTrigger
            >
            <TabsTrigger
              value="7d"
              class="rounded-xl px-4 text-xs font-bold data-[state=active]:bg-slate-900 data-[state=active]:text-white"
              >7д</TabsTrigger
            >
            <TabsTrigger
              value="30d"
              class="rounded-xl px-4 text-xs font-bold data-[state=active]:bg-slate-900 data-[state=active]:text-white"
              >30д</TabsTrigger
            >
          </TabsList>
        </Tabs>
        <div class="w-px h-6 bg-slate-100 mx-2"></div>
        <Button
          variant="ghost"
          size="icon"
          class="rounded-xl h-10 w-10 text-slate-400 hover:text-slate-900"
        >
          <Download class="h-4 w-4" />
        </Button>
      </div>
    </div>

    <!-- Основной график -->
    <Card class="border-none shadow-sm rounded-[3rem] bg-white overflow-hidden">
      <CardHeader class="p-10 pb-0 flex flex-row items-center justify-between">
        <div>
          <CardTitle class="text-2xl font-black">Динамика активности</CardTitle>
          <CardDescription class="text-sm font-medium"
            >Количество сообщений и новых диалогов</CardDescription
          >
        </div>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-blue-600 rounded-full"></span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest"
              >Сообщения</span
            >
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-slate-200 rounded-full"></span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Юзеры</span>
          </div>
        </div>
      </CardHeader>
      <CardContent class="p-10 pt-12">
        <!-- Визуализация графика (Flat Style) -->
        <div class="h-72 w-full flex items-end gap-2 px-2 relative">
          <div
            v-for="(h, i) in [40, 65, 45, 80, 55, 90, 70]"
            :key="i"
            class="flex-1 flex flex-col items-center gap-4 group"
          >
            <div
              :style="{ height: h + '%' }"
              class="w-full bg-blue-50 rounded-2xl group-hover:bg-blue-600 transition-all duration-500 relative flex items-end justify-center"
            >
              <div
                class="w-1/2 bg-blue-600 rounded-t-lg opacity-20 group-hover:opacity-100 transition-opacity"
                :style="{ height: h * 0.6 + '%' }"
              ></div>
              <div
                class="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-xl font-black"
              >
                {{ h * 120 }}
              </div>
            </div>
            <span class="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{{
              ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'][i]
            }}</span>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Сетка детальной статистики -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Таблица популярных шагов (2/3) -->
      <Card class="lg:col-span-2 border-none shadow-sm rounded-[3rem] bg-white">
        <CardHeader class="p-10">
          <CardTitle class="text-xl font-black">Конверсия по шагам</CardTitle>
          <CardDescription>Какие блоки бота приносят больше всего действий</CardDescription>
        </CardHeader>
        <CardContent class="px-10 pb-10">
          <Table>
            <TableHeader>
              <TableRow class="hover:bg-transparent border-slate-50">
                <TableHead class="text-xs font-black uppercase tracking-widest text-slate-400"
                  >Название блока</TableHead
                >
                <TableHead class="text-xs font-black uppercase tracking-widest text-slate-400"
                  >Просмотры</TableHead
                >
                <TableHead class="text-xs font-black uppercase tracking-widest text-slate-400"
                  >CTR</TableHead
                >
                <TableHead
                  class="text-right text-xs font-black uppercase tracking-widest text-slate-400"
                  >Конверсия</TableHead
                >
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                v-for="page in topPages"
                :key="page.name"
                class="border-slate-50 hover:bg-slate-50/50 transition-colors"
              >
                <TableCell class="font-bold py-5">{{ page.name }}</TableCell>
                <TableCell class="font-medium text-slate-500">{{ page.views }}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    class="rounded-lg bg-blue-50 text-blue-600 font-black border-none"
                    >{{ page.ctr }}</Badge
                  >
                </TableCell>
                <TableCell class="text-right font-black text-slate-900">{{
                  page.conversion
                }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <!-- Круговая диаграмма / Метрики (1/3) -->
      <Card
        class="border-none shadow-sm rounded-[3rem] bg-slate-900 text-white overflow-hidden relative"
      >
        <CardHeader class="p-10">
          <CardTitle class="text-xl font-black">Удержание</CardTitle>
          <CardDescription class="text-slate-400 font-medium italic text-xs"
            >Retention Rate за 30 дней</CardDescription
          >
        </CardHeader>
        <CardContent class="p-10 flex flex-col items-center">
          <div class="relative w-48 h-48 flex items-center justify-center">
            <svg class="w-full h-full -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="currentColor"
                stroke-width="20"
                fill="transparent"
                class="text-slate-800"
              />
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="currentColor"
                stroke-width="20"
                fill="transparent"
                stroke-dasharray="502"
                stroke-dashoffset="150"
                class="text-blue-500"
              />
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-4xl font-black">74%</span>
              <span class="text-[10px] font-black uppercase tracking-widest text-blue-400 mt-1"
                >+4% за мес.</span
              >
            </div>
          </div>
          <div class="mt-10 grid grid-cols-2 gap-4 w-full">
            <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
              <p class="text-[10px] font-black text-slate-500 uppercase mb-1">Вернулись</p>
              <p class="font-black text-lg">9.2k</p>
            </div>
            <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
              <p class="text-[10px] font-black text-slate-500 uppercase mb-1">Ушли</p>
              <p class="font-black text-lg">1.4k</p>
            </div>
          </div>
        </CardContent>
        <div
          class="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"
        ></div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
/* Плавные переходы для графиков */
.flex-1:hover .bg-blue-50 {
  filter: brightness(0.95);
}
</style>
