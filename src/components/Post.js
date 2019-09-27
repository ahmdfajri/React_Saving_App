import React, { Component } from 'react';
import {connect} from 'react-redux';
class Post extends Component {
    render() {
        
        return (
            <tr>
                <td>{this.props.post.tipe}</td>
                <td>{this.props.post.jumlah}</td>
                <td>{this.props.post.judul}</td>
                <td>
                <button className="btn btn-primary"
       onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
       Edit</button>
        | 
      <button className="btn btn-danger"
      onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
      Delete</button>
                    </td>
            </tr>
        );
    }
}
export default connect()(Post);

