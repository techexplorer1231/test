$(document).ready(function(e) {
    callParentService();

});
var parentJson;
var childJson;

function callParentService() {
    $.getJSON('js/user.json', function(parent) {
        getChildDetailsFromParentJson(parent);
    });
}

function getChildDetailsFromParentJson(userParent) {
    var thisObj = this;
    for (var i = 0; i < userParent.childResources.length; i++) {
        thisObj.sendParentJsonValue(
                userParent.childResources[i].operatorId,
                userParent.childResources[i].eUAAccepted,
                userParent.childResources[i].operatorStatus,
                userParent.childResources[i].snoozeStartTime,
                userParent.childResources[i].snoozeEndTime,
                userParent.childResources[i].dob,
                userParent.childResources[i].resourceName,
                userParent.childResources[i].primaryPhoneNumber,
                userParent.childResources[i].primaryEmailAddress,
                userParent.childResources[i].firstName);
    }
}

function sendParentJsonValue(operatorId, eUAAccepted, operatorStatus, snoozeStartTime,
        snoozeEndTime, dob, resourceName, primaryPhoneNumber,
        primaryEmailAddress, firstName) {

    var tempParent = new function() {
        this.operatorId = operatorId;
        this.eUAAccepted = eUAAccepted;
        this.operatorStatus = operatorStatus;
        this.snoozeStartTime = snoozeStartTime;
        this.snoozeEndTime = snoozeEndTime;
        this.dob = dob;
        this.resourceName = resourceName;
        this.primaryPhoneNumber = primaryPhoneNumber;
        this.primaryEmailAddress = primaryEmailAddress;
        this.firstName = firstName;
    }
    parentJson = tempParent;
    tempOperatorId = operatorId;
    callChildService(tempParent, tempOperatorId);
}

function callChildService(tempParentJson, operatorId) {
    $.getJSON('js/userChild.json', function(child) {
        for (var i = 0; i < child.length; i++) {
            if (child[i].operatorId == operatorId) {
                var tempChildAndParent = new function() {
                    this.operatorId = tempParentJson.operatorId;
                    this.eUAAccepted = tempParentJson.eUAAccepted;
                    this.operatorStatus = tempParentJson.operatorStatus;
                    this.snoozeStartTime = tempParentJson.snoozeStartTime;
                    this.snoozeEndTime = tempParentJson.snoozeEndTime;
                    this.dob = tempParentJson.dob;
                    this.resourceName = tempParentJson.resourceName;
                    this.primaryPhoneNumber = tempParentJson.primaryPhoneNumber;
                    this.primaryEmailAddress = tempParentJson.primaryEmailAddress;
                    this.firstName = tempParentJson.firstName;
                    this.geoFenceViolationCnt = child[i].geoFenceViolationCnt;
                    this.curfewViolationCnt = child[i].curfewViolationCnt;
                    this.totalPointsAfterTrip = child[i].totalPointsAfterTrip;
                    this.totalBadgesAfterTrip = child[i].totalBadgesAfterTrip;
                    this.tripStartDateTime = child[i].tripStartDateTime;
                    this.tripEndTime = child[i].tripEndTime;
                    this.distanceCovered = child[i].distanceCovered;
                    this.speedViolationCnt = child[i].speedViolationCnt;
                    this.tripPoints = child[i].tripPoints;
                    this.badgesInTrip = child[i].badgesInTrip;
                    this.totalCredits = child[i].totalCredits;
                    this.tripProcessed = child[i].tripProcessed;
                    this.tripDetail = child[i].tripDetail;
                    this.tripId = child[i].tripId;
                    this.tripSnoozed = child[i].tripSnoozed;
                }
                console.log(JSON.stringify(tempChildAndParent))
            }
        }
    });
}



function test() {
    console.log("--------------------Parent---------------------------")
    console.log(JSON.stringify(parentJson))
    console.log("--------------------Parent---------------------------")
    console.log("--------------------Child---------------------------")
    console.log(JSON.stringify(childJson))
    console.log("--------------------Child---------------------------")
}
















