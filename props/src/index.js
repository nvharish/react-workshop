import ReactDOM from 'react-dom/client';
import App, { ShowList, ShowName, ShowPropsUsingDesturcting } from './App';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <ShowName name="John" />
    <ShowPropsUsingDesturcting name="Props Example" version={2 + 1} />
    <ShowList fruits="Nuts,Kismiss,Watermalon"/>
  </div>
);