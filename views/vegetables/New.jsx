const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Vegetable</h1>
            <nav>
                <a href="/vegetables">Got Back To Vegetables Home Page</a>
            </nav>
            <form method="POST" action="/vegetables">
                Name: <input type="text" name="name" placeholder='Name of Vegetable Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of Vegetable Here'></input><br/>
                Size: <input type="text" name="size" placeholder='Size of Vegetable Here'></input><br/>
                Is Cooked: <input type="checkbox" name="isCooked"></input><br/>
                <input type="submit" value="Submit Vegetable"></input>
            </form>
            </>
        )
    }
}

module.exports = New