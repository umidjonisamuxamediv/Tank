import Glavniy from "./components/Glavniy/Glavniy";
import BaysicLayout from "./components/layout/BaysicLayout";



function App() {
  return (
    <div className="App">
     <BaysicLayout>
      <Glavniy/>
     </BaysicLayout>
    </div>
  );
}

export default App;
