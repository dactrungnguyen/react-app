import React from 'react';

class Content extends React.Component {
   render() {
      return (
         <div>
            <button 
               onClick={this.props.updateStateProp}
            >
               Click here
            </button>
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {data: 'Initial data'}
      this.updateState = this.updateState.bind(this);
   }
   updateState(e) {
      this.setState({data: 'Data updated by event from child'});
   }
   render() {
      return (
         <div>
            <Content 
               myDataProp={this.state.data} 
               updateStateProp={this.updateState}>
            </Content>
         </div>
      );
   }
}

export default App;