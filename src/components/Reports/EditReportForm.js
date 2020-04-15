import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


export class EditReportForm extends Component {
    constructor(){
        super()
        this.state = {
                title: '',
                content: '',
                date: '',
                time: '',
                location: '',
                img_src: ''
            }
        }
    

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e, clickedReport) => {
		e.preventDefault()

		const reqObj = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				...this.state
			})
        }

        fetch(`http://localhost:3000/api/v1/reports${clickedReport.id}`, reqObj)
        .then(resp => resp.json())
        .then(report => {  console.log(report);
        
            // if (report.error) {
            //     alert(report.error)
            //     return
            // }
            //     this.props.history.push('/')
            })

        this.setState({
            title: '',
            content: '',
            date: '',
            time: '',
            location: '',
            img_src: ''
        })
    }

    
    render() {
        return (
            <div>
                <h1>Create a new Report</h1>
                    <form onSubmit={this.handleOnSubmit} autoComplete="off">
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
                            value={this.state.content} onChange={this.handleChange}
                            />  
                        </div>
                        <div className="">
                            <label htmlFor="">Location </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="location"
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
                            className=""
                            placeholder="time"
                            name="time"
                            value={this.state.time} onChange={this.handleChange}
                            />  
                        </div>
                        <div className="">
                            <label htmlFor="">Image </label>
                            <input 
                            type="text"
                            className=""
                            placeholder="img"
                            name="img"
                            value={this.state.img_src} onChange={this.handleChange}
                            />
                        </div>
                        <Button size="small" color="primary">
                        Update Report
                        </Button>
                    </form>
            </div>
        )
    }
}

export default EditReportForm