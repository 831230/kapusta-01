import useAuth from "./hooks/useAuth";

const App = () => {
  const {userData, isLoggedIn} = useAuth();
  console.log({userData, isLoggedIn});
  return ( 
    <>
      <h2>Hello</h2>
    </>
   );
}
 
export default App;
