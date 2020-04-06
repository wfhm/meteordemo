App.info({
	id:'com.pushwoosh.demoapp',
	name:'meteor demoapp'
});

App.appendToConfig(`
	<platform name="android">
        <resource-file src="google-services.json" target="app/google-services.json" />
    </platform>
`);