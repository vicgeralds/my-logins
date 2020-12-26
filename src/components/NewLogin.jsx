import React from 'react'
import {
  Button,
  TextField
} from '@material-ui/core'

export default function NewLogin () {
  return (
    <form action='#change-password'>
      <TextField
        name='domain' label='Name' autocomplete='off'
        placeholder='example.com'
      />
      <TextField
        name='email' label='Username or email' autoComplete='email username'
      />
      <div>
        <Button type='submit' variant='contained' color='primary'>
          Change password
        </Button>
      </div>
    </form>
  )
}
