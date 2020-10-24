# Getting Started

Welcome to the template for a multitenant cap project with apps usable in SCP central portal.

It contains these folders and files:

| File / Folder                                                    | Purpose                                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| `db/schema.cds`                                                  | domain model with the single entity `AccessRights`                 |
| `srv/`                                                           | service models                                                     |
| `srv/saas-provisioning/provisioning.js`                          | service called during customer subaccount subscription,            |
|                                                                  | create the schema and return the url of the portal                 |
| `app/com.alteaup.solutions.accessrights/`                        | Fiori Elements very simple app for the `AccessRights` entity       |
| `app/index.cds`                                                  | Index of all the UI related cds annotations                        |
| `cloud-foundry/`                                                 | Cloud Foundry related objects, services, and configuration         |
| `cloud-foundry/approuter/xs-apps.json`                           | Configuration of the App Router routes                             |
| `cloud-foundry/html5-deployer`                                   | Folder for generated ui5 apps                                      |
| `cloud-foundry/xsuaa/xs-security.json`                           | Authorization Scopes and Roles configuration                       |
| `cloud-foundry/portal-deployer\portal-site\CommonDataModel.json` | Configuration of the apps availables in the portal content manager |
| `npm-install-all-apps.sh`                                        | Shell script to install ui5-task-zipper in apps folders            |
| `mta.yaml`                                                       | MTA yaml configuration for the whole project                       |
| `package.json`                                                   | project metadata and configuration                                 |
| `README.md`                                                      | this getting started guide                                         |

## Deploy in SAP Cloud Platform trial one time:
* run `./npm-install-all-apps.sh`
* login in you trial subaccount
* run `npm run build && npm run deploy`
* create an instance of SAP HANA Cloud DB (yes after deploy, schema and tables are created during customers subscription)
* map the instance of the db to the subaccount

## For each customer:
* create a new subaccount for the customer (don't need Cloud Foundry enabled)
* subscribe the subaccount of the customer to the app `dev-mt-app-pub`
* in the subaccount `trial` create the route for the subdomain of the customer and bind it to the approuter
* subscribe the subaccount of the customer to the portal service
* launch the portal service with the *Go to Application* link
* in the content explorer there is the app `Manage AccessRights`, add it to `My Content`
* assign the app to the `Everyone` role
* create the new portal group `Multitenant`
* assign the app to the new group
* launch the portal site