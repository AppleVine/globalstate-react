import BlogsList from './components/BlogsList';
import UserAuthInfo from './components/UserAuthInfo';
import UserContextComponent from './components/UserContextComponent';
import UserAuthContext, {defaultUserAuthInfo} from "./contexts/UserAuthContext"
import BlogsProvider from "./components/BlogsContextComponent"

function App() {
  return (
    <div className="App">
      
      {/* <UserAuthContext.Provider value = {defaultUserAuthInfo}> 
        <UserAuthInfo />
      </UserAuthContext.Provider> */}

      <UserContextComponent>
        <BlogsProvider>
          <UserAuthInfo />
          <BlogsList /> 
        </BlogsProvider>
      </UserContextComponent>


    </div>
  );
}

export default App;
