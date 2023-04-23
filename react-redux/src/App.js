import { Provider } from "react-redux";
import store from "./redux/store";
import HeroReadonly from "./components/HeroReadonly";
import HeroFunList from "./components/HeroFunList";
import HeroClassList from "./components/HeroClassList";

function App() {
    return <div>
        <Provider store={store}>
            <HeroClassList />
            <HeroReadonly />
            <HeroFunList />
        </Provider>
    </div>
}

export default App;