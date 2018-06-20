import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Captcha from './Captcha.js'

const required = value => (value ? undefined : 'Required!')
const alphabet = value =>
	value && /[^a-zA-Z ]/i.test(value)
		? 'Only alphabet characters'
		: undefined
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
    </div>
)

const LogInForm = props => {
const { handleSubmit, pristine, submitting } = props
return (
		<div>
			<form method="POST" action="https://formspree.io/bola.sportsapp@gmail.com">
				<div className="form-group">
					<Field name="username" component={renderField} type="text" placeholder="Username"
					className="form-control" label="Username" validate={[required]} warn={alphabet}/>
				</div>
				<div className="form-group">
					<Field name="password" component={renderField} type="password" placeholder="Password"
					className="form-control" label="Password" validate={required} />
				</div>
				<div className="form-group">
					<button type="submit" disabled={pristine || submitting} color="light" className="login-btn"> Log In </button>
				</div>
			</form>
		</div>
		)
}

export default reduxForm({
	form: 'LogIn'
})(LogInForm)
