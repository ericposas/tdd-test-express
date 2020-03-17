import React from 'react'

export default function useName (n) {
  const [name, setName] = React.useState('')
  React.useEffect(() => setName(n), [])
  return name
}
