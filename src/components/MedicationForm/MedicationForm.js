import './MedicationForm.scss';
import React from 'react';
import axios from 'axios';
import apiBaseUrl from '../../config/config';



class MedicationForm extends React.Component {

    // initialize state to empty form fields (din is drug-identification-number)
    state = {
        din: '',
        instructions: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // only if form is valid
        if (this.isFormValid()) {
            // create newMedication to send to API server database based on user's inputs in form
            // have to change e.target.inputName.value to this.state.inputName
            let newMedication = {
                din: this.state.din,
                medication: '',
                instructions: this.state.instructions,
            };
            // use din to GET medication active ingredient name + strength + units from API search service
            axios.get(`${apiBaseUrl}/drug-identification-search/${newMedication.din}`)
                .then(res => {
                    newMedication.medication = res.data;
                    // POST/send newMedication to API database
                    return axios.post(`${apiBaseUrl}/medications/`, newMedication,
                        { headers: { authorization: `Bearer ${sessionStorage.getItem('authToken')}` } })
                })
                .then((res) => {
                    this.props.handleAddMed(res.data.newMed);
                })
                .catch(error => console.log(error));

            // reset state to empty form fields after form submission 
            this.setState({
                din: '',
                medication: '',
                instructions: '',
            });
        }
    }

    // handleChange handler function changes/controls state of stored form input values and is applied to each input field
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // handler function to disable form submission if form is invalid (i.e. din not 8 digits or insufficient instructions)
    isFormValid = () => {
        if (this.state.din.length !== 8 || this.state.instructions.length < 8) {
            return false;
        }
        return true;
    };


    render() {
        return (

            <form onSubmit={this.handleSubmit} className='medication-form'>

                <label className='form-detail__label' htmlFor='din'>DIN (8 digits including leading zeros)</label>
                <input className='form-detail__input' name='din' type="text" placeholder=''
                    onChange={this.handleChange}
                    value={this.state.din}/>


                <label className='form-detail__label' htmlFor='instructions'>How I take it: </label>
                <input className='form-detail__input' name='instructions' type="text" placeholder=''
                    onChange={this.handleChange}
                    value={this.state.instructions}/>

                <button type="submit" className='form__button form__button--submit' >+ Add Medication</button>

            </form>
        );
    }
};

export default MedicationForm; 