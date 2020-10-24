using Services from '../../srv/services';

////////////////////////////////////////////////////////////////////////////
//
//	AccessRights List Page
//
annotate Services.AccessRights with @(
	UI: {
		SelectionFields: [ name ],
		LineItem: [
			{Value: name}
		]
	}
);

////////////////////////////////////////////////////////////////////////////
//
//	AccessRights Object Page
//
annotate Services.AccessRights with @(
	UI: {
		Identification: [
			{Value: name}
		],
		HeaderInfo: {
			TypeName: 'AccessRightsSing',
			TypeNamePlural: 'AccessRights',
			Title: {Value: name},
		},
		HeaderFacets: [
			// {$Type: 'UI.ReferenceFacet', Label: 'Identification', Target: '@UI.FieldGroup@Header'},
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>General}', Target: '@UI.FieldGroup#General'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Admin}', Target: '@UI.FieldGroup#Admin'},
		],
		FieldGroup#Header: {
			Data: [
				// {Value: name}
			]
		},
		FieldGroup#General: {
			Data: [
				// {Value: name}
			]
		},
		FieldGroup#Admin: {
			Data: [
				{Value: createdBy},
				{Value: createdAt},
				{Value: modifiedBy},
				{Value: modifiedAt}
			]
		}
	}
);
