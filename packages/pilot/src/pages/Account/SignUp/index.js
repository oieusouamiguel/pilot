import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'
import { SignUpForm } from '../../../containers/Account/SignUp'

const enhanced = compose(
  translate(),
  withRouter
)

class SignUpPage extends PureComponent {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    this.props.history.replace('/account/signup/confirmation')
  }

  render () {
    return (
      <SignUpForm
        onSubmit={this.handleSubmit}
        t={this.props.t}
      />
    )
  }
}

SignUpPage.propTypes = {
  t: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
}

export default enhanced(SignUpPage)
