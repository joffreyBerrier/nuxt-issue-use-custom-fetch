export const useCustomFetch = ({
  method,
  options = {},
  specificHeaders,
  url,
}: {
  method: string
  options?: any
  url: string
  specificHeaders?: {
    [key: string]: string
  }
}) => {
  const config = useRuntimeConfig()
  const jwt = useCookie('jwt')

  const baseURL = config.public.baseURL
  const headers = specificHeaders
    ? { ...specificHeaders }
    : {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt.value}`,
      }

  const defaults = {
    baseURL,
    method,
    headers: {
      ...headers,
    },
    ...options,
  }

  return $fetch(url, defaults)
}
