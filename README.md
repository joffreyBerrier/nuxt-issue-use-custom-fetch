# Nuxt Debugging Steps

1. Run `npm install` & `npm run dev`.
2. Check your terminal to see this error:
```
ERROR AUTH STORE Error: [nuxt] A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function. This is probably not a Nuxt bug. Learn more at `https://nuxt.com/docs/guide/concepts/auto-imports#vue-and-nuxt-composables`.
```

# Encountered Issue

* Encountered a problem with the useCustomFetch function, created based on this example: https://nuxt.com/docs/examples/advanced/use-custom-fetch-composable, but it fails to work.
* Removing `useCookie` and `useRuntimeConfig` resolves the issue, however, **I need `useCookie` or an alternative, or `useRuntimeConfig` to set the baseURL.**

Thank you very much for your assistance! 🙏
