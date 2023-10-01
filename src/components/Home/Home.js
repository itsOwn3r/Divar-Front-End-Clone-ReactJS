import '../../App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
// import {useParams} from 'react-router-dom'
function Home() {
    // let url = useParams();
    return (
    <>
      <Header />
      <Nav />
      <Main />
    </>
  );
}

export default Home;
