var templateRecord;
var templateDocNum = "74";
var fragmentRecords = []; // will contain the (complex) record IDs corresponding to the three fragment nums above.

/* Note: the following few functions are a chain that works with the given Veeva API. One function feeds directly into the next. */

/*The first function that is called when the email button is clicked. Grabs KeyMessage data of the current account from Salesforce and proceeds to StartDataClear(). */
function getTemplateDocId() {
com.veeva.clm.getDataForCurrentObject("Account","Key_Message__c", StartDataClear);
//StartDataPull();
}

/* Clears Salesforce fields of plan1-5, as well as channel1-5. this is necessary to fill in the email dynamic table accurately. The proceeds to getTemplateDocId2(). */
function StartDataClear(result){
var newRecord = {};
newRecord.plan1__c = "";
newRecord.plan2__c = "";
newRecord.plan3__c = "";
newRecord.plan4__c = "";
newRecord.plan5__c = "";
newRecord.channel1__c = "";
newRecord.channel2__c = "";
newRecord.channel3__c = "";
newRecord.channel4__c = "";
newRecord.channel5__c = "";
com.veeva.clm.updateCurrentRecord("Account", newRecord, getTemplateDocId2);

}

/*Grabs the data from the keymessage again, this time for actual parsing. Proceeds immediately to StartDataPull().*/
function getTemplateDocId2(result) {
com.veeva.clm.getDataForCurrentObject("Account","Key_Message__c", StartDataPull);
//StartDataPull();
}

