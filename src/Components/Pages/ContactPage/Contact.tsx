import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import './Contact.css'

const Contact = () => {

  const [showModal, setShowModal] = useState(false);
  const[fName , setFName] = useState<string>('')
  const[lName , setLName] = useState<string>('')
  const[email , setEmail] = useState<string>('')
  const[remarks , setRemarks] = useState<string>('')

  const firstNamehandler = (e:any) =>
  {
    setFName(e.target.value)

  }
  const lastNamehandler = (e:any) =>
  {
    setLName(e.target.value)

  }
  const emailhandler = (e:any) =>
  {
    setEmail(e.target.value)

  }
  const remarkshandler = (e:any) =>
  {
    setRemarks(e.target.value)

  }

  const handleShowModal = () => {
    setShowModal(true);
    setFName('');
    setLName('');
    setEmail('');
    setRemarks('');
  }

  const handleCloseModal = () => setShowModal(false);
  
  return (
    <div className = 'mainContainer vstack gap-5'>
      <div className='hstack gap-3 inputContainer'>
        <p className = 'labelStyle'>First Name :</p>
        <input className = 'inputStyle' style = {{marginLeft:'0.5rem'}} onChange = {firstNamehandler} value={fName}></input>
      </div>
      <div className='hstack gap-3 inputContainer'>
        <p className = 'labelStyle'>Last Name :</p>
        <input className = 'inputStyle' style = {{marginLeft:'0.5rem'}} onChange = {lastNamehandler} value={lName}></input>
      </div>
      <div className='hstack gap-3 inputContainer'>
        <p className = 'labelStyle'>Email :</p>
        <input className = 'inputStyle' style = {{marginLeft:'2.5rem'}} onChange = {emailhandler} value={email}></input>
      </div>
      <div className='hstack gap-3 inputContainer'>
        <p className = 'labelStyle'>Remarks :</p>
        <input className = 'inputStyle' style = {{marginLeft:'1rem'}} onChange = {remarkshandler} value={remarks}></input>
      </div>
      <button disabled = {fName == ''|| lName == '' || email == '' } className='submitStyle' onClick = {() => {handleShowModal()}}>Submit</button>
      {showModal && (
        <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title modalHeader">Thank You !</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body modalText">
                <p>Your request has been submitted successfully!</p>
              </div>
            </div>
          </div>
        </div>
      )}    
    </div>
  )
}

export default Contact
