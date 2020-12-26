import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import { useSubmitState } from '../hooks'
import Page from './Page'
import NewLogin from './NewLogin'
import ChangePassword from './ChangePassword'

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
      <FormRouter />
    </ThemeProvider>
  )
}

function FormRouter () {
  const state = useSubmitState(serialize)

  if (state && state.domain) {
    return <Page title='Update password'><ChangePassword /></Page>
  }

  return <Page title='New login'><NewLogin /></Page>
}

function serialize (form) {
  if (form.elements.password) {
    return {}
  }
  const domain = form.elements.domain.value
  const email = form.elements.email.value

  return { domain, email }
}
