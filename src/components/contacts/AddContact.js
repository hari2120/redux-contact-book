import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from "shortid"
import { useHistory } from 'react-router'
import { addcontact } from '../../actions/contactAction'




const AddContact = () => {
    const dispatch = useDispatch()
    let history = useHistory()

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        id:100
    })
    
    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }
    const createContact = (e) => {
        e.preventDefault();
        setContact({
            ...contact,
            id:shortid.generate()})
        dispatch(addcontact(contact))
        history.push("/")
        console.log(contact);

    }



    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a contact</div>
            <div className="card-body">
                <form action="" onSubmit={(e) => createContact(e)}>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            name="name"
                            value={contact.name}
                            onChange={onChange}
                        />
                        
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone"
                            name="phone"
                            value={contact.phone}
                            onChange={onChange}


                        />
                        
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Email"
                            name="email"
                            value={contact.email}
                            onChange={onChange}


                        />
                        
                    </div>
                    <button className="btn btn-primary" type="submit" >Create Contact</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddContact
