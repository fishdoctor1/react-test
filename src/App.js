// import logo from './logo.svg';
// import Joke from "./Joke"
// import jokesData from './JokesData';
import SendPropsToFunction from './SendPropToFunc';
import RenderWithCondition from './renderWithCondition';
// import productData from './productDatas'
import todosData from './todosData'
import TodoItem from './TodoItem'
import react, { Component } from 'react';
// import reactDom from 'react-dom';
import Conditional from './Conditional';
import Hover from './what';
import ReactHook from './reactHook';
import UseEffectDemo from './useEffectDemo';
import UseEffectDemo2 from './useEffectDemo2';
import UseEffectDemoDestroy from './UseEffectDemoDestroy';
import UseEffectDemoInterval from './useEffectDemoInterval';
import UseEffectDemoAxios from './useEffectDemoAxios';
import UseContextDemo1 from './useContextDemo1'
import UseMemoDemo1 from './useMemoDemo1'
import UseCallbackDemo1 from './useCallbackDemo1'

class App extends react.Component {

  constructor() {
    super()
    this.state = {
      todo: todosData,
      count: 0,
      isLoading: true,
      unreadMessages: [
        "ccc",
        "dddd"
      ],
      isLogin: true,
      firstName: "",
      lastName: ""
    }

    this.handleClick2 = this.handleClick2.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClickCount = this.handleClickCount.bind(this);

  }

  // static getDerivedStateFromProps(props, state) {
  //   //return new updated state based upon the props
  // }

  // getSnapshotBeforeUpdate() {

  // }

