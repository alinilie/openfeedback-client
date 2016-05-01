(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//This is an example of an isomorphic implementation of React.js
var LoginLayout = require('./server/login.jsx').LoginLayout;
ReactDOM.render(React.createElement(LoginLayout, null), document.getElementById("page_content"));

},{"./server/login.jsx":2}],2:[function(require,module,exports){
//var React = require('react');

var LoginLayout = React.createClass({displayName: "LoginLayout",
    handleClick: function(event) {
        console.log("Test event!");
    },
    render: function() {
        return (
            React.createElement("div", {id: "login_box", className: "auth-box"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("h1", {className: "auth-title"}, "Sign into your account"), 
                        React.createElement("form", {id: "user_auth"}, 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "user_username", className: "control-label"}, "Username"), 
                                React.createElement("input", {type: "text", id: "user_username", name: "user_username", className: "form-control", placeholder: "Ex.: florin.piersic"})
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "user_password", className: "control-label"}, "Password"), 
                                React.createElement("input", {type: "password", id: "user_password", name: "user_password", className: "form-control", placeholder: "Your A.D. password"})
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("div", {className: "checkbox"}, 
                                    React.createElement("label", null, 
                                        React.createElement("input", {id: "user_reminder", name: "user_reminder", onClick: this.handleClick, type: "checkbox"}), " Keep me signed in"
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "col-xs-12"}, 
                                    React.createElement("div", {className: "pull-right panel-controls"}, 
                                        React.createElement("a", {href: "#", onClick: this.handleClick, id: "special_submit", className: "btn btn-primary"}, React.createElement("i", {className: "fa fa-check"}), React.createElement("span", null, "Sign in"))
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports.LoginLayout = LoginLayout;

},{}]},{},[1]);
