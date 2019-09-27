import React, { Component } from 'react';

class Post extends Component {
    render() {
        
        return (
            <tr>
                <td>{this.props.post.tipe}</td>
                <td>{this.props.post.jumlah}</td>
                <td>{this.props.post.judul}</td>
                <td><button>Edit</button> | <button>Delete</button></td>
            </tr>
        );
    }
}
export default Post;

