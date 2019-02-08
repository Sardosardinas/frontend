import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <br />
            <div className="container">
                <div className="alert alert-primary">
                    <h2>PERSONAL FINANCE</h2>
                </div>
                <div>
                    <table className="table">
                        {this.state.data.map(Month => (
                            <React.Fragment>
                                <thead>

                                    <th className="col-xs-12">{Month.month}</th>

                                </thead>
                                <tbody>

                                    <th className="col-xs-6">Income</th>
                                    <th className="col-xs-6">Amount</th>


                                    {Object.keys(Month.income).map((key, i) => (
                                        <React.Fragment>

                                            <tr>
                                                <td className="col-xs-3"><input className="form-control" value={key}></input></td>
                                                <td className="col-xs-3"><input className="form-control" value={Month.income[key]} ></input></td>
                                            </tr>

                                        </React.Fragment>
                                    )

                                    )}
                                    <tr>
                                        <th className="col-xs-3"> Expenses</th>
                                        <th className="col-xs-3">Amount</th>
                                    </tr>
                                    {Object.keys(Month.expenses).map((key, i) => (
                                        <React.Fragment>

                                            <tr>
                                                <td className="col-xs-3"><input className="form-control" value={key}></input></td>
                                                <td className="col-xs-3"><input className="form-control" value={Month.expenses[key]} ></input></td>
                                            </tr>
                                        </React.Fragment>
                                    )

                                    )}

                                </tbody>

                            </React.Fragment>

                        ))}
                    </table>

                </div>

            </div >

        </div>

    );
}
}


export default App;