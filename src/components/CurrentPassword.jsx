import React, { useState, useCallback } from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

export default function CurrentPassword () {
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
        name='username' label='Username' autoComplete='username'
        placeholder='example.com/username'
      />
      <TextField
        type={passwordVisible ? 'text' : 'password'}
        name='password' label='Password' autoComplete='current-password'
        InputProps={{
          endAdornment
        }}
      />
      <TextField name='email' autoComplete='off' />
    </form>
  )

  function onChange (changeEvent) {
    const { name, value } = changeEvent.target

    switch (name) {
      case 'username': {
        const formElements = changeEvent.currentTarget.elements
        formElements.email.value = value.split('/')[1] || ''
        break
      }
    }
  }
}

function preventDefault (event) {
  event.preventDefault()
}
