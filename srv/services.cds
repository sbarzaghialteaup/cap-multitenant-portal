using {alteaup.solutions.systems as systems} from '../db/schema';

@(requires : 'authenticated-user')
@(path : '/services')
service Services {

    @odata.draft.enabled
    entity AccessRights as projection on systems.AccessRights;

}
