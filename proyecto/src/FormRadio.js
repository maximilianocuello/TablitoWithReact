import React, { Component } from "react";


class FormRadio extends Component {
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
                        <p className="text-primary">Tipo de Transaccion </p>
                    </div>
                    <div className="form-group col-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Compra
                        </label>
                    </div>
                    <div class="form-group col-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                             Venta
                        </label>
                    </div>
                    </div>
                
            </form>
                )
            }                       }

    export default FormRadio;