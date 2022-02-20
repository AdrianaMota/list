import { ChakraProvider } from "@chakra-ui/react"
import defaultTheme from '../utils/theme'

export default function list({ Component, pageProps }) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
