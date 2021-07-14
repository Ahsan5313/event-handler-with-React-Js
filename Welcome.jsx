import React, {Component} from 'react'
import './style.css'


class Welcome extends Component{


  state = {

    name :""
  }
 

  onChangeHandler = (e) =>{

    let val = e.target.value
    this.setState({name: val})
  }

  render(){


    return(

      <div>   

         <h1 >Hello {this.state.name} </h1>
          <form>
            <div className='form-control'>
               <label>Name:</label><br/>
               <input type='text' onChange={this.onChangeHandler} /><br/>
               <button type='submit'>Submit</button>
            </div>
          </form>
      
      </div>
    )
  }

}

export default Welcome;

