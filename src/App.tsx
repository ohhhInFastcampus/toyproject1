import "./App.css";
import { Switch } from "./components/ui/switch";

import { Textarea } from "./components/ui/textarea";

function App() {
  return (
    <>
      <Switch checkedColor="nbg-red-950" />
      <Textarea
        placeholder="Tell us a little bit about yourself"
        className="resize-none"
      />
    </>
  );
}

export default App;
