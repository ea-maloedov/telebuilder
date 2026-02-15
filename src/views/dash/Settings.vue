<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
</script>

<template>
  <div class="max-w-4xl space-y-10" data-aos="fade-up">
    <Tabs default-value="general" class="w-full">
      <TabsList class="bg-slate-100 p-1 rounded-2xl h-14 mb-8">
        <TabsTrigger
          value="general"
          class="rounded-xl px-8 h-12 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >Общие</TabsTrigger
        >
        <TabsTrigger
          value="security"
          class="rounded-xl px-8 h-12 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >Безопасность</TabsTrigger
        >
        <TabsTrigger
          value="billing"
          class="rounded-xl px-8 h-12 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >Оплата</TabsTrigger
        >
      </TabsList>

      <TabsContent value="general">
        <Card class="border-none shadow-sm rounded-[2.5rem] bg-white p-4">
          <CardHeader class="p-6">
            <CardTitle class="text-2xl font-black">Профиль</CardTitle>
          </CardHeader>
          <CardContent class="p-6 space-y-8">
            <div class="flex items-center gap-8">
              <Avatar class="h-24 w-24 rounded-3xl border-4 border-slate-50">
                <AvatarImage src="https://i.pravatar.cc" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <Button variant="outline" class="rounded-xl border-slate-100 font-bold"
                >Изменить фото</Button
              >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <Label class="text-xs font-black uppercase tracking-widest text-slate-400"
                  >Имя</Label
                >
                <Input
                  value="Александр"
                  class="h-12 rounded-xl bg-slate-50 border-none font-bold focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
              <div class="space-y-2">
                <Label class="text-xs font-black uppercase tracking-widest text-slate-400"
                  >Email</Label
                >
                <Input
                  value="alex@bot.io"
                  class="h-12 rounded-xl bg-slate-50 border-none font-bold focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security" class="space-y-6">
        <Card class="border-none shadow-sm rounded-[2.5rem] bg-white p-4">
          <CardContent class="p-8 space-y-6">
            <div class="flex items-center justify-between">
              <div class="space-y-1">
                <h4 class="font-black">Двухфакторная аутентификация</h4>
                <p class="text-sm text-slate-500">Защита входа через Telegram код</p>
              </div>
              <Switch class="data-[state=checked]:bg-blue-600" />
            </div>
            <div class="pt-6 border-t border-slate-50">
              <Label class="text-xs font-black uppercase tracking-widest text-slate-400 block mb-4"
                >API Ключ</Label
              >
              <div class="flex gap-3">
                <Input
                  readonly
                  value="sk_live_49x820...310"
                  class="h-12 rounded-xl bg-slate-50 border-none font-mono font-bold"
                />
                <Button variant="secondary" class="rounded-xl h-12 px-6 font-black"
                  >Обновить</Button
                >
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    <div class="flex justify-end gap-3 px-4">
      <Button variant="ghost" class="rounded-xl font-bold text-slate-400">Сбросить</Button>
      <Button class="rounded-xl px-10 h-12 font-black shadow-xl shadow-primary/20"
        >Сохранить изменения</Button
      >
    </div>
  </div>
</template>
