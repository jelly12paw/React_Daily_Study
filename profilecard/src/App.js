import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Profile 
        image={"https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80"}
        name={"BLACK DOG"}
        title={"리트리버인가?"}
        isLogin={true}
      />
    </>
  );
}

export default App;
