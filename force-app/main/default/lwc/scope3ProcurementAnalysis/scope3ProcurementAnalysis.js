import { LightningElement ,wire, api} from 'lwc';

import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class CarbonAccounting extends LightningElement {
    @api app_description = " Procuremenent-related Emissions & Supplier Engagement";
   
    @api app_welcome_text = "Learn about Scope 3 Hub & Supplier Sustainability Scorecard";

    page_Name = 'Supplier Management';

    @wire(getNavigationItems,{pageName:'$page_Name'}) 
    supplierMgmtItems;


    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }
}