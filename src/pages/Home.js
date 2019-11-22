/// external modules ///
import React from 'react';
import axios from 'axios'
import '../styles/home.css'
import { axioAddFavorite } from '../actions';

/// internal modules ///
import { routes } from './data/app-routes';
import { isSignedIn } from './data/app-states';

/***************************************
  COMPONENT
***************************************/
class Home extends React.Component {
  state = {
    comments: []
  }

  componentDidMount = () => {
    this.mounted = true;
    axios
      .get(corsURL + dsURL)
      .then(res => {
          let temp = [{}]
          let a = 0;
          for(let i = 0; a < 100; i++){
              if(temp[a]){
                  if(res.data[i].hacker !== temp[a].hacker){
                      temp[a] = res.data[i]
                      a++;
                  }
              } else {
                  temp[a] = res.data[i];
              }
          }
          this.setState({ comments: temp })
      })
      .catch(er => console.log(er))
  }
  componentWillMount() {
    this.mounted = false;
  }
  render(){
    console.log('here')
    console.log(this.state.comments)
    console.log(localStorage.getItem('isLoggedIn'))
    if(this.state.comments.length >= 1){
      return (
        <section id='home' className='page'>
          <header className='home-header'>
            <h2 id='homeh2'>Top 100 Saltiest Hackers</h2>
          </header>
          <main className='main-container'>
            {this.state.comments.map(comment => {
              if(localStorage.isLoggedIn === 'true'){
                console.log('logged in');
                return(
                  <div className='commenter-card'>
                    <h3>'{comment.comment}'<br/>Written By: {comment.hacker}</h3>
                    <h4>Rank: {comment.hacker_salt_ranking}</h4>
                    <button onClick={() => axioAddFavorite(comment)}>Favorite</button>
                  </div>
                )
              } else {
                console.log('not logged')
                return(
                  <div className='commenter-card'>
                    <h3>'{comment.comment}'<br/>Written By: {comment.hacker}</h3>
                    <h4>Rank: {comment.hacker_salt_ranking}</h4>
                  </div>
                )
              }
            })}
          </main>
          <footer></footer>
        </section>
      );
    } else {
      return(
        <section id='home' className='page'>
          <header className='home-header'>
            <h2 id='homeh2'>Top 100 Saltiest Hackers</h2>
          </header>
          <main className='main-container'>
            <h3 id='load'>Loading List...</h3>
          </main>
          <footer></footer>
        </section>
      )
    }
  }
};

/**************************************/
export default Home;
