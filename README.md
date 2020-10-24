# Getting Started

Welcome to the sample for a multitenant cap project with apps usable in SCP central portal.

It contains these folders and files:

| File / Folder                                                    | Purpose                                                                                                    |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `db/schema.cds`                                                  | domain model with the single entity `AccessRights`                                                         |
| `srv/services.cds`                                               | service model for the entity `AccessRights`                                                                |
| `srv/saas-provisioning/provisioning.js`                          | service called during customer subaccount subscription, create the schema and return the url of the portal |
| `app/com.alteaup.solutions.accessrights/`                        | Fiori Elements very simple app for the `AccessRights` entity                                               |
| `cloud-foundry/`                                                 | Cloud Foundry related objects, services, and configuration                                                 |
| `cloud-foundry/approuter/xs-apps.json`                           | Configuration of the App Router routes                                                                     |
| `cloud-foundry/html5-deployer`                                   | Folder for generated ui5 apps                                                                              |
| `cloud-foundry/xsuaa/xs-security.json`                           | Authorization Scopes and Roles configuration                                                               |
| `cloud-foundry/portal-deployer\portal-site\CommonDataModel.json` | Configuration of the apps availables in the portal content manager                                         |
| `npm-install-all-apps.sh`                                        | Shell script to install ui5-task-zipper in apps folders                                                    |
| `mta.yaml`                                                       | MTA yaml configuration for the whole project                                                               |
| `package.json`                                                   | project metadata and configuration                                                                         |
| `README.md`                                                      | this getting started guide                                                                                 |

## Deploy in SAP Cloud Platform trial one time
* login in your trial subaccount
* create an instance of SAP HANA Cloud DB with the option `allow all IP address`
* map the instance of the db to the trial organization
* run `./npm-install-all-apps.sh`
* run `npm run build && npm run deploy`

## For each customer
* create a new subaccount for the customer (don't need Cloud Foundry enabled)
* add the entitlement portal service to the customer subaccount with service plan `standard (Subscription)`
* add the role collection `Portal_Admin` to you user
* subscribe the subaccount of the customer to the portal
* subscribe the subaccount of the customer to the app `dev-mt-app-pub`
* launch the portal service with the *Go to Application* link
* in the content explorer there is the app `Manage Access-Rights`, add it to `My Content`
* assign the app to the `Everyone` role
* create the new portal group `Multitenant`
* assign the app to the new group
* create and launch a site
* click on the tile `Manage Access-Rights`
* you get the error for the missing route, create the route in the `trial` space, bind to app `mtt-approuter`
* refresh the site page