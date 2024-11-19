import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-vh-100 bg-${theme} ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
      <div className="p-4">
        <h1 className="mb-4">Contact Us</h1>
        <form>
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" name="name" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" name="email" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="message" name="message" rows="4" ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
