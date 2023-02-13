import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <body>
      <Profile 
        image={"https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80"}
        name={"BLACK DOG"}
        title={"리트리버인가?"}
        isLogin={true}
      />
      <Profile 
        image={"https://images.unsplash.com/photo-1587723958656-ee042cc565a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
        name={"LONGHAIR CAT"}
        title={"노르웨이숲 고양이"}
        isLogout={true}
      />
      <Profile 
        image={"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
        name={"WHITE RABBIT"}
        title={"계묘년!"}
        isLogin={true}
      />
    </body>
  );
}

export default App;
