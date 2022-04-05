import './MedicationForm.scss';
import React from 'react';
import axios from 'axios';
import apiBaseUrl from '../../config/config';


class MedicationForm extends React.Component {

    // initialize state to empty form fields
    state = {
        din: '',
        medication: '',
        instructions: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // only if form is valid
        // if (this.isFormValid()) {
            // create newMedication to send to API server based on user's inputs in form
            // have to change e.target.inputName.value to this.state.inputName
            const newMedication = {
                din: this.state.din,
                // medication: this.state.medication,
                instructions: this.state.instructions,

            };
            // send newMedication to API server
            // axios.post(`${apiBaseUrl}/medications`, newMedication)
            //     .then(res => {
            //         // Redirect to new Warehouse page ('/warehouses/newWarehouseId') after form submitted, have to use this.props since this is a class
            //         // this.props.routerProps.history.push(`/warehouses/${res.data.id}`);
            //     })
            //     .catch(error => console.log(error));

            // reset state to empty form fields after page submission 
            // this.setState({
            //     din: '',
            //     medication: '',
            //     instructions: '',
            // });
        // }
    }

    // handleChange handler function changes/controls state of stored form input values and is applied to each input field
    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // };

    // handler function to disable form submission if form is invalid (i.e. din not 8 or no proper instructions)
    // isFormValid = () => {
    //     if (this.state.din.length() !== 8 || this.state.instructions.length() < 8) {
    //         return false;
    //     }
    //     return true;
    // };


    render() {
        return (

            <form onSubmit={this.handleSubmit} className='medication-form'>

                <label className='form-detail__label' htmlFor='din'>DIN (8 digits including leading zeros)</label>
                <input className='form-detail__input' name='din' type="text" placeholder=''
                // onChange={this.handleChange}
                // value={this.state.din} 
                />


                <label className='form-detail__label' htmlFor='instructions'>How I take it: </label>
                <input className='form-detail__input' name='instructions' type="text" placeholder=''
                // onChange={this.handleChange}
                // value={this.state.instructions} 
                />


                <button type="submit" className='form__button form__button--submit' >+ Add Medication</button>


            </form>
        );
    }
};

export default MedicationForm; 