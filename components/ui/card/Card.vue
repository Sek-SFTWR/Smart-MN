<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm ',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
