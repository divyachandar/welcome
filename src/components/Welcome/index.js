// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onChangeSubscribed = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getBtnTxt = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnTxt = this.getBtnTxt()

    return (
      <div className="welcome-container">
        <h1 className="header">Welcome</h1>
        <p className="description">Thankyou!Happy learning</p>
        <div className="btn-container">
          <button
            className="subscribe-btn"
            type="button"
            onClick={this.onChangeSubscribed}
          >
            {btnTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
