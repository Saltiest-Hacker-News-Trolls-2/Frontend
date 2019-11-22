/// external modules ///
import React from 'react';
import axios from 'axios'

/// urls ///
const corsURL    = 'https://cors-anywhere.herokuapp.com/';
const dsURL      = 'https://hackernewsapilambda.herokuapp.com/saltyuser/?format=json';
// const webBaseURL = 'https://only-salty-hackers.herokuapp.com';
// const hnBaseURL  = 'https://hacker-news.firebaseio.com';

/***************************************
  COMPONENT
***************************************/
class Home extends React.Component {
  state = {
    comments: []
  }

  componentDidMount = () => {
    axios
        .get(corsURL + dsURL)
        .then(res => {
            let temp = [{}]
            for(let i = 0; i < 50; i++){
              temp[i] = res.data[i]
            }
            this.setState({ comments: temp })
        })
        .catch(er => console.log(er))
  }
  render(){
    console.log('here')
    console.log(this.state.comments)
      return (
        <section id='home' className='page'>
          <header>
            <h2>Home</h2>
            {this.state.comments.map(comment => {
              return(
                <div>
                  <h3>'{comment.comment}'</h3>
                  <h3>Written by: {comment.hacker}</h3>
                  <h4>Score: {comment.comment_saltiness_score}</h4>
                  <h4>Rank: {comment.hacker_salt_ranking}</h4>
                </div>
              )
            })}
          </header>
          <main>
            
            
          </main>
          <footer></footer>
        </section>
      );
  }
};

/**************************************/
export default Home;
