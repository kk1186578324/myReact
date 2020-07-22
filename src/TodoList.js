/*
@Author Admin
@Date 2020/07/02 9:04
*/
import React,{Component,Fragment} from 'react'
import './style.css'
import TodoItem from './TodoItem'
import { Button,Input,List} from 'antd';
import { CSSTransition,TransitionGroup} from 'react-transition-group'
import  store from './store'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from  './store/actionTypes.js'
import {getInputChangeAction,getInputAddAction,getInputDeleteAction } from  './store/actionCreators.js'
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
        this.handleStoreChange=this.handleStoreChange.bind(this)
        console.log(store)
        console.log(store.getState())
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
        // this.handleItemDelete=this.handleItemDelete.bind(this)
    }

     render(){
         console.log('render1')
         return (
             <Fragment>
             <div>
                 <span className={this.state.show?'show':'hide'}>qewqewqwe</span>
                 <CSSTransition
                     in={this.state.show}
                     timeout={1000}
                     classNames='fade'
                 >
                 <span>hhhhhhh</span>
                 </CSSTransition>
                 <button onClick={this.handleToggole}>toggle</button>
                 <label htmlFor="insertArea">输入内容</label>
                 <Input id="insertArea" className='input'  style={{ width: 200 }} type="text" value={this.state.inputValue}
                 onChange={this.handleInputChange}
                 />
                 <Button onClick={this.handleBtnClick} type="primary">提交</Button>
             </div>
                 <List
                     size="large"
                     header={<div>Header</div>}
                     footer={<div>Footer</div>}
                     bordered
                     dataSource={this.state.list}
                     renderItem={(item,index) => <List.Item key={item} onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
                 />
             {/*<ul ref={(ul)=>this.ul = ul}>*/}
                 {/*<TransitionGroup>*/}
                 {/*{*/}
                  {/*this.getTodoItem()*/}
                 {/*}*/}
                 {/*</TransitionGroup>*/}
             {/*</ul>*/}
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
             return <CSSTransition
                 in={this.state.show}
                 timeout={1000}
                 classNames='fade'
             >

             <TodoItem
                     content={item}
                     key={item}
                     index={index}
                     deleteItem={this.handleItemDelete.bind(this)}
                 >

             </TodoItem>
         </CSSTransition>
         })

     }
    handleStoreChange(){
        this.setState(store.getState())
    }
   /**
    * @params
    *修改
   */
    handleInputChange(e){
       const action = getInputChangeAction(e.target.value)
       store.dispatch(action)
        // this.setState({

        //     inputValue:e.target.value,
        //
        // })
        // const  value =this.input1.value
       // this.setState(()=>({
       //    inputValue:value

       // }))



        console.log(e.target.value)
    }
    /**
     * @params
     *提交
    */

    handleBtnClick(){
     const action = getInputAddAction()
     store.dispatch(action)

  /*      this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),()=>{

        })*/
        // console.log(this.ul.querySelectorAll('div').length)
        // this.setState({
        //
        // })


    }
    /**
     * @params
     *删除
    */
    handleItemDelete(index){
    const action = getInputDeleteAction(index)
    store.dispatch(action)
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
