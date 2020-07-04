/*
@Author Admin
@Date 2020/07/03 19:54
*/
import React,{Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component{
   constructor(props){
       super(props)
       this.handleClick=this.handleClick.bind(this)
   }
    render(){
         const {content,test }=this.props
        return <div
            onClick={this.handleClick}
        >{test}-{content}
        </div>
    }
    /**
     * @params
     *组件更新前自动更新
     */
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true
        }else {
            return false
        }
    }
    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps')

    }
    componentWillUnmount(){

        console.log('child componentWillUnmount')
    }
    handleClick(){
       const {deleteItem,index} = this.props
       deleteItem(index)

    }
}
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps={
    test:'hello World'

}

export default TodoItem
