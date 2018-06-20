import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export const Captcha = (props) => (
	 <div>
	    <ReCAPTCHA
	      sitekey='6Ld5MlUUAAAAAM23o1uCMw0wAnQ3JQNIep9LDFPx'
	      onChange={props.input.onChange}
	    />
    </div>
)
export default Captcha
