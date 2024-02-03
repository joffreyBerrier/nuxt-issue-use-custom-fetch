export const useAuthStore = defineStore('auth', () => {
  const auth: Ref<{
    loggedIn: boolean
  }> = ref({
    loggedIn: false,
  })
  const user = ref({})
  const company = ref({})

  const callApi = async () => {
    try {
      const resUser = await useCustomFetch({
        url: '/todos/1',
        method: 'GET'
      })
      console.log('resUser', resUser)
      const resCompany = await useCustomFetch({
        url: '/todos/2',
        method: 'GET'
      })
      // Here this error :
      // Error: [nuxt] A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function. This is probably not a Nuxt bug. Find out more at `https://nuxt.com/docs/guide/concepts/auto-imports#vue-and-nuxt-composables`

      console.log('resCompany', resCompany)

      user.value = resUser
      company.value = resCompany
    } catch (err) {
      console.error('ERROR AUTH STORE', err)
    }
  }

  return {
    auth,
    callApi,
    company,
    user,
  }
})
