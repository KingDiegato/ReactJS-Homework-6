/* eslint-disable no-restricted-globals */
import React, { useRef } from 'react';
import { Contact } from '../../../models/Contact.class';
import { MARK } from '../../../models/mark.enum'
import PropTypes from 'prop-types'

const AddContact = ({add, length}) => {

    const nameRef = useRef('')
    const telRef = useRef('')
    const markRef = useRef(MARK.NORMAL)

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            telRef.current.value,
            false,
            markRef.current.value   
        );
        add(newContact);
    }
    return (
        // TODO: Check Styles from Bootstrap for this return
        <form onSubmit={addContact} className="mt-3">
            <div>
                <input ref={nameRef} id='inputName' type='text' required autoFocus placeholder='Name'></input>
                <input ref={telRef} id='inputTel' type='text' required placeholder='Tel'></input>
                <select ref={markRef} id='selectMark' defaultValue={MARK.NORMAL}>
                    <option value={MARK.NORMAL}>
                        Normal
                    </option>
                    <option value={MARK.FAMILY}>
                        Family
                    </option>
                    <option value={MARK.FRIEND}>
                        Friend
                    </option>
                </select>
                <button type='submit' className='btn btn-primary btn-lg'>
                    {length > 0 ? 'Add New Contact' : 'Create your First Contact'}
                </button>
            </div>
        </form>
    );
}

AddContact.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default AddContact;
