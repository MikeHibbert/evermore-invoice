import React, { Component } from 'react';

class Auth extends Component {
  componentDidMount() {
    this.props.explandContentArea();
  }

  inputChangedHandler(event, inputIdentifier) {
    const updatedLoginForm = {
      ...this.state.LoginForm,
      [inputIdentifier]: {
        ...this.state.LoginForm[inputIdentifier],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.LoginForm[inputIdentifier].validation),
        touched: true
      }
    }

    this.setState({LoginForm: updatedLoginForm});
  }

  LoginHandler(event) {
    event.preventDefault();

    this.props.onAuth(this.state.LoginForm.email.value, this.state.LoginForm.password.value);
  }

  onChange(event) {
    const wallet_address_files = event.target.files;
    // this.setState({wallet_address: wallet_address});
    
    this.props.setWalletAddress(wallet_address_files);
  }   

  render() {

    let form = (<div className="margin-auto margin-top-20">
                  <div className="custom-file">
                    <input type="file" name="keyfile" className="custom-file-input" onChange={(e) => this.onChange(e)} />
                    <label className="custom-file-label custom-file-label-primary">Choose File</label>
                  </div>
                </div>);

    if(this.props.loading) {
      form = <span>Loading your wallet ...</span>
    }

    return (<>

      <div className="padding-15" style={{"textAlign":"center","marginTop":"10px", "height":"100%"}} >
        <img style={{"margin":"0 auto 0 auto"}} className="logo-large" src="data:image/png;base64,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
" />
		</div>
    <div className="container">
      <div className="row justify-content-md-center">
        <div style={{"marginTop":"90px"}} className="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-12">
          <div className="login-screen">
            <div className="login-box">
              <h5>Welcome back,<br/>Please connect your AR Wallet.</h5>
              <div className="login-box">
                <form onSubmit={(event) => this.LoginHandler(event)} className="sky-form boxed">  
                    <fieldset className='margin-bottom-50'>
                      
                        {form}

                    </fieldset>
                    <footer>
                      <div className="forgot-password pull-left">
                        <a href="https://tokens.arweave.org/" className="white btn btn-info" target="_blank">Dont have a wallet? or need some FREE AR coins? Click Here!</a>
                      </div>
                    </footer>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
  }
}


export default Auth;
