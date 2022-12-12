import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Contact } from '../../models/Contact.class'
import { MARK } from '../../models/mark.enum';

// own Styles
import '../../styles/someStyles.css'

const ContactComponent = ({ contact, conected, remove }) => {

    //Life Cycle 
    useEffect(() => {
        console.log('Created Contact')
        return () => {
            console.log(`Unmounting contact: ${contact.name}...`)
        };
    }, [contact]);

    /**
     * Receive contact status for create a Badge
     * @returns Badge info
     */
    function contactStatusBadge() {
        switch (contact.status) {
            case MARK.NORMAL:
                return(
                    <h4>
                        <span className='badge bg-secondary'>
                        {contact.status}
                        </span>
                    </h4>
                )
            case MARK.FAMILY:
                return(
                    <h4>
                        <span className='badge bg-success'>
                        {contact.status}
                        </span>
                    </h4>
                )
            case MARK.FRIEND:
                return(
                    <h4>
                        <span className='badge bg-info'>
                        {contact.status}
                        </span>
                    </h4>
                )
            default:
                break;
        }
    }

    /**
     * Receive boolean from contact.conected for switch icons
     * @returns Displayed icon for contact on/off
     */
    function conectedIcon() {
        if(contact.conected){
            return <i onClick={() => conected(contact)} className='bi-check-circle-fill'></i>
        } else {
            return <i onClick={() => conected(contact)} className='bi-x-circle-fill'></i>
        }
    }

    /**
     * Styles for the ternary of conected status for contacts
     */
    const contactOnLine = {
        color: '#5BD337',
        fontWeight: 'bold',
    }
    const contactOffLine = {
        color: '#27304350',
        fontWeight: 'bold',
    }

    // ! Check Styles
    return (
        <tr style={contact.conected ? contactOnLine : contactOffLine}>
            <th>
                <span>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.tel}</span>
            </td>
            <td className='align-middle'>
                <span> {contactStatusBadge()} </span>
            </td>
            <td className='align-middle'>
                {conectedIcon()}
                <i className='bi-trash-fill icon-hovering' style={{color: '#F02D3A'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );
}

/**
 * PropTypes required for compile in 'src/components/cointainer/contact_list.jsx'
 */
ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    remove: PropTypes.func.isRequired,
    conected: PropTypes.func.isRequired
}
export default ContactComponent;
