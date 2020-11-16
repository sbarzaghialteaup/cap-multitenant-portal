using {alteaup.solutions.systems as systems} from '../db/schema';
using { Northwind as externalNorthwind } from './external/Northwind.csn';


@(requires : 'authenticated-user')
@(path : '/services')
service Services {

    @odata.draft.enabled
    entity AccessRights as projection on systems.AccessRights;

    entity Products     as projection on externalNorthwind.Products;

}
