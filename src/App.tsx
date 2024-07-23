import './App.css'
import {Intro} from "./screens/Intro/Intro.tsx";
import {Feedbacks} from "./screens/Feedbacks/Feedbacks.tsx";
import {ChatScreen} from "./screens/ChatScreen/ChatScreen.tsx";

function App() {

  return (
    <div className="container">
        <Intro />
        <Feedbacks />
        <ChatScreen />
    </div>
  )
}

export default App
