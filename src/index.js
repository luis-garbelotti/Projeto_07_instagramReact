import ReactDOM from "react-dom";
import NavBar from './Components/NavBar'


function App() {
    return (
        <div>   
            <NavBar />
        </div>
    );
}

const app = <App />;
ReactDOM.render(app, document.querySelector(".root"));