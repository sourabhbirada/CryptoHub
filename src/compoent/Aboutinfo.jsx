import React from "react";

class Info extends React.Component{

    constructor(props) {
        super(props)

        console.log('construstor called');
        
        this.state = {
            count1:0,
            count2:1,
            count3:2
        }
    }

    componentDidMount() {
        console.log("Mount");
        

    }

    componentDidUpdate() {
        console.log('update');
        

    } 

    componentWillUnmount() {
        console.log('unmout');
        

    }

    render() {
        console.log('Render called');
        
        const { name , github , insta} = this.props
        const { count1 , count2 , count3} = this.state
        return (

            <div className="info">
            <h2>{count1}</h2>
            <h2>{count2}</h2>
            <h2>{count3}</h2>
            <button onClick={() => {
                this.setState({
                    count1:this.state.count1+1
                })
            }}>Click</button>
            <h1>{name}</h1>
            <h2>{github}</h2>
            <h2>{insta}</h2>
        </div>
        )
    }
}


export default Info;