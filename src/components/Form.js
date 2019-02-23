import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:''
      }
    }
    handleUsernameChange=event => {
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange=event => {
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=event => {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
      const{ username,comments,topic}=this.state
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <label>UserName</label>
        <input type="text"
        value={username}
        onChange={this.handleUsernameChange}></input>
      </div>
      <div>
        <label>comments</label>
        <textarea value = {comments}
        onChange={this.handleCommentsChange}></textarea>
      </div>
      <div>
        <label>Topic</label>
        <select value={topic}
        onChange={this.handleTopicChange}>
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        </select>
      </div>
      <button type="Submit">Submit</button>
      </form>
    )
  }
}

export default Form
