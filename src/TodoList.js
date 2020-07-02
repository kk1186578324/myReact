/*
@Author Admin
@Date 2020/07/02 9:04
*/
import React,{Component,Fragment} from 'react'
import './style.css'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
          inputValue:'123',
          list:['学英语','学数学']
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleBtnClick=this.handleBtnClick.bind(this)
        // this.handleItemDelete=this.handleItemDelete.bind(this)
    }

     render(){
         return (
             <Fragment>
             <div>
                 <input className='input' type="text" value={this.state.inputValue}
                 onChange={this.handleInputChange}
                 />
                 <button onClick={this.handleBtnClick}>提交</button>
             </div>
             <ul>
                 {
                     this.state.list.map((item,index)=>{

                         return <li key={index}  onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
                     })

                 }
             </ul>
             </Fragment>
         )
     }
   /**
    * @params
    *修改
   */
    handleInputChange(e){

        console.log(this)
        this.setState({
            inputValue:e.target.value,

        })
        console.log(e.target.value)
    }
    /**
     * @params
     *提交
    */

    handleBtnClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })


    }
    /**
     * @params
     *删除
    */
    handleItemDelete(index){
          const  list = [...this.state.list]
          list.splice(index,1)
          this.setState({
              list
          })

    }
}

export default TodoList
