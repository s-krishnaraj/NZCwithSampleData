import { LightningElement ,wire, api} from 'lwc';

import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class CarbonAccounting extends LightningElement {
    @api app_description = " Manage Scope 1, Scope 2 Carbon Accounting";
   
    @api app_welcome_text = "Explore how Carbon Accounting(Scope1, Scope2) can be done using Net Zero Cloud";

    page_Name = 'Carbon Accounting';
    object_Name = 'ElectricityEmssnFctrSet';
    record_Name = 'Germany - IEA 2019';

    @api electricityEmssnFctrId ;
    

    parameterObject = {
        objectName: this.object_Name,
        recordName: this.record_Name
    };
    //@wire(getElectricityEmissionFactor, {wrapper:'$parameterObject'})
    //emissionFactorItems;

    @wire(getNavigationItems,{pageName:'$page_Name'}) 
    carbonAccountingItems;


    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }
}