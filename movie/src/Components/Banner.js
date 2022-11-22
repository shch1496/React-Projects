import React, { Component } from 'react'
// import {movies} from './getMovies'
import axios from "axios";

// export default class Banner extends Component {
//   render() {
//     let movie = movies.results[0];
//     return (
//       <div className="card banner-card">
//         <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="card-img-top banner-img" alt="..." />
     
//           <h5 className="card-titlebanner-title">{ movie.original_title }</h5>
//           <p class="card-text banner-text">
//              {movie.overview}
//           </p>
//           {/* <a href="#" class="btn btn-primary" >Go somewhere</a> */}
          

//     </div>
//     )
//   }
// }


export default class Banner extends Component {
  constructor() {
    
    super();
    this.state = {
      movies: []
    }

    console.log("Constructor called")
  }

  async componentDidMount() {

    console.log("Component did mount called")
    let data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=2"
    );
    console.log(data.data.results)
    this.setState({
      movies: [...data.data.results]
    });

  }


  render() {
    // let movie = movies.results[7];
    let movie= this.state.movies[12]
    return (

      <>
        {this.state.movies.length === 0 ? (
          <div className="loading" role="status">
                <div className="loading__dot"></div>
                <div className="loading__dot"></div>
                <div className="loading__dot"></div>
                <div className="loading__dot"></div>
                <div className="loading__dot"></div>
            </div>
        ) : (
          

          <header className="banner">
          <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="banner-background" alt="banner" />
          
          <div className="banner-content">
          <h1 className="banner-title">{movie.original_title}</h1>
          <p className="banner-description">{movie.overview}</p>
          </div>
         
       </header>
 
        ) }
      </>
    
   

    )
  }
}

