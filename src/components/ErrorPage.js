import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const ErrorPage = () => {
  return (
    <Container textAlign='center'>
      <Header as='h1'>Error page</Header>
      <p>Something went wrong!</p>
    </Container>
  )
}

export default ErrorPage