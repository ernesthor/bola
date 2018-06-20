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
const password = value =>
	value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/i.test(value)
		? 'Atleast 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
		: undefined
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && ((error && <span className="mt-2 contact-gray">{error}</span>) || (warning && <span className="mt-2 contact-gray">{warning}</span>))}
    </div>
)

const SignUpForm = props => {
const { handleSubmit, pristine, submitting } = props
return (
		<div>
			<form method="POST" action="https://formspree.io/bola.sportsapp@gmail.com">
				<div className="form-group">
					<div className="row">
						<div className="col-md-6">
							<Field name="fname" component={renderField} type="text" placeholder="First Name"
							className="form-control" label="First Name" validate={[required]} warn={alphabet }/>
						</div>
						<div className="col-md-6">
							<Field name="lname" component={renderField} type="text" placeholder="Last Name"
							className="form-control" label="Last Name" validate={[required]} warn={alphabet }/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<Field name="_replyto" component={renderField} type="email" placeholder="Email"
					className="form-control" label="Email" validate={[required, email]} />
				</div>
				<div className="form-group">
					<Field name="username" component={renderField} type="text" placeholder="Username"
					className="form-control" label="Username" validate={[required]} warn={alphabet}/>
				</div>
				<div className="form-group">
					<Field name="password" component={renderField} type="text" placeholder="Password"
					className="form-control" label="Password" validate={required} warn={password}/>
				</div>
				<div className="form-group">
					<p> By creating an account, you agree to our <a href="/terms" to="/terms"> Terms and Condition </a> </p>
				</div>
				<div className="form-group row">
					<div className="col-md-6 form-captcha">
						<Field name="recaptcha" component={Captcha}
						className="form-control" validate={required} />
					</div>
					<div className="col-md-6">
						<button type="submit" disabled={pristine || submitting} color="light" className="signup-btn"> Create account </button>
					</div>
				</div>
			</form>
		</div>
		)
}

export default reduxForm({
	form: 'SignUp'
})(SignUpForm)
