const React = require('react')

class Edit extends React.Component {
    render(){
        const {name, _id, color, size, isCooked} = this.props.vegetable
        return (
            <>
                <h1>Edit This Vegetable</h1>
                <nav>
                    <a href="/vegetables"> Go Back To Vegetables Home</a>
                </nav>
                <form method="POST" action={`/vegetables/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Color: <input type="text" name="color" defaultValue={color}></input><br />
                    Size: <input type="text" name="size" defaultValue={size}></input><br />
                    Is Cooked: <input type="checkbox" name="isCooked" defaultChecked={isCooked}/> <br />
                    <input type="submit" value="Edit Vegetable" />
                </form>
            </>
        )
    }
}

module.exports = Edit