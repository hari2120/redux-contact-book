import { CREATE_CONTACT, GET_CONTACT } from "../constant/types"



export const addcontact = (contact) => {
    return{
      type: CREATE_CONTACT,
      payload:contact
    }
  }

  // get a contact
  // shortcut for action use rxac

  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
  })
  