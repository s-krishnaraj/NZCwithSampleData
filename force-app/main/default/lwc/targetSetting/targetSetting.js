import { LightningElement ,wire, api} from 'lwc';

import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class CarbonAccounting extends LightningElement {
    @api app_description = " Science-based Targets & Emissions Forecasting";
   
    @api app_welcome_text = "Learn about Science-based targets & Emissions Forecasting";

    page_Name = 'Target Setting';

    @wire(getNavigationItems,{pageName:'$page_Name'}) 
    targetSettingItems;


    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }
}