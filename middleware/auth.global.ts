export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore()
  const { auth } = toRefs(authStore)

  if (!auth.value.loggedIn) {
    try {
      await useAsyncData('callApi', () =>
        authStore.callApi(),
      )
    } catch (err) {
      console.error(err)
    }
  }
})
