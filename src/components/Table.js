
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
class Table extends Component {
    render() {
        return (
            <div className="container">
               <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Tipe</th>
                                    <th scope="col">Jumlah</th>
                                    <th scope="col">Judul</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {this.props.posts.map((post) => (
                    <tbody key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </tbody>
                ))}
                        </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(Table);