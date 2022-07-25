# cumulus ci template for net zero cloud org  
## before your begin
- You need to have SFDX and [cumulusci](https://cumulusci.readthedocs.io/en/stable/get_started.html) installed
-  Have an org with Net Zero licenses (inluding PSLs) available


## Authorizing an existing NZC enabled org :
 Authorize an org using the CLI command : cci org connect <destination_org_name> --login-url https://instance_domain.my.salesforce.com/

## Setup the org with configs & sample data
- Clone the repo https://github.com/s-krishnaraj/NZCwithSampleData in VS Code
- In the terminal, navigate to the folder NZCWithSampleData
- To setup Net Zero org with sample data, run the CLI command : cci flow run setup_nzc --org <destination_org_name>

## Read All About It
- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

## Configure Your Salesforce DX Project
The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.
