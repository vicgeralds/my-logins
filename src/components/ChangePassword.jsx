import React, { useState, useCallback } from 'react'
import {
  Button,
  TextField
} from '@material-ui/core'

export default function ChangePassword () {
  const { domain, email } = window.history.state
  const [valid, setValid] = useState(false)

  const events = {
    onChange: useCallback(onChange)
  }

  const username = domain + (email && `/${email}`)

  return (
    <form action='#saved' {...events}>
      <TextField
        name='username' autoComplete='username'
        defaultValue={username}
      />
      <TextField
        type='password'
        name='password' label='Password' autoComplete='new-password'
        required
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
      case 'password':
        setValid(Boolean(value))
        break
    }
  }
}
