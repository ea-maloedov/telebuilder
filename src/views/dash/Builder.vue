<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { MousePointer2, Hand, Wand2, Play, Save } from 'lucide-vue-next'

const nodes = [
  { name: 'Текст', icon: '📝' },
  { name: 'Кнопки', icon: '🔘' },
  { name: 'AI Блок', icon: '🧠' },
  { name: 'API', icon: '🔌' },
]
</script>

<template>
  <div class="h-[calc(100vh-140px)] flex gap-6" data-aos="zoom-in">
    <!-- Левая панель инструментов -->
    <Card
      class="w-72 border-none shadow-sm rounded-[2.5rem] bg-white flex flex-col p-6 overflow-hidden"
    >
      <h3 class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Блоки</h3>
      <ScrollArea class="flex-1 pr-4">
        <div class="space-y-3">
          <div
            v-for="node in nodes"
            :key="node.name"
            class="p-4 bg-slate-50 rounded-2xl border-2 border-transparent hover:border-blue-100 hover:bg-blue-50 transition-all cursor-grab group"
          >
            <div class="flex items-center gap-4">
              <span class="text-xl group-hover:scale-110 transition-transform">{{
                node.icon
              }}</span>
              <span class="font-bold text-sm">{{ node.name }}</span>
            </div>
          </div>
        </div>
      </ScrollArea>
      <Separator class="my-6 bg-slate-50" />
      <Button class="w-full rounded-2xl font-black h-12 bg-slate-900">Публикация</Button>
    </Card>

    <!-- Холст (Canvas) -->
    <div
      class="flex-1 bg-white rounded-[3.5rem] border-2 border-slate-100 relative overflow-hidden shadow-inner group"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40"
      ></div>

      <!-- Тулбар холста -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur-xl p-2 rounded-[2rem] border border-slate-100 shadow-2xl"
      >
        <TooltipProvider>
          <Tooltip v-for="(tool, i) in [MousePointer2, Hand, Wand2]" :key="i">
            <TooltipTrigger>
              <Button
                variant="ghost"
                size="icon"
                class="h-12 w-12 rounded-2xl hover:bg-blue-600 hover:text-white transition-all"
              >
                <component :is="tool" class="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent class="rounded-lg font-bold">Инструмент {{ i + 1 }}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <!-- Пример блока на холсте -->
      <Card
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 border-2 border-blue-600 rounded-[2rem] shadow-2xl p-6"
      >
        <div class="flex items-center gap-2 mb-4">
          <Badge
            class="bg-blue-600 text-white border-none rounded-full h-5 text-[9px] font-black px-2 uppercase"
            >START</Badge
          >
          <span class="font-black text-sm">Welcome</span>
        </div>
        <div class="h-2 w-full bg-slate-100 rounded-full mb-2"></div>
        <div class="h-2 w-2/3 bg-slate-100 rounded-full"></div>
      </Card>
    </div>

    <!-- Правая панель настроек -->
    <Card class="w-80 border-none shadow-sm rounded-[2.5rem] bg-white p-8">
      <div class="flex justify-between items-center mb-8">
        <h3 class="text-xs font-black uppercase tracking-widest text-slate-400">Настройки</h3>
        <Button size="icon" variant="ghost" class="h-8 w-8"><Save class="h-4 w-4" /></Button>
      </div>
      <div class="space-y-6">
        <div class="space-y-2">
          <label class="text-[10px] font-black text-slate-400 uppercase ml-1">Текст</label>
          <textarea
            class="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 outline-none h-32 resize-none"
            placeholder="Введите текст..."
          ></textarea>
        </div>
        <Button class="w-full rounded-xl font-black h-12 shadow-lg shadow-blue-600/20"
          >Сохранить шаг</Button
        >
      </div>
    </Card>
  </div>
</template>
