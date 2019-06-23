import React from 'react'
import Context from './context'
class Modal extends React.PureComponent{
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return(<div>asas</div>)
    }
}
function contextCurstom(props){
    return <Context.Consumer>
        {obj=><Modal {...props} {...obj}/>}
    </Context.Consumer>
}
export default contextCurstom;