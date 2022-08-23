import React, { Component } from "react";


class Form extends Component {
    addInfo = React.createRef();
    handle = (e) => {
        e.preventDefault();
        console.log(this.addInfo.current.value);
    }
    render(){
        return (
            <form onSubmit={this.handle}>
                <div className="row d-flex align-items-center">
                    <div className="form-group col-2">
                        <p className="text-primary">Description: </p>
                    </div>
                    <div className="form-group col-6">
                        <input ref={this.addInfo} type={this.props.type} className="form-control form-control-lg" placeholder="Ejemplo compra 1 kilo de papa"/>
                    </div>
                    
                </div>
            </form>
                )
            }                       }

    export default Form;