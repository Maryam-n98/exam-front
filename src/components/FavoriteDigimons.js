import React, { Component } from 'react'
import Fav from './Fav';
import axios from 'axios';
import Formchange from './Formchange';
 class FavoriteDigimons extends Component {
     constructor(props){
         super(props);
         this.state={
          favdata:[],
          showfav:false,
          local:process.env.REACT_APP_LOCAL,
          showForm:false
         
         }
     }

     componentDidMount = async()=>{
        const getfav= await axios.get(`${this.state.local}/getfav`)
        this.setState({
            favdata:getfav.data,
          showfav:true
        })
    }

    deletefun=async(index)=>{
        const id =this.state.favdata[index]._id
        const deletedata= await axios.delete(`${this.state.local}/deletefun/${id}`)
        this.setState({
            favdata:deletedata.data,
        })

    }



    imgchange=(e)=>{
        this.setState({
            img:e.target.value
        })
    }
    levelchange=(e)=>{
        this.setState({
            level:e.target.value
        })
    }
    namechange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    showForm=(index)=>{
        const dig =this.state.favdata[index];
        this.setState({
            name:dig.name,
            img:dig.img,
            level:dig.level,
            index:index,
            showForm:true

        })
    }

    updatefun=async(e)=>{
        e.preventdefault();
        const updatedata={
            name:this.state.name,
            img:this.state.img,
            level:this.state.level
        }
        const newdig = await axios.put(`${this.state.local}/updatefun/${this.state.index}`,updatedata)
        this.setState({
            favdata:newdig.data
        })
        
    }
     render() {
        return (
           <>
          {this.state.showForm && this.state.favdata.map((item,index)=>{
              return(
                  <Formchange
                  levelchange={this.levelchange}
                   imgchange  ={this.imgchange}
                   namechange={this.namechange}
                   updatefun={this.updatefun}
                   showForm={this.showForm}
                  item={item}
                   index={index}


              />
              )
          })}




                  {this.state.showfav && this.state.favdata.map((item,index)=>{
               return(
                   <Fav
                   
                   item={item}
                   index={index}
                   deletefun={this.deletefun}
                   showForm={this.showForm}
                   />
               )
            })}
           </>
        )
    }
}

export default FavoriteDigimons
