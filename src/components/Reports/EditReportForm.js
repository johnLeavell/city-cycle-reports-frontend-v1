import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


const API = 'https://cors-anywhere.herokuapp.com/http://localhost:3000/api/v1/reports'
  
export class EditReportForm extends Component {
    constructor(){
        super()
        this.state = {
            user_id: "",
            title: "",
            content: "",
            location: "",
            date: "",
            time: "",
            img_src: "",
        }
    }

    handleChange = e => {
        e.preventDefault();
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
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
        this.setState({
            user_id: "",
            title: "",
            content: "",
            location: "",
            date: "",
            time: "",
            img_src: "",
        })
      }

    render() {
        // console.log(this.state);
        return (
            <div>
                <h1>Edit your Report</h1>
                    <form onSubmit={this.handleSubmit} autoComplete="off">
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
                            <label htmlFor="content">Content </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="Content"
                            name="content"
                            value={this.state.content} onChange={this.handleChange}
                            />  
                        </div>
                        <div className="">
                            <label htmlFor="">Location </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="Location"
                            name="location"
                            value={this.state.location} onChange={this.handleChange}
                            />  
                        </div> 
                        <div className="">
                            <label htmlFor="">Date </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="date"
                            name="date"
                            value={this.state.date} onChange={this.handleChange}
                            />  
                        </div>
                        <div className="">
                            <label htmlFor="">Time </label>
                            <input 
                            type="text"
                            placeholder="time"
                            name="time"
                            value={this.state.time} onChange={this.handleChange} />  
                        </div>
                        <div className="">
                            <label htmlFor="">Report Image </label>
                            <input 
                            type="text"
                            placeholder="image url"
                            name="reportImage"
                            value={this.state.img_src} onChange={this.handleChange} />
                        </div>
                        <Button size="small" color="primary">
                        Save edit
                        </Button>
                    </form>
            </div>
        )
    }
}

export default EditReportForm