  // componentWillMount() {

  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.whatever !== this.props.whatever) {
  //     //do somthing important here
  //   }
  // }

  // shouldComponentUpdate(nextProps, nexState) {
  //   //return true if want it to update
  //   //return false if not
  // }

  // componentWillUnmount() {
  //   //components will disappears
  // }

  handleChange2(event) {
    console.log("handleChange2", event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleClick2() {
    this.setState(prevState => {
      if (prevState.isLogin) {
        return {
          isLogin: false
        }
      } else {
        return {
          isLogin: true
        }
      }
      // this.state.count = this.state.count + 1;//not working
    })
  }

  handleClickCount() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
      // this.state.count = this.state.count + 1;//not working
    })
  }

  render() {
    let buttonText = this.state.isLogin ? "LogOut" : "Login"
    let displayText = this.state.isLogin ? "LogIn" : "LogOut"
    let props = {
      name: 'product1',
      string: 'stringvalue',
      render: true,
      unreadMessage: ["S", "D"]
    }
    return (
      <div>
        <div class="row" style={{border:'solid',padding:'15px'}}>
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <SendPropsToFunction product={props} />
            <RenderWithCondition product={props} />
            {/* {this.state.unreadMessages.length > 0 &&
              <h2>have {this.state.unreadMessages.length} unread</h2>} */}
            <Conditional isLoading={this.state.isLoading} />
          </div >
          <div class="col-md-3">            
          </div>
          <div class="col-md-3">
            <button onClick={this.handleClick2}>{buttonText}</button>
            <h3>{displayText}</h3>
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row" style={{border:'solid',padding:'15px'}}>
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <h1 >state.count:{this.state.count}</h1>
            <button onClick={this.handleClickCount}>Click Out!</button>
          </div>
          <div class="col-md-1"></div>
        </div>        
        <div class="row" style={{border:'solid',padding:'15px'}}>
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <h2>ITodo</h2>
            <ChildClassUpdateParentState count={this.state.count} handleClickUpdateParents={this.handleClickCount} />
          </div>
          <div class="col-md-1"></div>
        </div>

        <div class="row" style={{border:'solid',padding:'15px'}}>
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <h2>hover</h2>
            <Hover />
          </div>
          <div class="col-md-1"></div>
        </div>

        <div class="row" style={{border:'solid',padding:'15px'}}>
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <h2>React hook</h2>
            <ReactHook />
          </div>
          <div class="col-md-3">
            <h2>React hook UseEffect</h2>
            <UseEffectDemo />
          </div>
          <div class="col-md-3">
            <h2>React hook UseEffect2</h2>
            <UseEffectDemo2 />
          </div>
          <div class="col-md-2"></div>
        </div>                

        <div class="row" style={{border:'solid',padding:'15px'}}>
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <h2>React hook UseEffectDemoDestroy</h2>
            <UseEffectDemoDestroy />
          </div>
          <div class="col-md-3">
            <h2>React hook UseEffect Interval</h2>
            {/* <UseEffectDemoInterval /> */}
          </div>
          <div class="col-md-1"></div>
        </div>        
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <h2>React hook UseEffectDemoAxios</h2>
            <UseEffectDemoAxios />
          </div> 
          <div class="col-md-3">
            <h2>React hook useContext</h2>
            <UseContextDemo1 />
          </div>         
          <div class="col-md-3">  
            <h2>React hook useMemo</h2>
            <UseMemoDemo1 />   
          </div>
          <div class="col-md-1"></div>
        </div>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <h2>React hook UseCallback</h2>
            <UseCallbackDemo1 />
          </div> 
          <div class="col-md-3">
            
          </div>         
          <div class="col-md-3">  
            
          </div>
          <div class="col-md-1"></div>
        </div>
        
        
      </div >
    )
  }
}
class ChildClassUpdateParentState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: todosData,
      countChild: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClickCountChild = this.handleClickCountChild.bind(this);
    this.handleClickUpdateParents = props.handleClickUpdateParents.bind(this);

  }

  componentDidMount() {
    // `newBugs`constant holds the bugs passed down from IndexPage
    //const newBugs = this.props.count;
    //this.setState({ count: newBugs })

  }

  handleChange(id) {
    console.log("change", id);
    this.setState(prevState => {
      const updateTodos = prevState.todo.map(todo2 => {
        console.log("todo2", todo2);

        if (todo2.id === id) {
          todo2.completed = !todo2.completed
        }

        return todo2;
      })
      console.log("updatetodo", updateTodos);
      return {
        todo: updateTodos
      }
    })

  }

  handleClickCountChild() {
    this.setState(prevState => {
      return {
        countChild: prevState.countChild + 1
      }
      // this.state.count = this.state.count + 1;//not working
    })
  }

  render() {
    const todoItems = this.state.todo.map(value => <TodoItem key={value.id} item={value} countChild={this.state.countChild}
      handleChange={this.handleChange} handleClick={this.handleClickCountChild} />)
    return (
      <div>
        <button onClick={() => this.handleClickUpdateParents()}>Click In! Update Parents</button>
        {todoItems}
      </div>
    )
  }
}
// 555555555555555555555555555555555555555555
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "5555"
//     }
//     //if not declare state then error
//   }  
//   render() {
//     return (
//       <div>
//         <h2>{this.state.answer}</h2>
//       </div>
//     )
//   }
// }

//getStart with class 44444444444444444444444444444444
// class App extends react.Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "5555"
//     }
//   }
//   // <childComponent answer={this.state.answer} /> //ใส่ไว้ใต้บรรทัด h2 
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>{this.state.answer}</h2>

//       </div>
//     )
//   }
// }

// class Header extends react.Component {
//   render() {
//     return (
//       <header>
//         <p>My Head</p>
//       </header>
//     )
//   }
// }
// end class


// function App() {
//   //start loop and sent Obj item 333333333333333333333333333333333333333333333
//   const todoItems = todosData.map(value => <TodoItem key={value.id} item={value} />)
//   return (
//     <div>
//       {todoItems}
//     </div>
//   )
//   // const product = productData.map(item => <Product product={item} />)
//   // return (
//   //   <div>
//   //     {product}
//   //   </div>
//   // )
//   //end loop and sent Obj item

//   // start loop data 222222222222222222222222222222222
//   // const jokeComp = jokesData.map(value => <Joke key={value.id} q={value.q} qe={value.qe} />)
//   // return (
//   //   <div>
//   //     {jokeComp}
//   //   </div>
//   // )
//   // end loop data

//   // fist time 111111111111111111111111111111
//   // return (
//   //   <div>
//   //     <Joke q="00" qe="789" />
//   //     <Joke qe="789" />
//   //   </div>
//   // );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
