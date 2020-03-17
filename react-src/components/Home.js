import React, { Component } from 'react'
import useName from './hooks/useName'

function Home({ ...props }) {

  const [content, setContent] = React.useState('')

  const name = useName('Boff')

  React.useEffect(() => {
    setContent(props.name)
  }, [props.name])

  return (
    <>
      <div>
        <div>
          {name}
        </div>
        <br/>
      </div>
    </>
  )
}

export default Home
