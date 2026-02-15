<template>
  <div class="space-y-8">
    <!-- HEADER -->
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Настройки бота</h2>
      <p class="text-sm text-slate-500 mt-1">Управление подключением и поведением Telegram-бота</p>
    </div>

    <!-- CONNECTION STATUS -->
    <div
      class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div>
        <p class="text-sm text-slate-500 mb-1">Статус подключения</p>
        <div class="flex items-center gap-3">
          <span
            :class="botConnected ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
            class="px-3 py-1 rounded-full text-xs font-semibold"
          >
            {{ botConnected ? 'Подключён' : 'Не подключён' }}
          </span>
        </div>
      </div>

      <Button class="gap-2 rounded-xl">
        <RefreshCcw class="w-4 h-4" />
        Проверить соединение
      </Button>
    </div>

    <!-- TOKEN SETTINGS -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
      <div class="flex items-center gap-2">
        <Key class="w-4 h-4 text-slate-500" />
        <h3 class="font-semibold">Bot Token</h3>
      </div>

      <div class="relative">
        <input
          :type="showToken ? 'text' : 'password'"
          v-model="token"
          placeholder="Введите токен бота"
          class="w-full px-4 py-2 pr-10 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition"
        />

        <button
          @click="showToken = !showToken"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-900 transition"
        >
          <component :is="showToken ? EyeOff : Eye" class="w-4 h-4" />
        </button>
      </div>

      <Button class="rounded-xl"> Сохранить токен </Button>
    </div>

    <!-- AUTO MESSAGES -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
      <h3 class="font-semibold flex items-center gap-2">
        <MessageSquare class="w-4 h-4 text-slate-500" />
        Автоматические сообщения
      </h3>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium">Приветственное сообщение</p>
          <p class="text-xs text-slate-500">Отправляется при первом взаимодействии</p>
        </div>

        <Switch v-model="welcomeEnabled" />
      </div>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium">Напоминания о записи</p>
          <p class="text-xs text-slate-500">Автоматическая отправка перед визитом</p>
        </div>

        <Switch v-model="reminderEnabled" />
      </div>
    </div>

    <!-- WEBHOOK -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
      <h3 class="font-semibold flex items-center gap-2">
        <Globe class="w-4 h-4 text-slate-500" />
        Webhook URL
      </h3>

      <input
        v-model="webhook"
        placeholder="https://yourdomain.com/api/webhook"
        class="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition"
      />

      <Button variant="outline" class="rounded-xl"> Обновить Webhook </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Key, RefreshCcw, Eye, EyeOff, MessageSquare, Globe } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

const botConnected = ref(true)
const showToken = ref(false)

const token = ref('')
const webhook = ref('https://api.example.com/webhook')

const welcomeEnabled = ref(true)
const reminderEnabled = ref(true)
</script>
