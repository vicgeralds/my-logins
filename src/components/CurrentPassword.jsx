import React, { useState, useCallback } from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

export default function CurrentPassword ({ username = '' }) {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const events = {
    onChange: useCallback(onChange)
  }

  const endAdornment = (
    <InputAdornment position='end'>
      <IconButton
        onClick={function () {
          setPasswordVisible(!passwordVisible)
        }}
        onMouseDown={preventDefault}
      >
        {passwordVisible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  )

  return (
    <form {...events}>
      <TextField
        name='username' label='Saved login' autoComplete='username'
        placeholder='example.com/username'
        defaultValue={username}
      />
      <TextField
        type={passwordVisible ? 'text' : 'password'}
        name='password' label='Password' autoComplete='current-password'
        InputProps={{
          endAdornment
        }}
      />
      <TextField
        name='email' label='Username or email' autoComplete='off'
        defaultValue={extractEmail(username)}
      />
    </form>
  )

  function extractEmail (username) {
    return username.split('/')[1] || ''
  }

  function onChange (changeEvent) {
    const { name, value } = changeEvent.target

    switch (name) {
      case 'username': {
        const formElements = changeEvent.currentTarget.elements
        formElements.email.value = extractEmail(value)
        break
      }
    }
  }
}

function preventDefault (event) {
  event.preventDefault()
}
