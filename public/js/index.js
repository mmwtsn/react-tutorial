/* global React, ReactDOM */

var data = [
  {id: 1, author: 'Maxwell Watson', text: 'Hello world!'},
  {id: 2, author: 'Maxwell Watson', text: 'Hallo Welt.'}
]

var CommentList = React.createClass({
  render: function () {
    return (
      <div className='commentList'>
        <Comment author='A. Author'>I am an author.</Comment>
        <Comment author='A. Nother'>As am I.</Comment>
      </div>
    )
  }
})

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className='commentForm'>
        CommentForm
      </div>
    )
  }
})

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className='commentBox'>
        <h1>Comments!</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    )
  }
})

var Comment = React.createClass({
  render: function () {
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>

        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
)
