<template>
  <section>
    <VContainer class="pt-10">
      <div class="text-center text-h2 mb-10 text-lime-300">☀️ Контакты ☀️</div>
      <div class="contacts-container">
        <VCard variant="tonal" href="https://t.me/alicebykova">
          <VImg class="icon w-[120px]" src="telegram.svg"/>
          <div class="text">Телеграм</div>
        </VCard>
        <VCard variant="tonal" href="https://vk.com/numero_bykova">
          <VImg class="icon w-[120px]" src="vk.svg"/>
          <div class="text">Вконтакте</div>
        </VCard>
        <VCard variant="tonal" href="https://instagram.com/alicebykova">
          <VImg class="icon w-[120px]" src="instagram.svg"/>
          <div class="text">Instagram</div>
        </VCard>
        <VCard variant="tonal" href="https://wa.me/79107211521">
          <VImg class="icon w-[120px]" src="whatsapp.svg"/>
          <div class="text">WhatsApp</div>
        </VCard>
      </div>
    </VContainer>
  </section>
</template>

<style lang="scss">
.contacts-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  > .v-card {
    @apply my-5 py-2 py-6;

    min-width: 250px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;


  }
}

</style>
