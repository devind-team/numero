<script lang="ts" setup>
import { computed } from '@vue/reactivity'

const props = defineProps<{
  date?: string
}>()

const getDefaultParams = (evaluateParams: any) => {
  const defaultValues = {
    date: null, // Дата в человеческом формате
    destiny: null, // число судьбы
    temperament: null, // Темперамент
    character: null, // Характер
    energy: null, // Энергия
    interest: null, // Интерес
    health: null, // Здоровье
    logics: null, // Логика
    work: null, // Труд
    luck: null, // Удача
    duty: null, // Долг
    memory: null, // Память
    goal: null, // Цель
    family: null, // Семья
    habits: null, // Стабильность
    life: null, // Быт
    matrixLine: null
  }
  return Object.assign(defaultValues, evaluateParams)
}

const count = (s: string) => s === '' ? 0 : s.split('').length

const parameters = computed(() => {
  const numbers: string | undefined = props.date?.split('-').reverse().join('')
  if (numbers) {
    const [d1, d2, m1, m2, y1, y2, y3, y4] = numbers
    const firstAdditional = numbers.split('').map(Number).reduce((a, c) => a + c)
    const secondAdditional = String(firstAdditional).split('').map(Number).reduce((a, c) => a + c)
    const thirdAdditional = (firstAdditional - (2 * +d1)) * (+d1 === 0 ? +d2 : 1)
    const fourthAdditional = String(thirdAdditional).split('').map(Number).reduce((a, c) => a + c)
    const additional = String(firstAdditional) + String(secondAdditional) + String(thirdAdditional) + String(fourthAdditional)
    const allNumbers = (String(numbers) + additional).split('')

    console.log(`Цифры: ${numbers}`)
    console.log(`Первое дополнительное: ${firstAdditional}`)
    console.log(`Второе дополнительное: ${secondAdditional}`)
    console.log(`Третье дополнительное: ${thirdAdditional}`)
    console.log(`Четвертое дополнительное: ${fourthAdditional}`)


    const character = allNumbers.filter(n => n === '1').join('')
    const energy = allNumbers.filter(n => n === '2').join('')
    const interest = allNumbers.filter(n => n === '3').join('')
    const health = allNumbers.filter(n => n === '4').join('')
    const logics = allNumbers.filter(n => n === '5').join('')
    const work = allNumbers.filter(n => n === '6').join('')
    const luck = allNumbers.filter(n => n === '7').join('')
    const duty = allNumbers.filter(n => n === '8').join('')
    const memory = allNumbers.filter(n => n === '9').join('')

    const temperament = count(interest) + count(logics) + count(luck)
    const goal = count(character) + count(health) + count(luck)
    const family = count(energy) + count(logics) + count(duty)
    const habits = count(interest) + count(work) + count(memory)
    const life = count(health) + count(logics) + count(work)

    // Рассчитываем число судьбы
    const evaluateLifeNumber = (s: string[]): string => {
      if (s.join('') === '11' && secondAdditional === '11') {
        return s.join('')
      }
      if (s.length === 1) {
        return s.join('')
      }
      const sn = s.map(Number).reduce((a, c) => a + c)
      return evaluateLifeNumber(String(sn).split(''))
    }

    const destiny = evaluateLifeNumber(numbers.split(''))

    return getDefaultParams({
      date: props.date?.split('-').reverse().join('.'),
      character,
      energy,
      interest,
      health,
      logics,
      work,
      luck,
      duty,
      memory,
      temperament,
      goal,
      family,
      habits,
      life,
      destiny,
    })
  }

  return getDefaultParams({
    matrixLine: '-/-/-/-/-/-/-/-/-/Т0/Ц0/С0/П0/Б0/ЧС0'
  })
})

</script>
<template>
  <div class="mt-5">
    <div class="grid grid-cols-4">
      <div class="text-justify col-span-3">
        <template v-if="date">
          <span>Дата рождения: {{ parameters.date }}</span>
          <span>Число судьбы: {{ parameters.destiny }}</span>
        </template>
      </div>
      <div>
        <span>Темперамент</span>
        <span>{{ parameters.temperament || '-' }}</span>
      </div>

      <div>
        <span>Характер</span>
        <span>{{ parameters.character || '-' }}</span>
      </div>
      <div>
        <span>Здоровье</span>
        <span>{{ parameters.health || '-' }}</span>
      </div>
      <div>
        <span>Удача</span>
        <span>{{ parameters.luck || '-' }}</span>
      </div>
      <div>
        <span>Целеустремленность</span>
        <span>{{ parameters.goal || '-' }}</span>
      </div>

      <div>
        <span>Энергия</span>
        <span>{{ parameters.energy || '-' }}</span>
      </div>
      <div>
        <span>Логика</span>
        <span>{{ parameters.logics || '-' }}</span>
      </div>
      <div>
        <span>Долг</span>
        <span>{{ parameters.duty || '-' }}</span>
      </div>
      <div>
        <span>Семья</span>
        <span>{{ parameters.family || '-' }}</span>
      </div>

      <div>
        <span>Интерес</span>
        <span>{{ parameters.interest || '-' }}</span>
      </div>
      <div>
        <span>Труд</span>
        <span>{{ parameters.work || '-' }}</span>
      </div>
      <div>
        <span>Память</span>
        <span>{{ parameters.memory || '-' }}</span>
      </div>
      <div>
        <span>Стабильность</span>
        <span>{{ parameters.habits || '-' }}</span>
      </div>
      <div class="col-start-2">
        <span>Быт</span>
        <span>{{ parameters.life || '-' }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grid > div {
  border: 1px solid black;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
  border-bottom: none;
}
.grid > div:last-child, .grid > div:nth-child(11), .grid > div:nth-child(13), .grid > div:nth-child(14) {
  border-bottom: 1px solid black;
}
.grid > div:nth-child(2n), .grid > div:nth-child(5), .grid > div:nth-child(9), .grid > div:nth-child(13) {
  border-left: none;
}
</style>
