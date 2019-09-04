import React, { Component } from 'react'

export default class Subscribe extends Component {


    render() {
        return(
            <div>
                <div className="modal fade" id="subscribe-modal" tabindex="-1" role="dialog" aria-labelledby="subscribeModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="subscribeModalLabel">Subscribe for Newsletter</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form className="mc4wp-form" method="post">
                            <div className="mc4wp-form-fields">
                                <p>
                                    <i className="mc4wp-form-icon ui-email"></i>
                                    <input type="email" name="EMAIL" placeholder="Your email" required="" />
                                </p>
                                <p>
                                    <input type="submit" className="btn btn-md btn-color" value="Subscribe" />
                                </p>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );

    }
    
}