public without sharing class GetItems {
    

    @AuraEnabled(cacheable = true)
    public static List<Navigation_Item__c>  getPageItems(String pageName){
        List<Navigation_Item__c> items = new List<Navigation_Item__c>();
        for(Navigation_Item__c item : [SELECT Id,Icon_Name__c, Section_Detail__c,Section_Heading__c,Target_App__c,RelatedEntityAPIName__c,Target_Tab_Name__c,NavigationType__c,Filter_Criteria__c,Target_RecordId__c, ObjectName__c
        FROM Navigation_Item__c WHERE isActive__c = true and PageName__c =:pageName order by Sequence_Number__c ]){
            if(item.Filter_Criteria__c != null){
                String recordId = getRecordIdBasedOnFilter(item.ObjectName__c,item.Filter_Criteria__c);
                if(recordId != null){
                    item.Target_RecordId__c = recordId;
                }
            }
            items.add(item);
        }
        return items;
    }

     private static String getRecordIdBasedOnFilter(String objectName, String filter){
        String soqlQuery = 'select Id,Name from ' + objectName + ' where ' + filter;
        try{
            List<Sobject> results = database.query(soqlQuery);
            return results[0].Id;
        }    
        catch(Exception e){
            return null;
        }
            
    }

}
