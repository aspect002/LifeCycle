import React, { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props){
    super(props)
   this.state= {
    count: 0,
    todo: [],
  }
  };

  componentDidMount() {
    console.log('---DidMount---');
    fetch('https://todo-redev.herokuapp.com/api/todos')
      .then((response) => response.json())
      .then((data) => this.setState({ todo: data }))
  }

  componentDidUpdate() {
    console.log('---DidUpdate---');
    console.log('Компонент обнавлен, значение count:', this.state.count);


  }
  componentWillUnmount() {
    console.log('---WillUnmount---');
    console.log('Компонент LifecycleComponent скоро удалится');
  }

  shouldComponentUpdate(nextProps, nextState) {

    return nextState.count % 2 === 0;
  }

  changeIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count} = this.state;

    return (
      <div>
        <h1>LifecycleComponent</h1>
        <p>Значение count: {count}</p>
        <button onClick={this.changeIncrement}>Увеличить count</button>

      </div>
    );
  }
}
export default LifecycleComponent;
