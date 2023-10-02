import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import RecentlyViewes from './components/RecentlyViewes';
import VideoList from './components/VideoList';
import request from './request';
import Row from './components/Row'
function App() {
  return (
    <>
      <Header />

      <Banner fetchUrl={request.popular}/>
      
      <VideoList fetchUrl={request.upcoming}/>

      <Row title="Now playing" fetchUrl={request.toprated}/>

      <RecentlyViewes fetchUrl={request.popular}/>
      <Footer />
    </>
  );
}

export default App;
