var GroceryList =(props)=>{
  return (<ul> 
    {
      props.items.map(item => 
        <GroceryListItem item={item} />  
      )
    }
  </ul>)
};
  
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  onGroceryItemHover() {
    this.setState({hover: !this.state.hover});
  }
  render(){
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'none'
    }
    return <li style={style} onMouseOver={this.onGroceryItemHover.bind(this)} onMouseExit={this.onGroceryItemHover.bind(this)}>{this.props.item}</li>;
  }
};

// var GroceryListItem = (prop) => {
//    var clickedItem = (event) => {
//     console.log('I got clicked');
//   };
// return <li onClick={clickedItem}>{prop.item}</li>;
// };
var items = ['Manchego', 'Red Bull', 'Ben and Jerrys', 'Wine', 'Beer', 'Candy'];
ReactDOM.render(<GroceryList items={items} />, document.getElementById("app"))



