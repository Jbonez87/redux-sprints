import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  border: ${props => props.border};
  margin: 2rem;
`

export const Header = styled.h1`
  font-size: 1.5em;
  font-family: 'Montserrat', sans-serif;
  padding: 1.5em;
  text-align: center;
  color: ${props => props.color};
  flex: 2 100vw;
`

export const Article = styled.article`
  flex: 1;
  padding: 1.5em;
  margin: 1em;
  font-family: 'Exo 2', sans-serif;
  color: rgb(80, 233, 146);
  background: purple;
  transition: all 2s;
  &:hover {
    color: rgb(238, 238, 238);
    cursor: pointer;
  }
`