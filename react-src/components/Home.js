import React, { Component } from 'react'
import useName from './hooks/useName'
import TitleBar from './TitleBar'

function Home({ ...props }) {

  const [content, setContent] = React.useState('')

  const name = useName('Boff')

  React.useEffect(() => {
    setContent(props.name)
  }, [props.name])

  return (
    <>
      <div
      className='.main-container'
      >
        <TitleBar title={'My title'}/>

      </div>
    </>
  )
}

export default Home
