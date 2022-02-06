import './App.css';

function Joke(props) {
    console.log("props", props);
    // {{ display: !props.q && "none" }} ความหมาย ถ้าไม่มี q ให้ใช้ none
    return (
        <div>
            <h3 style={{ display: props.q ? "block" : "none" }}>123: {props.q}</h3>                        
            <h3>456: {props.qe}</h3>
        </div>
    );
}

export default Joke;
