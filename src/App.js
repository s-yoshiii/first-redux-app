import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>カウント：{counter}</h3>
      {isLogin ? <h3>ログインに成功！</h3> : <h3>ログインして下さい</h3>}
    </div>
  );
}

export default App;
