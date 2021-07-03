import React from 'react'

import { faFacebookF,faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop,faFileCode } from '@fortawesome/free-solid-svg-icons'


export const ServicesScreen = () => {
    return (
        <div id="services" className="services">
        <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                          <div className="circle">
                              <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                              </div>
                            <h3>Web Design</h3>
                            <p>We design web page.</p>
                        </div>
                    </div>
               
                {/* -*/}
                <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle">
                              <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                              </div>
                            <h3>Web Development</h3>
                            <p>We devepop web page</p>
                        </div>
                    </div>
                {/* -*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle">
                              <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x"/>
                              </div>
                            <h3>Facebook Ads </h3>
                            <p>We service for ads</p>
                        </div>
                    </div>

                         {/* -*/}
                         <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle">
                              <FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/>
                              </div>
                            <h3>Google ads</h3>
                            <p>We service Google ads</p>
                        </div>
                    </div>
            </div>
             </div>
      
            
        </div>
    )
}
