// Efficient way of using If/else for above exercise
// Use && for a More Concise Conditional
// If the condition is true, the markup will be returned. 
// If the condition is false, the operation will immediately return false after evaluating the condition and return nothing. 
// You can include these statements directly in your JSX and string multiple conditions together by writing && after each one. 
// This allows you to handle more complex conditional logic in your render() method without repeating a lot of code.

render() {
    // change code below this line
{this.state.display && 
      <div>
        <button onClick={this.toggleDisplay}>
          Toggle Display
        </button>
        <h1> Displayed! </h1>
      </div>}
    
    { return (
      <div>
          <button onClick={this.toggleDisplay}>
            Toggle Display 
          </button>
          {this.state.display && <h1> Displayed! </h1> }
      </div>
      );
    }  
  }
};
