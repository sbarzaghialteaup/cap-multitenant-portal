namespace alteaup.solutions.systems;

using {
    Currency,
    managed,
    cuid
} from '@sap/cds/common';

@cds.autoexpose
@cds.odata.valuelist
@UI.Identification : [name]
entity AccessRights : cuid, managed {
    @title : 'Access Rights'
    name : String(50);
}
