# Getting Started

Welcome to the template for a multitenant cap project with apps usable in SCP central portal

It contains these folders and files, following our recommended project layout:

| File / Folder                                                    | Purpose                                                      |
| ---------------------------------------------------------------- | ------------------------------------------------------------ |
| `db/`                                                            | your domain models and data go here                          |
| `srv/`                                                           | your service models and code go here                         |
| `app/`                                                           | content for UI frontends go here                             |
| `app/com.alteaup.solutions.accessrights/`                        | Fiori Elements very simple app example                       |
| `app/flpSandbox`                                                 | Configuration of the Fiori Launchpad sandbox for local tests |
| `app/index.cds`                                                  | Index of all the UI related cds annotations                  |
| `cloud-foundry/`                                                 | Cloud Foundry related objects, services, and configuration   |
| `cloud-foundry/approuter`                                        | App Router                                                   |
| `cloud-foundry/approuter/xs-apps.json`                           | Configuration of the App Router routes                       |
| `cloud-foundry/html5-deployer`                                   | HTML5 Deployer                                               |
| `cloud-foundry/xsuaa`                                            | XSUAA Service (Authorization)                                |
| `cloud-foundry/xsuaa/xs-security.json`                           | Authorization Scopes and Roles configuration                 |
| `cloud-foundry/portal-deployer`                                  | Portal Deployer                                              |
| `cloud-foundry/portal-deployer\portal-site\CommonDataModel.json` | Configuration of the Fiori Launchpad in Cloud                |
| `mta.yaml`                                                       | MTA yaml configuration for the whole project                 |
| `package.json`                                                   | project metadata and configuration                           |
| `readme.md`                                                      | this getting started guide                                   |

## Deploy in SAP Cloud Platform
* create subaccount `provider` subdomain `provider`
* enable Cloud Foundry in `provider` subaccount
* create subaccount `customera` subdomain `customera` (don't need Cloud Foundry enabled)
* run `npm run build && npm run deploy`
* subscribe the subaccount `customera` to the app `mt-test-mt-app-pub`
* create route for the hostname  `customera` to the approuter
* subscribe the subaccount `customera` to the portal service
* launch the portal service with the *Go to Application* link