import React, { useEffect, useState }from 'react';
import { MARK } from '../../models/mark.enum';
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/contact'
import AddContact from '../pure/forms/addContact';


const ContactList = () => {
    
    // Contact Example
    const exampleContact = new Contact('Example', 'Tel#', true, MARK.NORMAL)
    const exampleContact2 = new Contact('Example', 'Tel#', true, MARK.FRIEND)

    const [contact, setContact] = useState([exampleContact, exampleContact2]);
    const [loading, setLoading] = useState(true);

    // LifeCycle Control
    useEffect(() => {
        console.log('Modifying contact')
        setTimeout(() => {
            setLoading(false);
        }, 3000)
        return () => {
            console.log('Unmounting instanceOf Contact...')
        };
    }, [contact]);


    function conectedContact(contacts){
        const index = contact.indexOf(contacts);
        const tempContact = [...contact];
        tempContact[index].conected = !tempContact[index].conected;

        setContact(tempContact);
    }
    function deleteContact(contacts){
        const index = contact.indexOf(contacts);
        const tempContact = [...contact];
        tempContact.splice(index, 1);

        setContact(tempContact);
    }
    function addContact(contacts){
        console.log('addng new contact: ', contacts)
        const tempContact = [...contact];
        tempContact.push(contacts);

        setContact(tempContact);
    }
    
    // ? Table of content

    const Table = () => {
        return (
            <table className='container text-center'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Number</th>
                        <th scope='col'>Mark</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { contact.map((contact, index) => {
                        return (
                            <ContactComponent
                                key={index}
                                contact={contact}
                                conected={conectedContact}
                                remove={deleteContact}
                            >
                            
                            </ContactComponent>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let contactTable;

    if(contact.length > 0){
        contactTable = <Table></Table>
    } else {
        contactTable = (
            <div>
                <h3>There are no Contact to show</h3>
                <h4>Please, add a new Contact</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: '#22222250',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    const tableStyle = {
        position: 'relative', 
        height: '400px'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h2 className='fw-bold'>
                            Contacts:
                        </h2>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {tableStyle} }>

                        {loading ? (<p style={ loadingStyle }> Loading Contact...</p>) : contactTable}
                    </div>
                </div>
            </div>
            {/* TODO: Here comes the Form */}
            <AddContact add={addContact} length={contact.length}></AddContact>
        </div>
    );
}

export default ContactList;