//var childglobal;
//function createjsonParent() {
//    $.getJSON('js/user.json', function(parent) {
//        jsonObjParent = [];
//        for (var i = 0; i < parent.childResources.length; i++) {
//            tempParent = createJsonObj(parent.childResources[i].operatorId,
//                    parent.childResources[i].eUAAccepted,
//                    parent.childResources[i].operatorStatus,
//                    parent.childResources[i].snoozeStartTime,
//                    parent.childResources[i].snoozeEndTime,
//                    parent.childResources[i].dob,
//                    parent.childResources[i].resourceName,
//                    parent.childResources[i].primaryPhoneNumber,
//                    parent.childResources[i].primaryEmailAddress,
//                    parent.childResources[i].firstName);
//            jsonObjParent.push(tempParent);
//        }
//       // console.log(JSON.stringify(jsonObjParent))
//    });
//}
//function createJsonObj(operatorId, eUAAccepted, operatorStatus, snoozeStartTime,
//        snoozeEndTime, dob, resourceName, primaryPhoneNumber,
//        primaryEmailAddress, firstName) {
//    var thisObj = this;
//    var check = test();
//    console.log(check);
//    var temp = new function() {
//        this.operatorId = operatorId;
//        this.eUAAccepted = eUAAccepted;
//        this.operatorStatus = operatorStatus;
//        this.snoozeStartTime = snoozeStartTime;
//        this.snoozeEndTime = snoozeEndTime;
//        this.dob = dob;
//        this.primaryPhoneNumber = primaryPhoneNumber;
//        this.primaryEmailAddress = primaryEmailAddress;
//        this.firstName = firstName;
//        this.childTripsDetails = "Hi";
//      
//    }
//    return temp;
//}
//function test(){
//     $.getJSON('js/userChild.json', function(child) {
//       childglobal = child;
//       test2();
//     });
//     
//}
//function test2(){
//   alert(JSON.stringify(childglobal)) 
//}

//function jsonChild() {
//    var thisObj = this;
//    $.getJSON('js/userChild.json', function(child) {
//        alert(JSON.stringify(child))
//        jsonObjChild = [];
//        //for (var i = 0; i < child.length; i++) {   
//            var temp = new function(){
//                    id=child[0].id
//                    geoFenceViolationCnt=child[0].operatorId;
//                    geoFenceViolationCnt=child[0].geoFenceViolationCnt;
//                    curfewViolationCnt=child[0].curfewViolationCnt;
//                    totalPointsAfterTrip=child[0].totalPointsAfterTrip;
//                    totalBadgesAfterTrip=child[0].totalBadgesAfterTrip;
//                    tripStartDateTime=child[0].tripStartDateTime;
//                    tripEndTime=child[0].tripEndTime;
//                    distanceCovered=child[0].distanceCovered;
//                    speedViolationCnt=child[0].speedViolationCnt;
//                    tripPoints=child[0].tripPoints; 
//                    badgesInTrip=child[0].badgesInTrip;
//                    totalCredits=child[0].totalCredits; 
//                    tripProcessed=child[0].tripProcessed;
//                    tripDetail=child[0].tripDetail; 
//                    tripId=child[0].tripId; 
//    
//            }
//            //console.log(temp)
//            //alert("jsonCHild")
//            //jsonObjChild.push(temp)
//            
//      //  }
//        
//        return temp;
//        
//    });
//}

//function createJsonObj(id,
//        operatorId, geoFenceViolationCnt, curfewViolationCnt,
//        totalPointsAfterTrip, totalBadgesAfterTrip, tripStartDateTime,
//        tripEndTime, distanceCovered, speedViolationCnt, tripPoints,
//        badgesInTrip, totalCredits, tripProcessed, tripDetail, tripId) {
//    var temp = new function() {
//              this.id = id;
//		this.operatorId = operatorId;
//		this.geoFenceViolationCnt = geoFenceViolationCnt;
//		this.curfewViolationCnt = curfewViolationCnt;
//		this.totalPointsAfterTrip = totalPointsAfterTrip;
//		this.totalBadgesAfterTrip = totalBadgesAfterTrip;
//		this.tripStartDateTime = tripStartDateTime;
//		this.tripEndTime = tripEndTime;
//		this.distanceCovered = distanceCovered;
//		this.speedViolationCnt = speedViolationCnt;
//		this.tripPoints = tripPoints;
//		this.badgesInTrip = badgesInTrip;
//		this.totalCredits = totalCredits;
//		this.tripProcessed = tripProcessed;
//		this.tripDetail = tripDetail;
//		this.tripId = tripId;
//    }
//    return temp;
//}