/* Now, given the key message string (result.Account.Key_Message__c), fill all relevant fields that require it on the slide (INCLUDING APPROVED EMAIL: see below for details). Then proceed to createRecordResult().*/
function StartDataPull(result){
//var keyMessageString = ":5A^Favorable Access^All Beneficiaries^L123^75%^^New Jersey^Unrestricted is defined as no prior authorization and no step edit^IQVIA Rx Benefit DesignTM as of 11/2018 and data on file.^^^Horizon Blue Cross Blue Shield^New Jersey State Employees^Express Scripts-Administered Plans^ABABAB^CDCDCD^^^^Commercial^Commercial^Commercial^cdcdcd^ababab^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^:5A^Formulary Access^All Beneficiaries^L124^^^your area^Unrestricted is defined as no prior authorization and no step edit^IQVIA Rx Benefit DesignTM as of 11/2018 and data on file.^^^Horizon Blue Cross Blue Shield^NJ Medicaid^CVS Caremark - Administered Plans^Essence Healthcare - Medicare Part D^Prime Therapeutics-Administered Plans^^^^Commercial^Medicaid^Commercial^Medicare Part D^Commercial^^^^^^^^^^^^SE^UR^UR^PA/SE^SE^^^Y^Y^^^Y^^^^^^^^^^^^^^^^^^^^L101^L102^^^L105^^^^^^^:5C^Improved Access^All Beneficiaries^L101^^^your area^Unrestricted is defined as no prior authorization and no step edit^^^^Horizon Blue Cross Blue Shield^^^after trial of one Milliman competitor^^$0^^ 1.5 million^^^^^^^:5C^Improved Access^All Beneficiaries^L102^^^your area^Unrestricted is defined as no prior authorization and no step edit^^^^NJ Medicaid^^^NJ Medicaid^^$0^^ 1.5 million^^^^^^^:5C^Improved Access^All Beneficiaries^L105^^^your area^Unrestricted is defined as no prior authorization and no step edit^^^^Prime Therapeutics-Administered Plans^^^after trial of one Milliman competitor^^less than $25^^ 1.5 million^^^^^^^";
var keyMessageString = result.Account.Key_Message__c;
// split key message string on each '^', store in array keyMessageArray
var keyMessageArray = keyMessageString.split("^");
//eliminate anything in string before the favorable access information
keyMessageArray.find(findLCode);
keyMessageArray.splice(0, favorableIndex);
var nPlans = 0;
var keyMessageMap = {':5A': {"plan_start": 11, "max_plans_channels": 8,"channel_start": 19}}
var version_string = keyMessageArray[0];
// gets the indexes for the correct version string
var version_map = keyMessageMap[version_string];
// counts the number of filled in plans in the key message string
for (var a = version_map["plan_start"]; a < version_map["plan_start"] + version_map["max_plans_channels"]; a++) {
    if (keyMessageArray[a] != "") nPlans++;
    else break;
}
// limits the number of used plans to 5 for display purposes
if (nPlans > 5) nPlans = 5;
// num: placeholder variable for names of html elements in table
var num = 1;
// fills in the table with variables from the key message string
// increments based on the number of filled in plans in the key message string
var planArr = [];
var channelArr = [];
for (var i = version_map["plan_start"]; i < version_map["plan_start"] + nPlans; i++) {
  //console.log(keyMessageArray[i]);
  planArr[num]  = keyMessageArray[i];
  channelArr[num] = keyMessageArray[version_map["channel_start"]+num-1];
  num++;
}

/* Iteratively, writes a plan/channel name in a hidden div, calculates the width of the div,
and sees if the width is enough to make this plan/channel name spill over in an approved email. */

var newRecord = {};
var hidden = document.getElementById("hidden");
hidden.style.fontSize = "12px";
hidden.style.fontFamily = "Arial";

if(planArr.length > 0){
  var planChan = expand(hidden, planArr[1], channelArr[1]);
  newRecord.plan1__c = planChan[0];
  newRecord.channel1__c = planChan[1];
}
if(planArr.length > 1){
  var planChan = expand(hidden, planArr[2], channelArr[2]);
  newRecord.plan2__c = planChan[0];
  newRecord.channel2__c = planChan[1];
}
if(planArr.length > 2){
  var planChan = expand(hidden, planArr[3], channelArr[3]);
  newRecord.plan3__c = planChan[0];
  newRecord.channel3__c = planChan[1];
}
if(planArr.length > 3){
  var planChan = expand(hidden, planArr[4], channelArr[4]);
  newRecord.plan4__c = planChan[0];
  newRecord.channel4__c = planChan[1];
}
if(planArr.length > 4){
  var planChan = expand(hidden, planArr[5], channelArr[5]);
  newRecord.plan5__c = planChan[0];
  newRecord.channel5__c = planChan[1];
}

com.veeva.clm.updateCurrentRecord("Account", newRecord, createRecordResult);
}
/* Helper function: If a plan name is too large to fit on one line within a table email, insert a line break in that plan's corresponding channel.
Likewise, if a channel name is too large (unlikely) to fit on one line, insert a line break in that channel's corresponding plan. */
function expand(hidden, plan, channel){
hidden.innerHTML = plan;
var width1 = parseInt(getComputedStyle(hidden).width);
hidden.innerHTML = channel;
var width2 = parseInt(getComputedStyle(hidden).width);
if(width1 >= 303){
  channel = channel + "<br>";
}
if(width2 >= 157){
  plan = plan + "<br>";
}
return [plan, channel];
}

/* If all the above was successful, call getApprovedDocument() to return the record ID of the email template document, then go to launchAE().
IMPORTANT: The second parameter, templateDocNum, varies depending on the ApprovedEmail template you're using. When
you make/switch to a new email template, edit the variable templateDocNum at the top of the script to the new value.
How do I get this value, you may ask? Look no further than the URL of the new approved email template.
Ex. given a URL https://milliman.veevavault.com/ui/#doc_info/35/1/0=..........., you should set templateDocNum to 35. */
function createRecordResult(result){
if(result.success == true){
  com.veeva.clm.getApprovedDocument("https://vvagency-milliman.veevavault.com",templateDocNum,launchAE);
}
}

/* Launch an approved email given an email template and a group of fragments. The second parameter, fragmentRecords, is a necessary blank list
to indicate that no fragments should automatically populate the email. Afterwards, go to callback(). */
function launchAE(result) {
  if (result.success == true) {
  templateRecord = result.Approved_Document_vod__c.ID;
      com.veeva.clm.launchApprovedEmail(templateRecord, fragmentRecords, callback);
  }
}

/*If you're reading this, it's already too late.
Just kidding. This function actually does nothing, it's just necessary to provide a callback at the end of launching the approved email.*/
function callback(result) {
}
/*Helper function to find an LCode.*/
function findLCode(word, i){
if(word == "L123"){
  favorableIndex = i-3;
  return;
}
}
