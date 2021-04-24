import React from 'react';
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';



const Contact = ({name, phone, email, index}) => {
    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkBox" className="custom-control-input" />
                    <label  className="custom-control-label"></label>
                </div>
            </th>
            <td className="d-flex flex-direction-row">
                <Avatar name={name}size="35" round={true} className="mx-0" />
                    <div className="nameing mx-3 my-auto ">
                        { name}
                    </div>
                </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
            <Link to={`/editcontact/${index}`} className="mr-4"><i className="fas fa-pencil-alt"></i></Link>

                
                <a href="#"><i className="fas fa-minus-circle text-danger"></i></a>
            </td>
        </tr>

    )
}

export default Contact
