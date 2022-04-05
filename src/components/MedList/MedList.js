import './MedList.scss';
import axios from 'axios';
import apiBaseUrl from '../../config/config';
import { Link } from 'react-router-dom';
import iconDelete from '../../assets/icons/delete_outline-24px.svg';

const MedList = (props) => {

    const { userMedList } = props;

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

                            {/* We'll have to link to edit form when completed here */}
                            <Link to='/inventories'>
                                <img src={iconDelete} alt="icon of a trash can" />
                            </Link>
                            {/* We'll have to have our alert/modal for delete pop here */}
                            <Link to={`/medications/${med.id}/update`}>
                            </Link>

                        </div>
                    </div>
                )
            })}
        </section>
    );
};

export default MedList; 