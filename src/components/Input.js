import React, { Component } from 'react';
import {connect} from 'react-redux';

class Input extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const tipe = this.getTipe.value;
        const jumlah =  this.getJumlah.value;
        const judul =  this.getJudul.value;
        const data = {
          id: new Date(),
          tipe,
          jumlah,
          judul
        }
        this.props.dispatch({
          type:'ADD_POST',
          data});
        this.getTipe.value = '';
        this.getJumlah.value = '';
        this.getJudul.value = '';
      }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="col mx-md-n5" >
                    <div className="row-sm">
                        <p>Tipe</p>
                        <select className="form-control" ref={(select)=>this.getTipe = select} >
                            <option selected>Pilih</option>
                            <option value="Pemasukan">Pemasukan</option>
                            <option value="Pengelauran">Pengeluaran</option>
                        </select>
                    </div>
                    <div className="row-sm">
                        <p>Jumlah</p>
                        <input className="form-control" type="number" placeholder="Jumlah"  ref={(input)=>this.getJumlah = input}>
                        </input>
                    </div>
                    <div className="row-sm">
                        <p>Judul</p>
                        <input className="form-control" type="text" placeholder="Judul"  ref={(input)=>this.getJudul = input}></input>
                    </div>
                    <div className="row p-md-3">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(Input);