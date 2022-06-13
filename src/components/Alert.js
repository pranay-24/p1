import React from'react'
import useState from 'react'

export default function Alert(props)
{   
    return(
    
props.alert && <div className={`alert alert-${props.alert} alert-dismissible fade show`} role="alert">
  A simple primary alert—check it out!
</div>
    
    )
}