<script lang="ts" setup>
import AboutSection from '~/components/AboutSection.vue'
import CertificatesSection from '~/components/CertificatesSection.vue'
import EvaluateSection from '~/components/EvaluateSection.vue'
</script>
<template>
  <VApp>
    <VMain>
      <AboutSection/>
      <VContainer>
        <EvaluateSection/>
      </VContainer>
      <CertificatesSection/>
    </VMain>
  </VApp>
</template>
