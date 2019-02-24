// Lifecycle Methods
// componentWillMount()
// componentDidMount()
// componentWillReceiveProps()
// shouldComponentUpdate()
// componentWillUpdate()
// componentDidUpdate()
// componentWillUnmount()

// Use the Lifecycle Method componentDidMount
// best practice with React is to place API calls or any calls to your server
// in this lifecycle method

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
