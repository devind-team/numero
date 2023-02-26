<script lang="ts" setup>
import AboutSection from '~/components/AboutSection.vue'
import InfoSection from '~/components/InfoSection.vue'
import CertificatesSection from '~/components/CertificatesSection.vue'
import EvaluateSection from '~/components/EvaluateSection.vue'
import ContactsSection from '~/components/ContactsSection.vue'
</script>
<template>
  <VApp>
    <VMain class="app-body">
      <AboutSection/>
      <InfoSection/>
      <EvaluateSection/>
      <CertificatesSection/>
      <ContactsSection/>
    </VMain>
  </VApp>
</template>
<style lang="scss">
.app-body {
  > section:nth-child(odd) {
    @apply bg-emerald-900;
  }
  > section:nth-child(even) {
    @apply bg-emerald-700;
  }
}
</style>
