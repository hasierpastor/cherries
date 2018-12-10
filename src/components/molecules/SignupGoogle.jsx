import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton, GoogleIcon, Loading } from '../atoms'
import GoogleLogin from 'react-google-login'

const Container = styled.div`
  .google {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 0.5rem;
    }
  }
`
class SignupGoogle extends Component {
  render() {
    return (
      <Container>
        <GoogleLogin
          className="google"
          clientId="TBD"
          render={renderProps => (
            <StyledButton
              onClick={renderProps.onClick}
              width="17rem"
              height="2.5rem"
              color="#D34836"
              backgroundColor="white"
              borderColor="#D34836"
              borderWidth="2px"
              hovercolor="#F9F7F1"
              margin=".5rem"
              className="google"
            >
              CONNECT WITH <GoogleIcon />
            </StyledButton>
          )}
          icon={false}
          onSuccess={this.props.responseGoogle}
          onFailure={this.props.responseGoogle}
        />
      </Container>
    )
  }
}

// OLD GOOGLE SIGNUP
//
//
// class SignupGoogle extends Component {
//   state = {
//     status: 'CONNECT WITH ',
//   }
//   static contextTypes = {
//     firebase: PropTypes.object,
//   }
//   handleGoogle = e => {
//     const { firebase } = this.context
//     this.setState({ status: <Loading /> })
//     firebase.signupGoogle(this)
//   }
//   render() {
//     return (
//       <Container>
// <StyledButton
//   onClick={this.handleGoogle}
//   width="17rem"
//   height="2.5rem"
//   color="#D34836"
//   backgroundColor="white"
//   borderColor="#D34836"
//   borderWidth="2px"
//   hovercolor="#F9F7F1"
//   margin=".5rem"
//   className="google"
// >
//   {this.state.status} <GoogleIcon />
// </StyledButton>
//       </Container>
//     )
//   }
// }

export default SignupGoogle
