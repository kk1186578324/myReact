/*
@Author Admin
@Date 2020/05/01 9:12
*/
import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import Test from './Test'
import './style.css'
import store from './store'
import { getInputChangeAction,getInputAddAction,getInputDelAction,initListAction } from './store/actionCreators'
import {connect} from 'react-redux';
import axios from 'axios'
class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     inputValue: '222',
        //     list: ['学习', 'jixuxuexi'],
        //     show:true
        // }
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)

        this.handleDel = this.handleDel.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBtn = this.handleBtn.bind(this)
        this.handleRendLi = this.handleRendLi.bind(this)
        this.handleToggole = this.handleToggole.bind(this)

    }


    render() {
        const {inputValue, changeInputValue,submitInputValue} = this.props
        return (

            <Fragment>
                {/*hhhh*/}

                {/*llll*/}

                 <span className={this.state.show?'show':'hide'}>llll</span>
                <button onClick={this.handleToggole}>toggle</button>
                <label htmlFor="isInput">输入</label>
                <input ref={(input)=>{this.tinput=input}} type="text" value={inputValue}
                       id='isInput'
                       className='input'
                       onChange={changeInputValue}
                />
                <button onClick={submitInputValue}>提交</button>
                <ul>
                    {this.handleRendLi()}
                </ul>
                <Test></Test>
            </Fragment>


        )

    }

    handleRendLi(){

      return  this.state.list.map((item, index) => {
            return(

                <TodoItem key={index} content={item} index={index} handleItem={this.props.delInputValue}>

                </TodoItem>

            )
        })

    }
    handleToggole(){

        this.setState({
            show:this.state.show? false:true
        })
    }
    componentDidMount(){
        axios.get('/list.json').then((res)=>{
            console.log(res)



        })


      setTimeout(()=>{
          let arr = ['hello','world','li']
           const action = initListAction(arr)
           store.dispatch(action)
      },300)

    }
/*    componentWillMount(){
        console.log('componentWillMount','color:#0f0;')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')

    }
    componentWillUpdate (nextProps,nextState){
        console.log(nextProps,nextState,'componentWillUpdate')
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState,'componentDidUpdate')
    }
    shouldComponentUpdate(nextProps,nextState){

        console.log(nextProps,nextState,'shouldComponentUpdate')
        return true

    }*/
    handleChange(e) {
        const value =  e.target.value
        const action = getInputChangeAction(value)
        store.dispatch(action)

        // console.log(this.tinput.value)

        // this.setState(()=>({
        //     inputValue: value
        //
        // }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    handleStoreChange(){
     this.setState(store.getState());
      console.log('storeChange')
    }
    handleBtn(){
        const action = getInputAddAction()
        store.dispatch(action)
        // this.setState((prevState)=>({
        //     list: [...prevState.list,prevState.inputValue],
        //     inputValue: ''
        //
        // }))
   /*     this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })*/

    }
    handleDel(index){
        const action = getInputDelAction(index)
        store.dispatch(action)
        // this.setState((prevState)=>{
        //     const list = [...prevState.list]
        //     list.splice(index,1)
        //    return {list}
        // })
    }

}
const  mapStateToProps = (state)=>{
    return {

        inputValue:state.inputValue

    }

}
const  mapDispatchToProps = (dispatch)=>{
    return {

        changeInputValue(e){
            const value =  e.target.value
            const action = getInputChangeAction(value)
            dispatch(action)
        },
        delInputValue(index){
            const action = getInputDelAction(index)
            store.dispatch(action)

        },
        submitInputValue(){

            const action = getInputAddAction()
            store.dispatch(action)

        }


    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
