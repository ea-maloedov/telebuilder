<template>
  <div class="space-y-8">
    <!-- HEADER -->
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Настройки</h2>
      <p class="text-sm text-slate-500 mt-1">Управление аккаунтом и параметрами системы</p>
    </div>

    <!-- PROFILE -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
      <div class="flex items-center gap-2">
        <User class="w-4 h-4 text-slate-500" />
        <h3 class="font-semibold">Профиль</h3>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Имя</label>
          <input
            v-model="profile.name"
            class="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition"
          />
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium">Email</label>
          <input
            v-model="profile.email"
            class="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition"
          />
        </div>
      </div>

      <Button class="rounded-xl"> Сохранить изменения </Button>
    </div>

    <!-- NOTIFICATIONS -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
      <div class="flex items-center gap-2">
        <Bell class="w-4 h-4 text-slate-500" />
        <h3 class="font-semibold">Уведомления</h3>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium">Email-уведомления</p>
          <p class="text-xs text-slate-500">Получать отчёты и системные сообщения</p>
        </div>
        <Switch v-model="notifications.email" />
      </div>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium">Telegram-уведомления</p>
          <p class="text-xs text-slate-500">Получать уведомления через бота</p>
        </div>
        <Switch v-model="notifications.telegram" />
      </div>
    </div>

    <!-- SECURITY -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
      <div class="flex items-center gap-2">
        <Shield class="w-4 h-4 text-slate-500" />
        <h3 class="font-semibold">Безопасность</h3>
      </div>

      <Button variant="outline" class="rounded-xl"> Изменить пароль </Button>

      <Button variant="outline" class="rounded-xl"> Включить 2FA </Button>
    </div>

    <!-- DANGER ZONE -->
    <div class="bg-red-50 rounded-2xl border border-red-200 p-6 space-y-6">
      <div class="flex items-center gap-2 text-red-600">
        <AlertTriangle class="w-4 h-4" />
        <h3 class="font-semibold">Опасная зона</h3>
      </div>

      <p class="text-sm text-red-600">
        Удаление аккаунта приведёт к безвозвратной потере всех данных.
      </p>

      <Button variant="destructive" class="rounded-xl"> Удалить аккаунт </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Bell, Shield, AlertTriangle } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

const profile = ref({
  name: 'Иван Иванов',
  email: 'ivan@example.com',
})

const notifications = ref({
  email: true,
  telegram: false,
})
</script>
