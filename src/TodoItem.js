/*
@Author Admin
@Date 2020/05/01 10:42
*/
import React,{Component, Fragment} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handlerEmit = this.handlerEmit.bind(this)
    }
    render(){
        const {content,test} = this.props
        return(
                <div onClick={this.handlerEmit}>
                    {test}-{content}
                </div>
        )
    }
    handlerEmit(){
        const {index,handleItem} = this.props
        handleItem(index)
    }
 }
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    handleItem:PropTypes.func
}
TodoItem.defaultProps = {
    test:'hello world'

}
export default TodoItem

