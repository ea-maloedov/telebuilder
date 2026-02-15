<template>
  <div class="space-y-8">
    <!-- HEADER -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Клиенты</h2>
        <p class="text-sm text-slate-500 mt-1">База клиентов и управление статусами</p>
      </div>

      <Button class="gap-2 rounded-xl">
        <UserPlus class="w-4 h-4" />
        Добавить клиента
      </Button>
    </div>

    <!-- FILTERS -->
    <div
      class="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col lg:flex-row gap-4 lg:items-center"
    >
      <div class="relative flex-1">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          v-model="search"
          placeholder="Поиск по имени или телефону..."
          class="pl-9 pr-4 py-2 w-full text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition"
        />
      </div>

      <select
        v-model="statusFilter"
        class="px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition"
      >
        <option value="">Все клиенты</option>
        <option value="active">Активные</option>
        <option value="vip">VIP</option>
        <option value="inactive">Неактивные</option>
      </select>
    </div>

    <!-- TABLE -->
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
          <tr>
            <th class="text-left px-6 py-4">Клиент</th>
            <th class="text-left px-6 py-4 hidden md:table-cell">Телефон</th>
            <th class="text-left px-6 py-4 hidden lg:table-cell">Последний визит</th>
            <th class="text-left px-6 py-4">Статус</th>
            <th class="text-right px-6 py-4"></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="client in filteredClients"
            :key="client.id"
            class="border-t border-slate-100 hover:bg-slate-50 transition-colors"
          >
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <img :src="client.avatar" class="w-9 h-9 rounded-xl object-cover" />
                <div>
                  <p class="font-medium">{{ client.name }}</p>
                  <p class="text-xs text-slate-500 md:hidden">
                    {{ client.phone }}
                  </p>
                </div>
              </div>
            </td>

            <td class="px-6 py-4 text-slate-600 hidden md:table-cell">
              {{ client.phone }}
            </td>

            <td class="px-6 py-4 text-slate-600 hidden lg:table-cell">
              {{ client.lastVisit }}
            </td>

            <td class="px-6 py-4">
              <span
                :class="statusClasses(client.status)"
                class="px-3 py-1 rounded-full text-xs font-semibold"
              >
                {{ statusLabel(client.status) }}
              </span>
            </td>

            <td class="px-6 py-4 text-right">
              <button class="p-2 rounded-lg hover:bg-slate-100 transition">
                <MoreHorizontal class="w-4 h-4 text-slate-600" />
              </button>
            </td>
          </tr>

          <tr v-if="filteredClients.length === 0">
            <td colspan="5" class="text-center py-10 text-slate-400">Клиенты не найдены</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, UserPlus, MoreHorizontal } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const search = ref('')
const statusFilter = ref('')

const clients = ref([
  {
    id: 1,
    name: 'Анна Петрова',
    phone: '+7 900 111-22-33',
    lastVisit: '12 марта 2026',
    status: 'active',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 2,
    name: 'Иван Сидоров',
    phone: '+7 900 444-55-66',
    lastVisit: '2 февраля 2026',
    status: 'vip',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 3,
    name: 'Мария Иванова',
    phone: '+7 900 777-88-99',
    lastVisit: '—',
    status: 'inactive',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
])

const filteredClients = computed(() => {
  return clients.value.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.value.toLowerCase()) || c.phone.includes(search.value)

    const matchesStatus = !statusFilter.value || c.status === statusFilter.value

    return matchesSearch && matchesStatus
  })
})

const statusClasses = (status) => {
  return {
    active: 'bg-green-100 text-green-700',
    vip: 'bg-purple-100 text-purple-700',
    inactive: 'bg-slate-200 text-slate-600',
  }[status]
}

const statusLabel = (status) => {
  return {
    active: 'Активный',
    vip: 'VIP',
    inactive: 'Неактивный',
  }[status]
}
</script>
