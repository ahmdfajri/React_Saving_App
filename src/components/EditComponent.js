import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTipe = this.getTipe.value;
        const newJumlah = this.getJumlah.value;
        const newJudul = this.getJudul.value;
        const data = {
            newTipe,
            newJumlah,
            newJudul
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <td>
                        <select className="form-control" ref={(select) => this.getTipe = select} >
                            <option selected>Pilih</option>
                            <option value="Pemasukan">Pemasukan</option>
                            <option value="Pengelauran">Pengeluaran</option>
                        </select>
                    </td>
                    <td>
                        <input className="form-control" type="number" placeholder="Jumlah" ref={(input) => this.getJumlah = input}>
                        </input>
                    </td>
                    <td>
                        <input className="form-control" type="text" placeholder="Judul" ref={(input) => this.getJudul = input}></input>
                    </td>
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);