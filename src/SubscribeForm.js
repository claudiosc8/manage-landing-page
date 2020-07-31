import React, {useState, useRef} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap/'
import * as EmailValidator from 'email-validator';

function SubscribeForm() {

	const [error, setError] = useState(false)
	const inputRef = useRef(null);

	const onSubmit = (e) => {
		e.preventDefault();
		inputRef.current.value = '';
		setError(EmailValidator.validate(inputRef.current.value) ? false : true)
	}

  return (
  	<Form inline onSubmit={onSubmit}>
  		<div className='form-input-wrapper'>
		<FormControl ref={inputRef} type="text" placeholder="Updates in your inbox…" isInvalid={error}/>
		<Form.Control.Feedback type="invalid">
        Please insert a valid email
      	</Form.Control.Feedback>
      	</div>
		<Button type='submit'>Go</Button>
	</Form>

  )

  }

export default SubscribeForm;