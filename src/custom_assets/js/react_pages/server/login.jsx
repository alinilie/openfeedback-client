var React = require('react');

var LoginLayout = React.createClass({
    handleClick: function(event) {
        console.log("Test event!");
    },
    render: function() {
        return (
            <div id="login_box" className="auth-box">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h1 className="auth-title">Sign into your account</h1>
                        <form id="user_auth">
                            <div className="form-group">
                                <label for="user_username" className="control-label">Username</label>
                                <input type="text" id="user_username" name="user_username" className="form-control" placeholder="Ex.: florin.piersic" />
                            </div>
                            <div className="form-group">
                                <label for="user_password" className="control-label">Password</label>
                                <input type="password" id="user_password" name="user_password" className="form-control" placeholder="Your A.D. password" />
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input id="user_reminder" name="user_reminder" onClick={this.handleClick} type="checkbox"/> Keep me signed in
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="pull-right panel-controls">
                                        <a href="#" onClick={this.handleClick} id="special_submit" className="btn btn-primary"><i className="fa fa-check"></i><span>Sign in</span></a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports.LoginLayout = LoginLayout;
