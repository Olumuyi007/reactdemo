import Header from './Header'
import Form from './component/Form'
import Carousel from './component/Carousel'
import Profile from './component/profile/ProfileP'
import Fullname from './component/profile/FullName';
function App() {
  return (
    <>
    <div classaName= "App">
       <Header/>
    </div>
  <Carousel/>
    <Form />
    <Profile />
    <Fullname />
    </>
  );
}

export default App;
