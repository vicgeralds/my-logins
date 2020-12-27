import React from 'react'
import { useHashChange, useSubmitState } from '../hooks'
import Page from './Page'
import NewLogin from './NewLogin'
import ChangePassword from './ChangePassword'
import CurrentPassword from './CurrentPassword'

export default function Logins () {
  const fragment = useHashChange()
  const state = useSubmitState(serialize)
  const logins = getLogins()

  const username = fragment && logins.includes(fragment) ? fragment : ''

  if (state && state.username && !logins.includes(state.username)) {
    logins.push(state.username)
    window.localStorage.setItem('logins', logins.join(','))
  }

  if ((state && state.domain === '') || username) {
    return <Page title='Current password'><CurrentPassword username={username} /></Page>
  }

  if (state && state.domain) {
    return <Page title='Update password'><ChangePassword /></Page>
  }

  return (
    <Page title='Logins'>
      <ul>
        {logins.map(username =>
          <li key={username}>
            <a href={encodeURI(`#${username}`)}>{username.split('/')[0]}</a>
          </li>)}
      </ul>
      <h2>New login</h2>
      <NewLogin />
    </Page>
  )
}

function serialize (form) {
  if (form.elements.password) {
    const username = form.elements.username.value
    return { username }
  }
  const domain = form.elements.domain.value
  const email = form.elements.email.value

  return { domain, email }
}

function getLogins () {
  const logins = window.localStorage.getItem('logins')
  return logins ? logins.split(',') : []
}
