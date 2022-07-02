import React from 'react'
import Form from 'react-bootstrap/Form';

function Search() {
  return (
    <>
      <h3>Refine sua busca</h3>
      <h5>Por preço</h5>
      <Form.Check name="grouped" required label="Até R$40" type='radio' />
      <Form.Check name="grouped" required label="R$40 - R$60" type='radio' />
      <Form.Check name="grouped" required label="R$100 - R$200" type='radio' />
      <Form.Check name="grouped" required label="Acima de R$500" type='radio' />
    </>
  )
}

export default Search