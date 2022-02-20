import { extendTheme } from '@chakra-ui/react'

const defaultTheme = extendTheme({
  fontSizes: {
    xxxl: '10rem',
    xxl: '7.5rem',
    xl: '5rem',
    l: '3rem',
    m: '2rem',
    s: '1rem',
  },
  colors: {
    background: {
      default: '#333333',
      50: '#A6A6A6',
      100: '#999999',
      200: '#808080',
      300: '#666666',
      400: '#4D4D4D',
      500: '#333333',
      600: '#1A1A1A',
      700: '#000000',
      800: '#000000',
      900: '#000000',
    },
    lightGray: {
      default: '#D9D8D7',
      50: '#FFFFFF',
      100: '#FFFFFF',
      200: '#FFFFFF',
      300: '#FFFFFF',
      400: '#F2F2F1',
      500: '#D9D8D7',
      600: '#C0BFBD',
      700: '#A7A5A3',
      800: '#8E8B89',
      900: '#75726F',
    }
  },
  fonts: {
    main:
      "'Poppins', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  },
  styles: {
    global: {
      html: {
        fontSize: '10px',
      },
      body: {
        fontSize: 's',
        fontWeight: '400',
      },
      'html, body': {
        fontFamily: 'main',
        bg: 'background.500',
        color: 'white',
      },
    },
  },
})

export default defaultTheme
