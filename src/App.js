import React,{Component,Fragment} from 'react';
import { CSSTransition} from 'react-transition-group'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            show:true
        }
    }
  render(){
    return (
        <Fragment>
            <CSSTransition
            in={this.state.show}
            timeout={1000}
            >
        <div>
          hello,dell lee
        </div>
            </CSSTransition>
        </Fragment>
    )

  }

}

export default App;
