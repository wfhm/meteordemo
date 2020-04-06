import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  if (Meteor.isCordova){
  	function initPushwoosh() {
		var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

  		// Should be called before pushwoosh.onDeviceReady
  		document.addEventListener('push-notification', function(event) {
			var notification = event.notification;
			// handle push open here
		});
  
		// Initialize Pushwoosh. This will trigger all pending push notifications on start.
		pushwoosh.onDeviceReady({
	    appid: "8DE9B-D4E58",
			projectid: "245850018966",
			serviceName: ""
		});

		pushwoosh.registerDevice(
			function(status) {
				var pushToken = status.pushToken;
		    	console.log('Push Token is: ' + pushToken);
		  },
		  function(status) {
		    // handle registration error here
		  }
		);
	}

	initPushwoosh();
  }
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
