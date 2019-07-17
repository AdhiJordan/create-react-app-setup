import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        country: "",
        city: "Bangalore"
      }
    }

    render(){
      return(
        <div className="pageDesign">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="boxOne">
                <h3 className="pb-4">Leave us a message</h3>
                  <div className="row">
                    <label className="col-sm-12 col-md-2 col-lg-2">Name</label>
                    <input className="col-sm-12 col-md-10 col-lg-10" type="text" width="100%" placeholder="Enter your Name..." />
                  </div>
                  <div className="row pt-5">
                    <label className="col-sm-12 col-md-2 col-lg-2">Phone</label>
                    <input className="col-sm-12 col-md-10 col-lg-10" type="number" width="100%" placeholder="Enter your Name..." />
                  </div>
                  <div className="row pt-5">
                    <label className="col-sm-12 col-md-2 col-lg-2">Email</label>
                    <input className="col-sm-12 col-md-10 col-lg-10" type="email" width="100%" placeholder="Enter your Name..." />
                  </div>
                  <div className="row pt-5">
                    <label className="col-sm-12 col-md-2 col-lg-2">Newsletter</label>
                      <div className="col-sm-12 col-md-10 col-lg-10">
                      <input type="checkbox" id="checkers" name="checkers" />
                      <label for="checkers" className="pl-4">Subscribe to the latest news</label>
                      </div>
                  </div>
                  <div className="row pt-5">
                    <label className="col-sm-12 col-md-2 col-lg-2">Comments</label>
                    <textarea  rows="4" cols="50" className="col-sm-12 col-md-10 col-lg-10" type="text" width="100%" placeholder="Enter your Name..." />
                  </div>
                  <div className="row pt-5  d-flex justify-content-end">
                    <button className="btn btn-warning mr-4">Cancel</button>
                    <button className="btn btn-success">Send</button>
                  </div>
                  <div className="addressText row pt-5 mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <p>
                        80, new road street, 
                        bangalore-234567
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-right">
                      <p>
                        Tel: 987654321
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 pt-5">
                  <h3 style={{color: "black"}} className="pb-4">or leave us a doodle</h3>
                  <div className="rectangleBox"></div>

                  <div className="row pt-5 actionButtons">
                    <button className="btn btn-warning mr-4">Cancel</button>
                    <button className="btn btn-success">Send</button>
                  </div>
                </div>
            </div>


            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4"></div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                  <p style={{color: "#000"}}>form box</p>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4"></div>

            </div>
        </div>
      );
    }
}