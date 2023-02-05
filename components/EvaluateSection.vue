<script lang="ts" setup>
import { ref } from '@vue/reactivity'
import TableComponent from '~/components/TableComponent.vue'

const active = ref<boolean>(false)
const date = ref()
const evaluateDate = ref()

const evaluate = () => {
  if (date.value) {
    evaluateDate.value = date.value
  }
}
</script>
<template>
  <section class="mb-20">
    <div>
      <div class="text-center text-h2 my-10">🍀 Калькулятор матрицы 🍀</div>
      <div>
        <div>
          <label for="dateInput" class="block mb-2 font-medium text-gray-900">Введите дату</label>
          <input v-model="date" id="dateInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="date">
        </div>
        <div class="flex gap-2 mt-4">
          <div class="flex-1">
            <VBtn @click="evaluate" class="w-100" color="#30D5C8" :disabled="!date">Рассчитать</VBtn>
          </div>
          <div class="flex-1">
            <VDialog v-model="active" width="600">
              <template #activator="{ props }">
                <VBtn v-bind="props" class="w-100" color="#30D5C8" variant="outlined">Расшифровать</VBtn>
              </template>
              <VCard>
                <VCardTitle>Алиса Быкова</VCardTitle>
                <VCardText>
                  <VList density="compact">
                    <VListItem href="https://t.me/alicebykova">
                      <template #prepend><VImg src="telegram.svg" class="w-6 h-6 mr-8"/></template>
                      <VListItemTitle>Телеграм</VListItemTitle>
                    </VListItem>
                    <VListItem href="https://vk.com/numero_bykova">
                      <template #prepend><VImg src="vk.svg" class="w-6 h-6 mr-8"/></template>
                      <VListItemTitle>Вконтакте</VListItemTitle>
                    </VListItem>
                    <VListItem href="https://instagram.com/alicebykova">
                      <template #prepend><VIcon>mdi-instagram</VIcon></template>
                      <VListItemTitle>Instagram</VListItemTitle>
                    </VListItem>
                    <VListItem href="https://wa.me/79107211521">
                      <template #prepend><VIcon>mdi-facebook-messenger</VIcon></template>
                      <VListItemTitle>WhatsApp</VListItemTitle>
                    </VListItem>
                  </VList>
                </VCardText>
                <VCardActions>
                  <VSpacer/>
                  <VBtn @click="active = false" color="warning" prepend-icon="mdi-close">Закрыть</VBtn>
                </VCardActions>
              </VCard>
            </VDialog>
          </div>
        </div>
        <TableComponent :date="evaluateDate"/>
      </div>
    </div>
  </section>
</template>
