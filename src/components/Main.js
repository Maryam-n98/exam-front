import axios from 'axios';
import React, { Component } from 'react'
import Digimon from '../Digimon';

import FavoriteDigimons from './FavoriteDigimons';

 class Main extends Component {
     constructor(props){
         super(props);
         this.state={
             dogdata:[],
             showdata:false,
             local:process.env.REACT_APP_LOCAL,
             favdata:[],
             showfav:false
         }

     }

     componentDidMount = async()=>{
         const getdata= await axios.get(`${this.state.local}/getdata`)
         this.setState({
            dogdata:getdata.data,
            showdata:true,
         })
     }
     addtofav= async(item,index)=>{
      const newdata= await axios.post(`${this.state.local}/addtofav`,item);

      this.setState({
        favdata:newdata.data,
        showfav:true

      })
     }


    render() {
        return (
            <>
     

           {this.state.showdata && this.state.dogdata.map((item,index)=>{
               return(
                   <Digimon
                   item={item}
                   index={index}
                   addtofav={this.addtofav}
                   />

               )
           })}
           </>
        )
    }
}

export default Main
