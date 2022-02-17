import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {editName, loadUser, selectName} from "./redux/features/currentUser/currentUserSlice";
import {useEffect} from "react";

function App() {
    const name = useSelector(selectName)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser())
    }, [])

    return (
        <div className="App">
            <h1>{name}</h1>
            <input type="text" value={name} onChange={(e) => {
                dispatch(editName(e.target.value))
            }}/>
        </div>
    );
}

export default App;
