import React from 'react'
import styled, { css } from 'styled-components'

const TitleDiv = styled.div`
  font-family: arial;
  font-size: 1.5rem;
  padding: ${props => props.padding}px;
  border-radius: ${props => props.borderRadius}px;
  color: ${props => props.theme == 'light' ? '#000' : '#fff'};
  background-color: ${props => props.theme == 'light' ? 'lightgreen' : 'darkgreen'};
`
TitleDiv.displayName = 'TitleDiv'

export default function TitleBar(props) {

  console.log(props)

  return (
    <>
      <TitleDiv
        className='.title-div'
        theme={props.theme ? props.theme : 'light'}
        borderRadius={props.borderRadius ? props.borderRadius : 2}
        padding={props.padding ? props.padding : 8}
        >
        {props.title}
      </TitleDiv>
    </>
  )
}
