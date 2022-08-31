import { LightningElement ,wire, api} from 'lwc';

import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';
//import getElectricityEmissionFactor from '@salesforce/apex/GetRecordId.getRecordBasedonName';

export default class ConfigureNetZeroCloud extends LightningElement {

   
    @api app_description = "Explore the foundational steps to setup Net Zero Cloud";
   
    @api app_welcome_text = "Learn about Net Zero Configurations,Settings and other admininstrative steps";

    page_Name = 'Setup';
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
    setupItems;


get pass_false() {
    return false;
}

get pass_true() {
    return true;
}
}