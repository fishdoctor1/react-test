import logo from './logo.svg';
import './App.css';
import todosData from './todosData'
import react, { Component } from 'react';

// Life cycle and conditional render
// class What extends react.Component {
//   constructor() {
//     super()
//     this.state = {
//       todo: todosData,
//       isLoading: true,
//       unreadMessages: [
//         "ccc",
//         "dddd"
//       ]
//     }
//     // this.handleChange = this.handleChange.bind(this)
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   // static getDerivedStateFromProps(props, state) {
//   //   //return new updated state based upon the props
//   // }

//   // getSnapshotBeforeUpdate() {

//   // }

//   // componentWillMount() {

//   // }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 2000);
//   }

//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.whatever !== this.props.whatever) {
//   //     //do somthing important here
//   //   }
//   // }

//   // shouldComponentUpdate(nextProps, nexState) {
//   //   //return true if want it to update
//   //   //return false if not
//   // }

//   // componentWillUnmount() {
//   //   //components will disappears
//   // }

//   render() {
//     // const todoItems = this.state.todo.map(value => <TodoItem key={value.id} item={value}
//     //   handleChange={this.handleChange} handleClick={this.handleClick} />)
//     // return (
//     //   <div>
//     //     {this.state.unreadMessages.length > 0 && 
//     //     <h2>have {this.state.unreadMessages.length} unread</h2>}
//     //     <Conditional isLoading={this.state.isLoading} />      
//     //   </div >
//     // )
//   }
// }

// 7777777777777777777777777777777 
function handleClick() {
  console.log("clicked");
}
function Hover() {
  return (
    <div>
      <img onMouseOver={() => console.log("hoveredd")} src="https://www.fillmurray.com/200/100" />
      <button onClick={handleClick}> Click me!</button>
    </div>
  )
}

export default Hover;