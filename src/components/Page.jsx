import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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

export default function Page ({ title, children }) {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth='sm'>
      <h1>{title}</h1>
      {children}
    </Container>
  )
}
