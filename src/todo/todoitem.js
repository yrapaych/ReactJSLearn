import React from "react"
import PropTypes from "prop-types"
import Context from "../todo/context"

const styles={
    li:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:'.5rem 1rem',
        border:'1px solid #ccc',
        borderRadius:'4px',
        marginBottom:'.5rem'
    },
    input:{
        marginRight:'1rem'
    }
}

function Todoitem({todo, index, onChange}){
    const {removeTodo} = React.useContext(Context)
    const classes = []
    if(todo.completed){
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" 
                style={styles.input} 
                checked={todo.completed}
                onChange={()=> onChange(todo.id)}></input>
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className="rm" onClick={()=>removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default Todoitem