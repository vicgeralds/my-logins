import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  TextField
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch'
    },
    '& button': {
      margin: theme.spacing(1)
    }
  }
}))

export default function Login () {
  const classes = useStyles()
  const [username, setUsername] = useState('')
  const [valid, setValid] = useState(false)

  const events = {
    onChange, onSubmit, onReset
  }

  return (
    <form className={classes.root} action='' {...events}>
      <TextField
        name='username' label='Name' autoComplete='username'
        placeholder='example.com'
        value={username}
      />
      <TextField
        type='password'
        name='password' label='Password' autoComplete='new-password'
        required
      />
      <TextField
        name='email' autoComplete='email'
        placeholder='email or username'
        disabled={!username}
      />
      <div>
        <Button type='submit' variant='contained' color='primary' disabled={!valid}>
          Save
        </Button>
      </div>
    </form>
  )

  function onChange (changeEvent) {
    const { name, value } = changeEvent.target

    switch (name) {
      case 'username': {
        const formElements = changeEvent.currentTarget.elements
        const email = value.split('@')
        email.pop()
        formElements.email.value = email.join('@').replace('/', '@')
        setUsername(value.trim())
        break
      }
      case 'email': {
        const domain = username.split('@').pop()
        const escapedEmail = value.trim().replace('@', '/')
        setUsername([].concat(escapedEmail || [], domain).join('@'))
        break
      }
      case 'password':
        setValid(Boolean(value))
        break
    }
  }

  function onSubmit (submitEvent) {
    const form = submitEvent.currentTarget
    submitEvent.preventDefault()

    setTimeout(function () {
      form.reset()
    }, 100)

    window.location.replace('#saved')
  }

  function onReset () {
    setUsername('')
    setValid(false)

    window.location.replace('#')
  }
}
