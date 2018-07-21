import React from 'react';

function WhatCanWeDo() {
    return <div className="container">
        <h1>How can we help you today?</h1>

        <div className="container">
          <div className="span4">
            <p className="content-img">
              <img src="images/ico-sth.svg" alt="icon" />
            </p>
            <div>
              <h4>
                <a href="/appointment/" title="Book an Appointment" data-id="1552">
                  BOOK AN APPOINTMENT
                </a>
              </h4>
              <p>Find a Doctor for any of your specific health needs.</p>
              <p> </p>
            </div>
          </div>

          <div className="span4">
            <p className="content-img">
              <img src="images/ico-hrt.svg" alt="icon" />
            </p>
            <div>
              <h4>
                <a href="/thank-an-employee/" title="Thank an Employee" data-id="1542">
                  THANK AN EMPLOYEE
                </a>
              </h4>
              <p>
                Recognize an employee who went above and beyond to provide
                exemplary patient care.
              </p>
            </div>
          </div>
          <div className="span4">
            <p className="content-img">
              <img src="images/ico-clp.svg" alt="icon" />
            </p>
            <div>
              <h4>
                <a href="/patient-portal/" title="Patient Portal">
                  PATIENT PORTAL
                </a>
              </h4>
              <p>
                Visit our secure, web-based system to make an appointment,
                access your medical records and more.
              </p>
            </div>
          </div>
        </div>
      </div>;
}

export default WhatCanWeDo;