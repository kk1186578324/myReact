/*
@Author Admin
@Date 2020/07/02 9:04
*/
import React,{Component,Fragment} from 'react'
import './style.css'
import TodoItem from './TodoItem'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
          inputValue:'123',
            show:true,
          list:['学英语','学数学']
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleBtnClick=this.handleBtnClick.bind(this)
        this.handleToggole=this.handleToggole.bind(this)
        // this.handleItemDelete=this.handleItemDelete.bind(this)
    }

     render(){
         console.log('render1')
         return (
             <Fragment>
             <div>
                 <span className={this.state.show?'show':'hide'}>qewqewqwe</span>
                 <button onClick={this.handleToggole}>toggle</button>
                 <label htmlFor="insertArea">输入内容</label>
                 <input id="insertArea" className='input' type="text" value={this.state.inputValue}
                 onChange={this.handleInputChange} ref={(input)=>this.input1=input}
                 />
                 <button onClick={this.handleBtnClick}>提交</button>
             </div>
             <ul ref={(ul)=>this.ul = ul}>
                 {

                  this.getTodoItem()
                 }
             </ul>
             </Fragment>
         )
     }

     /**
      * @params
      *挂载前
     */
     componentWillMount(){

      console.log('componentWillMount')
     }
    /**
     * @params
     *挂载后
     */
    componentDidMount(){

        // ajax
        console.log('componentDidMount')
    }
    /**
     * @params
     *组件更新前自动更新
    */
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    /**
     * @params
     *组件更新前，自动执行，基于shouldComponentUpdate之后执行，shouldComponentUpdate返回ture时执行，返回false不执行
    */
    componentWillUpdate(){
        console.log('componentWillUpdate')

    }
    /**
     * @params
     *组件更新后，自动执行，基于shouldComponentUpdate之后执行，shouldComponentUpdate返回ture时执行，返回false不执行
    */
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    /**
     * @params
     *当一个组件在父组件里接受到了一个参数，
     * 如果组件第一存在父组件，则不会执行
     * 如果组件第二次存在父组件，就会执行
    */

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')

    }
    /**
     * @params
     *当这个组件即将从页面中剔除时执行
    */
    componentWillUnmount(){

        console.log('componentWillUnmount')
    }

     getTodoItem(){

     return this.state.list.map((item,index)=>{
             return  <TodoItem
                 content={item}
                 key={item}
                 index={index}
                 deleteItem={this.handleItemDelete.bind(this)}
             ></TodoItem>
         })

     }
   /**
    * @params
    *修改
   */
    handleInputChange(e){

        console.log(this)
        // this.setState({
        //     inputValue:e.target.value,
        //
        // })
        const  value =this.input1.value
       this.setState(()=>({
          inputValue:value
       }))
        console.log(e.target.value)
    }
    /**
     * @params
     *提交
    */

    handleBtnClick(){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),()=>{

        })
        console.log(this.ul.querySelectorAll('div').length)
        // this.setState({
        //
        // })


    }
    /**
     * @params
     *删除
    */
    handleItemDelete(index){

          // list.splice(index,1)
          // this.setState({
          //     list
          // })
        this.setState((prevState)=>{
            const  list = [...prevState.list]
            list.splice(index,1)
            return {list}
        })

    }

    handleToggole(){
        this.setState((prevState)=>({
            show:!prevState.show

        }))


    }
}

export default TodoList
