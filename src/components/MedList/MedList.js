import './MedList.scss';
import axios from 'axios';
import apiBaseUrl from '../../config/config';
import iconDelete from '../../assets/icons/delete_outline-24px.svg';



const MedList = (props) => {

    const { userMedList, handleRemoveMed } = props;

    const handleDelete = (id) => {
        axios.delete(`${apiBaseUrl}/medications/${id}`,
            { headers: { authorization: `Bearer ${sessionStorage.getItem('authToken')}` } })
            .then((res) => {
                handleRemoveMed(res.data.id);
            })
            .catch(error => console.log(error));
    };

    return (

        <section>
            {userMedList.map(med => {
                return (
                    <div key={med.id} className='medication'>

                        <p className="medication__details-label">DIN</p>
                        <p className="medication__detail">{med.din}</p>

                        <p className="medication__details-label">MEDICATION</p>
                        <p className="medication__detail">{med.medication}</p>

                        <p className="medication__details-label">HOW I TAKE IT</p>
                        <p className="medication__detail">{med.instructions}</p>

                        <div className='medication__delete-container'>
                            <img src={iconDelete} onClick={() => handleDelete(med.id)} alt="icon of a trash can" />
                        </div>

                    </div>
                )
            })}
        </section>
    );
};

export default MedList; 