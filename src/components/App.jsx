import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import Container from '@material-ui/core/Container'
import Login from './Login'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
  palette: {
    primary: teal,
    text: {
      primary: 'rgba(0, 0, 0, 0.7)'
    }
  }
})

export function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='sm'>
        <h1>New login</h1>
        <Login />
      </Container>
    </ThemeProvider>
  )
}
