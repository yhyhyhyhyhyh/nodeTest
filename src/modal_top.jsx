import React from 'react'
import Context from './context'
import Modal from './modal'
class ModalTop extends React.PureComponent{
    constructor(props) {
        super(props)
    }
    render() {
        return(<div>
            <div>top</div>
            <Context.Provider value={this.props}>
                <Modal tip="adddtop"/>
            </Context.Provider>
        </div>)
    }
}
export default ModalTop;