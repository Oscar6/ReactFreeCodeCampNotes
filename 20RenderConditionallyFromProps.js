// Render Conditionally from Props
// Render the Results component as a child of GameOfChance, and pass in expression as a prop called fiftyFifty.
// In the Results component, write a ternary expression to render the text "You win!"or "You lose!" based on the fiftyFifty prop that's being passed in from GameOfChance.
// Finally, make sure the handleClick() method is correctly counting each turn so the user knows how many times they've played.
// This also serves to let the user know the component has actually updated in case they win or lose twice in a row.

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? "You win!" : "You lose!"}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // change code here
    });
  }

  render() {
    let expression = Math.random() > 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* change code below this line */}
        <Results fiftyFifty={expression} />
        {/* change code above this line */}
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
