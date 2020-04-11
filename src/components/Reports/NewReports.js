import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


// const useStyles = makeStyles((theme) => ({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       width: 200,
//     },
//   }));
const API = 'http://localhost:3000/api/v1/reports'
  
export class NewReports extends Component {
    constructor(){
        super()
        this.state = {
            user_id: '',
            title: '',
            content: '',
            location: '',
            date: '',
            time: '',
            img_src: ''
        }
    }

    handleChange = event => {
        event.persist()
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(API, {
            method: "POST",
            headers: 
                'Content-Type: application/json'
          ,
          body: JSON.stringify(this.state)
        })
      }

    render() {

        return (
            <div>
                <h1>Create a new Report</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="title">
                            <label htmlFor="title">Title </label>
                            <input 
                            type="text"
                            id="username"
                            className=""
                            placeholder="Title"
                            name="title"
                            value={this.state.title} onChange={this.handleChange}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="">Content </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="content"
                            name="content"
                            value=""
                            />  
                        </div>
                        <div className="">
                            <label htmlFor="">Location </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="location"
                            name="location"
                            value=""
                            />  
                        </div>
                        <div className="">
                            <label htmlFor="">Date </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="date"
                            name="date"
                            value=""
                            />  
                        </div>
                        <div className="">
                            <label htmlFor="">Time </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="time"
                            name="time"
                            value=""
                            />  
                        </div>
                        <div className="">
                            <label htmlFor="">Image </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="img"
                            name="img"
                            value=""
                            />
                        </div>
                        <Button size="small" color="primary">
                        Submit Report
                        </Button>
                    </form>
            </div>
        )
    }
}

export default NewReports
