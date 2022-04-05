import './MedicationForm.scss';
import React from 'react';
import axios from 'axios';


class MedicationForm extends React.Component {

    // initialize state to emtpy form fields
    state = {
        din: '',
        medication: '',
        instructions: '',
    };




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