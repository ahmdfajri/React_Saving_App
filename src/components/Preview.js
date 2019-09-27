import React, {Component} from 'react';

class Preview extends Component {
    render(){
        return (
            <div className="container">
                <form className="col mx-md-n5 border rounded-lg" style={{padding:"2em"}}>
                    <div className="row-sm">
                    <h5>Total Pemasukan:</h5>
                {/* <p>IDR {total_pemasukan}</p> */}
                    </div>
                    <div className="row-sm">
                    <h5>Total Pengeluaran:</h5>
                {/* <p>IDR {total_pemasukan}</p> */}
                    </div>
                    <div className="row-sm">
                    <h5>Total:</h5>
                {/* <p>IDR{total_pemasukan}</p> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default Preview;