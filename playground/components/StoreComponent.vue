<template>
  {{ navState ? 'closed' : 'opened' }}
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useNavigationStore } from '~/store/navigation'

const navigationStore = useNavigationStore()
const { navState } = storeToRefs(navigationStore)
</script>
