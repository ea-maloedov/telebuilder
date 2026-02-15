<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send, Plus, History } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-8 p-1" data-aos="fade-up">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h2 class="text-3xl font-black tracking-tight">Рассылки</h2>
        <p class="text-muted-foreground font-medium">
          Создавайте мгновенные оповещения для всей базы
        </p>
      </div>
      <Button size="lg" class="rounded-2xl h-14 px-8 shadow-xl shadow-primary/20 font-black">
        <Plus class="mr-2 h-5 w-5" /> Новая кампания
      </Button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Конструктор сообщения -->
      <Card class="lg:col-span-2 border-none shadow-sm rounded-[2.5rem] bg-white">
        <CardHeader class="p-8 pb-0">
          <CardTitle class="text-xl">Контент рассылки</CardTitle>
          <CardDescription>Настройте параметры отправки сообщения</CardDescription>
        </CardHeader>
        <CardContent class="p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <Label class="text-xs font-black uppercase tracking-widest text-slate-400"
                >Источник</Label
              >
              <Select default-value="coffee">
                <SelectTrigger
                  class="h-12 rounded-xl bg-slate-50 border-none ring-offset-transparent focus:ring-2 focus:ring-primary font-bold"
                >
                  <SelectValue placeholder="Выберите бота" />
                </SelectTrigger>
                <SelectContent class="rounded-xl border-none shadow-xl">
                  <SelectItem value="coffee" class="font-bold">☕ Coffee Shop Bot</SelectItem>
                  <SelectItem value="ai" class="font-bold">🤖 Support AI Helper</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="space-y-3">
              <Label class="text-xs font-black uppercase tracking-widest text-slate-400"
                >Аудитория</Label
              >
              <Select default-value="all">
                <SelectTrigger
                  class="h-12 rounded-xl bg-slate-50 border-none ring-offset-transparent focus:ring-2 focus:ring-primary font-bold"
                >
                  <SelectValue placeholder="Выберите сегмент" />
                </SelectTrigger>
                <SelectContent class="rounded-xl border-none shadow-xl">
                  <SelectItem value="all" class="font-bold">Все (12.4k)</SelectItem>
                  <SelectItem value="active" class="font-bold">Активные (3k)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div class="space-y-3">
            <Label class="text-xs font-black uppercase tracking-widest text-slate-400"
              >Сообщение</Label
            >
            <Textarea
              placeholder="Что вы хотите сказать пользователям?"
              class="min-h-[200px] rounded-[1.5rem] bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-primary p-6 text-base font-medium resize-none"
            />
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-50">
            <div class="flex gap-2">
              <Button variant="outline" size="icon" class="rounded-xl border-slate-100">📎</Button>
              <Button variant="outline" size="icon" class="rounded-xl border-slate-100">😊</Button>
            </div>
            <Button class="rounded-xl px-8 font-black">
              Отправить сейчас <Send class="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <!-- История -->
      <div class="space-y-6">
        <h3
          class="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-400 px-4"
        >
          <History class="h-4 w-4" /> Последние запуски
        </h3>
        <Card
          v-for="i in 3"
          :key="i"
          class="border-none shadow-sm rounded-[2rem] hover:shadow-md transition-shadow"
        >
          <CardContent class="p-6 space-y-4">
<!--            <div class="flex justify-between items-center">-->
<!--              <Badge-->
<!--                variant="secondary"-->
<!--                class="rounded-lg bg-green-50 text-green-600 font-black border-none"-->
<!--                >DONE</Badge-->
<!--              >-->
<!--              <span class="text-[10px] font-bold text-slate-400">12 ФЕВ, 14:00</span>-->
<!--            </div>-->
            <p class="font-bold text-sm leading-tight">
              Обновление весеннего меню и промокод на скидку 15%
            </p>
            <div class="flex gap-4 text-[10px] font-black text-slate-400 uppercase">
              <span>👥 2,400</span>
              <span>📈 42% Open Rate</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
