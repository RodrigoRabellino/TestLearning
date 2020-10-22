import React, {Component} from 'react'


class App extends Component {
    state = {
        users: [],
        urlUser: 'https://jsonplaceholder.typicode.com/users',
        cargando: true, 
    }

    componentDidMount () {
        fetch(this.state.urlUser)
        .then((res) => res.json())
        .then((users)=> console.log(this.setState({users, cargando: false})))
        .catch(error => {
            alert('wiuwiu error wiowio')
        })
    }

    render() {
        if(this.state.cargando){
            return(
                <h1>

                    CARGANDO! PAGA INTERNE!!!! 
                </h1>
            )
        }
        return(
            <div>
                <h1>Peticion Http</h1>
                <ul>
                    {this.state.users.map(
                        user =>(
                            <li key={user.id}>
                                {user.username}
                                <a href={`http://${user.website}`}>
                                    Web
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default App 