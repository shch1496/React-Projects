import React, { Component } from 'react'
// import {movies} from './getMovies'
import axios from "axios";

// export default class List extends Component {
//   constructor() {
//     console.log("Constrctor called");
//     super();
//     this.state = {
//       hover: "",
//       movies:[],
//       currPage: 1,
//     };

//   }


//   handleEnter = (id) => {
//     this.setState({
//       hover: id
//     });
//   }


//   handleLeave = () => {
//     this.setState({
//       hover: ""
//     })
//   }

//   async componentDidMount() {
//     console.log("CDM called");
//     let data = await axios.get(
//       "https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=1"
//     );

//     console.log(data.data);
//     this.setState ({
//       movies: [...data.data.results]
//     })
//   }


//   // componentDidUpdate() {
//   //   console.log("CDU is called")
//   // }


//   async getUpdatedMovies() {
//     console.log("getUpdated movies called");
//     let data = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=${this.state.currPage}`
//     )

//     console.log(data.data);
//     this.setState({
//       movies: [...data.data.results]
//     })

//   }

//   componentWillUnmount() {
//     console.log("CWU is called")
//   }


//   handlePrevPage = () => {
//       if(this.state.currPage > 1) {
//         this.setState({currPage: this.state.currPage -1}, this.getUpdatedMovies)
//       }
//   }

//   handleNextPage = () => {
//     this.setState({
//       currPage: this.state.currPage + 1
//     }, this.getUpdatedMovies )
//   }

//   render() {
//     console.log("Render method called");
//     let allMovies = this.state.movies
//     return (
//       <>
//         {allMovies.length === 0 ? (
//           <div class="spinner-border text-info" role="status">
//             <span class="visually-hidden">Loading...</span>
//           </div>
//         ) : (
//           <>
//          <div>
//             <h3 className="trending display-3">Trending</h3>
//             <div className="movies-list">
//                 {
//                     allMovies.map((movieObj) => {
//                         return (<div className="card movie-card"
//                           onMouseEnter={() => this.handleEnter(movieObj.id)}
//                           onMouseLeave={this.handleLeave}
//                           key={movieObj.id}
                          
//                         >
//                         <img src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="..." />
        
//                         <h5 className="card-title movie-title">{ movieObj.original_title }</h5>
//                         {/* <p class="card-text movie-text">
//                             {movie.overview}
//                         </p> */}
//                         <div className='button-wrapper'>
//                            {this.state.hover === movieObj.id && (
//                               <a href="#" className="movie-button btn btn-info" >Add to Favourites</a>
//                            )}
                           
//                         </div>  
//                     </div>)
//                     })
//                 }
//               </div>

              
//           </div>

//           <nav aria-label="Page navigation example" className="pagination">
//               <ul className="pagination">
//                 <li className="page-item" onClick={this.handlePrevPage}>
//                   <a className="page-link" href="#">
//                     Previous
//                   </a>
//                 </li>
//                 <li className="page-item">
//                   <a className="page-link" href="#">
//                     {this.state.currPage}
//                   </a>
//                 </li>
        
//                 <li className="page-item" onClick={this.handleNextPage}>
//                   <a className="page-link" href="#">
//                     Next
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//               </>
//         ) }
//       </>
//     )
//   }
// }
















class MovieCard extends Component {
    render() {
      return (
        <div className='movie-card'>
        <img src={`https://image.tmdb.org/t/p/original/${this.props.movieObj.backdrop_path}`} alt="movie-card" className="movie-card__img"/>  
        <div className="movie-card__details">
            <h3 className="movie-card-title">{ this.props.movieObj.original_title}</h3>
            <button className='btn-primary'>Add to Favorites</button>
         </div>     
  
    </div>
      )
    }
}


export default class List extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currPage: 1
    }
  }

  async componentDidMount() {
    console.log("CDM called");
    let data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=1"
    );

    this.setState ({
      movies: [...data.data.results]
    })
  }

  async getUpdatedMovies() {
    let data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=${this.state.currPage}`
      )
    
      console.log(data)
    this.setState({
      movies: [...data.data.results]
    })
  }


  handlePrevPage = () => {
       if(this.state.currPage > 1){
           this.setState({
              currPage: this.state.currPage -1
           },
           this.getUpdatedMovies
           )
       }
  }

  handleNextPage = () => {
        this.setState({
          currPage: this.state.currPage + 1
        },
         this.getUpdatedMovies
        )
  }
   

  render() {
    let allMovies = this.state.movies;
    return (
      <>
     {allMovies.length === 0 ? (
            <div className="loading" role="status">
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
        </div>
        ) : (
          <section class="content">

          <h2 className="trending">Trending Movies</h2>
          <div className="movie-gallery">
   
           {
           allMovies.map(movieObj => {
            return (<MovieCard movieObj={movieObj} />)
           })
           } 
              
           </div>
           <div className="pagination-container">
              <nav className="pagination">
                    <a href="#" onClick={this.handlePrevPage}>&laquo;</a>
                    {/* <a href="#">1</a> */}
                    <a href="#" class="active">{this.state.currPage}</a>
                    {/* <a href="#">3</a> */}
                    <a href="#" onClick={this.handleNextPage}>&raquo;</a>
              </nav>
           </div>
       
       </section>
           
        ) }
      </> 

    
    )
  }
}


