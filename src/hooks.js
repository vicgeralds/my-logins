import { useState, useEffect, useCallback } from 'react'

export function usePushState () {
  const [state, setState] = useState(window.history.state)

  useEffect(function () {
    window.addEventListener('popstate', onPopState)
    return function () {
      window.removeEventListener('popstate', onPopState)
    }
    function onPopState (event) {
      setState(event.state)
    }
  }, [])

  return [state, useCallback(pushState, [])]

  function pushState (newState, title, url) {
    window.history.pushState(newState, title || '', url)
    setState(newState)
  }
}

export function useHashChange () {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(function () {
    window.addEventListener('hashchange', onHashChange)
    return function () {
      window.removeEventListener('hashchange', onHashChange)
    }
    function onHashChange () {
      setHash(window.location.hash)
    }
  }, [])

  return hash && decodeURI(hash.slice(1))
}

export function useSubmitState (serialize) {
  const [state, pushState] = usePushState()

  useEffect(function () {
    window.addEventListener('submit', onSubmit)

    return function () {
      window.removeEventListener('submit', onSubmit)
    }

    function onSubmit (event) {
      event.preventDefault()

      const form = event.target
      const data = serialize(form)

      const submitter = 'submitter' in event
        ? event.submitter
        : findSubmitButton(form)

      const title = submitter && (submitter.textContent || submitter.value)

      const url = submitter && submitter.hasAttribute('formaction')
        ? submitter.formAction
        : form.action

      pushState(data, title, url)
    }
  }, [serialize])

  return state
}

function findSubmitButton (form) {
  return form.querySelector('button:not([type=button], [type=reset]), input[type=submit]')
}
