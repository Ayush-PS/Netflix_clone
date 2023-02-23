import Row from './components/Row';
import './App.css';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
  
      <Nav/>
      <Banner fetchUrl ={requests.fetchNetflixOriginals}/>
      <Row tittle ="Netflix Originals" fetchUrl ={requests.fetchNetflixOriginals} isLargeRow/>
      <Row tittle ="Trending Now"  fetchUrl ={requests.fetchTrending} />
      <Row tittle ="Top Rated"  fetchUrl ={requests.fetchTopRated} />
      <Row tittle ="Action Movies"  fetchUrl ={requests.fetchActionMovies} />
      <Row tittle ="Comedy Movies"  fetchUrl ={requests.fetchComedyMovies} />
      <Row tittle ="Horror Movies"  fetchUrl ={requests.fetchHorrorMovies} />
      <Row tittle ="Romance Movies"  fetchUrl ={requests.fetchRomanceMovies} />
      <Row tittle ="Documentaries"  fetchUrl ={requests.fetchDocumantaries} />
      
      
     
    </div>
  
  );
}

export default App;
