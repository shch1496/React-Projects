import React, { Component } from 'react'
import Logo from "./imdb-icon.png"
// export default class Navbar extends Component {
//   render() {
//     return (
//       <div style={{display: "flex", color: "blue", padding:"1rem", justifyContent: "center", alignItems:"center"}}>
//         <h1>Movies App</h1>
//         <h2 style={{marginLeft: "2rem"}}>Favourites</h2>
//       </div>
//     )
//   }
// }



export default class Navbar extends Component {
  render() {
    return (
       <navbar>
           <ul class="nav-list">
                 <li class="nav-item">
                    <a href="#"><img src={Logo} width="50"></img></a>
                 </li>

                 <li class="nav-item">
                    <button class="btn-primary">Favourites</button> 
                 </li>
           </ul>
       </navbar>
    )
  }
}
