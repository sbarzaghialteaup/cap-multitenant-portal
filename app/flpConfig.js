window["sap-ushell-config"] = {
	defaultRenderer: "fiori2",
	bootstrapPlugins: {
		KeyUserPlugin: {
			component: "sap.ushell.plugins.rta",
		},
		PersonalizePlugin: {
			component: "sap.ushell.plugins.rta-personalize",
		},
	},
	applications: {
		"AccessRights-manage": {
			title: "Manage AccessRights",
			description: "AccessRights Maintenance",
			icon: "sap-icon://add",
			additionalInformation: "SAPUI5.Component=com.alteaup.solutions.accessrights",
			applicationType: "URL",
			url: "./com.alteaup.solutions.accessrights/webapp",
			navigationMode: "embedded",
		},
	},
};
