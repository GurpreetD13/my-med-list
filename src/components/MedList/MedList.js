import './MedList.scss';
import axios from 'axios';
import apiBaseUrl from '../../config/config';
import iconDelete from '../../assets/icons/delete_outline-24px.svg';

const MedList = (props) => {

    const { userMedList } = props;

    const handleDelete = (id) => {
        axios.delete(`${apiBaseUrl}/medications/${id}`,
            { headers: { authorization: `Bearer ${sessionStorage.getItem('authToken')}` } })
            .then(() => {
                window.location.reload();
            })
            .catch(error => console.log(error));
    };

    return (

        <section>

            {userMedList.map(med => {
                return (
                    <div key={med.id} className='item'>

                        <div className='item__container-top'>

                            <p className="item__details-label">DIN</p>
                            <p className="item__detail">{med.din}</p>

                            <p className="item__details-label">MEDICATION</p>
                            <p className="item__detail">{med.medication}</p>

                            <p className="item__details-label">INSTRUCTIONS</p>
                            <p className="item__detail">{med.instructions}</p>

                        </div>

                        <div className='item__container-bottom'>

                            <div onClick={() => handleDelete(med.id)}>
                                <img src={iconDelete} alt="icon of a trash can" />
                            </div>


                        </div>
                    </div>
                )
            })}
        </section>
    );
};

export default MedList; 