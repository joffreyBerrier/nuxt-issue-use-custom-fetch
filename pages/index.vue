<script lang="ts" setup>
  const authStore = useAuthStore()
  const { user, company }  = toRefs(authStore)
</script>

<template>
  <div>
    Hello,
    <div>
      User: <pre>{{ user }}</pre>
      Company: <pre>{{ company }}</pre>
    </div>
  </div>
</template>
