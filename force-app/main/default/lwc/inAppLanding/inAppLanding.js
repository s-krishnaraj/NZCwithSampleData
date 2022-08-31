import { LightningElement, wire, api, track } from 'lwc';
import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class InAppLanding extends LightningElement {
    @api welcome_text = "Welcome to the Net Zero Cloud Learning Org";
    pageName = 'LandingPage';
   // @api description = "Here's a collection of resources to help you get started. Explore among the latest features below, available in Financial Services Cloud";
   @wire(getNavigationItems,{pageName:'$pageName'}) 
   landingItems;

   /*connectedCallback() {  
        getNavigationItems()
        .then(result => {
            console.log("The list of navigation items are : ", result);
            if (result.length) {
            this.loyaltyProgramId = result[0].Id;
            } 

        });
    }*/
    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }

}