import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact';

const Contacts = () => {
    const contacts = useSelector(state => state.contacts.contacts)
    return (
        <div>
            <input type="checkbox" className="custom-control-input" />

                <table className="table shadow bg-d">
                    <thead className="bg-danger text-white">
                    <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input type="checkBox" className="custom-control-input" />
                            <label  className="custom-control-label">S.no</label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            contacts.map((contact, index) => {
                                return(
                                   <Contact key={contact.id} name={contact.name} phone={contact.phone} email={contact.email} index={index} />
                                )
                            })
                        }
                    
                   
                </tbody>
                </table>
        </div>
    )
}

export default Contacts
