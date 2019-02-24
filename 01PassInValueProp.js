// CampSite = component
// Camper = child component
// name = value passed in a as a prop

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
const Camper = props => (<p>{props.name}</p>);

Camper.defaultProps = {
  name: 'CamperBot'
};

// propTypes being defined and checking name is a string
Camper.propTypes = {
  name: PropTypes.string.isRequired
};