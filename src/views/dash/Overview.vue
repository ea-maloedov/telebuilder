<template>
  <div class="space-y-8">
    <!-- ================= KPIs ================= -->
    <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <Card
        class="border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      >
        <CardContent class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-slate-500 font-medium"> Записей сегодня </span>
            <ChartBarIncreasingIcon class="w-5 h-5 text-slate-400" />
          </div>

          <div class="text-4xl font-semibold tracking-tight">10 000</div>
        </CardContent>
      </Card>

      <Card
        class="border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      >
        <CardContent class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-slate-500 font-medium"> Доход сегодня </span>
            <TrendingUp class="w-5 h-5 text-slate-400" />
          </div>

          <div class="text-4xl font-semibold tracking-tight">18 400 ₽</div>

          <div class="mt-2 text-xs text-emerald-600 font-medium">+15%</div>
        </CardContent>
      </Card>

      <Card
        class="border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      >
        <CardContent class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-slate-500 font-medium"> Новые клиенты </span>
            <Users2 class="w-5 h-5 text-slate-400" />
          </div>

          <div class="text-4xl font-semibold tracking-tight">5</div>

          <div class="mt-2 text-xs text-emerald-600 font-medium">За 24 ч.</div>
        </CardContent>
      </Card>

      <Card
        class="border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      >
        <CardContent class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-slate-500 font-medium"> Отмены </span>
            <Ban class="w-5 h-5 text-slate-400" />
          </div>

          <div class="text-4xl font-semibold tracking-tight">1</div>
        </CardContent>
      </Card>
    </div>

    <!-- ================= MAIN GRID ================= -->
    <div class="grid gap-8 xl:grid-cols-3">
      <!-- ===== Left side ===== -->
      <div class="xl:col-span-2 space-y-8">
        <!-- Upcoming bookings -->
        <Card class="border-none shadow-sm">
          <CardHeader class="pb-4 flex flex-row items-center justify-between">
            <CardTitle class="text-lg font-semibold"> Ближайшие записи </CardTitle>
            <Button variant="ghost" size="sm"> Смотреть все </Button>
          </CardHeader>

          <CardContent class="space-y-3">
            <div
              v-for="booking in bookings"
              :key="booking.id"
              class="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-semibold text-sm"
                >
                  {{ booking.time }}
                </div>

                <div>
                  <div class="font-semibold">
                    {{ booking.client }}
                  </div>
                  <div class="text-sm text-slate-500">
                    {{ booking.service }}
                  </div>
                </div>
              </div>

              <Badge :variant="booking.statusVariant">
                {{ booking.status }}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <!-- Income chart placeholder -->
        <Card class="border-none shadow-sm">
          <CardHeader>
            <CardTitle class="text-lg font-semibold"> Доход за 7 дней </CardTitle>
          </CardHeader>

          <CardContent>
            <div
              class="h-64 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 flex items-center justify-center text-slate-400 text-sm"
            >
              График будет здесь
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- ===== Right side ===== -->
      <div class="space-y-8">
        <!-- Quick actions -->
        <Card class="border-none shadow-sm">
          <CardHeader>
            <CardTitle class="text-lg font-semibold"> Быстрые действия </CardTitle>
          </CardHeader>

          <CardContent class="space-y-3">
            <Button class="w-full h-11 rounded-xl font-semibold"> + Новая запись </Button>

            <Button variant="outline" class="w-full h-11 rounded-xl"> Открыть бота </Button>

            <Button variant="outline" class="w-full h-11 rounded-xl"> Добавить услугу </Button>
          </CardContent>
        </Card>

        <!-- Bot status -->
        <Card>
          <CardHeader>
            <CardTitle class="text-base font-bold"> Статус бота </CardTitle>
          </CardHeader>

          <CardContent class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-slate-500">Состояние</span>
              <Badge variant="default">Активен</Badge>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-sm text-slate-500">Подключён</span>
              <span class="text-sm font-medium"> @my_business_bot </span>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-sm text-slate-500">Последняя активность</span>
              <span class="text-sm"> 2 минуты назад </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Users2, Ban, ChartBarIncreasingIcon } from 'lucide-vue-next'

const bookings = [
  {
    id: 1,
    time: '10:00',
    client: 'Анна Смирнова',
    service: 'Маникюр',
    status: 'Подтверждена',
    statusVariant: 'default',
  },
  {
    id: 2,
    time: '12:30',
    client: 'Ирина К.',
    service: 'Окрашивание',
    status: 'Ожидает',
    statusVariant: 'secondary',
  },
  {
    id: 3,
    time: '15:00',
    client: 'Мария П.',
    service: 'Стрижка',
    status: 'Отменена',
    statusVariant: 'destructive',
  },
]
</script>
