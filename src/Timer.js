import React from "react";

export class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            time: 0
        };
        this.timer = null;
        console.log("Timer Constructor")
    }

    static getDerivedStateFromProps(){
        console.log("Timer getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Timer shouldComponentUpdate")
        console.log("nextProps", nextProps)
        console.log("nextState", nextState)
        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
    }

    render(){
        console.log("Timer Render")
        return(
            <>
            <h1>Time Spent : {new Date (this.state.time * 1000).toISOString().slice(11,19)}</h1>
            </>   
        )  
    }

    componentDidMount(){
        console.log("Timer componentDidMount");
        console.log("---------------------------");

        // this.timer = setInterval(() => {
        //     this.setState((prevState) => ({ time: prevState.time + 1}))
        // }, 1000);
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Timer getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("Timer componentDidUpdate")
        console.log("---------------------------")
        console.log("prevProps",prevProps)
        console.log("prevState",prevState)
        console.log("snapShot",snapShot)

        if(prevProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(() => {
                    this.setState((prevState) => ({ time: prevState.time + 1}))
                }, 1000);
            }else{clearInterval(this.timer);}
        }

        // if(this.state.time === 10){
        //     clearInterval(this.timer);
        // }
    }

    componentWillUnmount() {
       console.log( "timer componentWillUNmount")
       clearInterval(this.timer);
    }
}
