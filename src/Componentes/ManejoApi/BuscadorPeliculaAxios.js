import React, {Component} from 'react'
import axios from 'axios'

class App extends Component{
    state ={
        movie: {},
        isFetching: false,
    }

    handleSubmit =(event) =>{
        event.preventDefault()
        this.setState({isFetching: true})

        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=4f1faf6e'

        axios.get(url, {
            params: {
                t: title
            }
        })
             .then((res) => this.setState({movie: res.data, isFetching: false}))
    }

    render(){
        const {movie, isFetching} = this.state
        return(
            <div>
                <h1>Buscar pelicula</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Name'/>
                    <button>Buscar</button>
                </form>
                
                {isFetching && (<h1>Cargando...</h1>)}

                {movie.Title && !isFetching && (
                <div>
                    
                    <h1>{movie.Title} ({movie.Year}) Calif: {movie.Metascore}%</h1>
                    <img src={movie.Poster} alt="Poster"/>
                    <h1>{movie.Director}</h1>
                    <p>{movie.Plot}</p>
                </div>
                )
                
                }
                

                
            </div>
        )
    }
}

export default App