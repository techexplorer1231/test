$(document).ready(function(e) {
    callParentService();
});
var operatorId;
var eUAAccepted;
var operatorStatus;
var snoozeStartTime;
var snoozeEndTime;
var dob;
var resourceName;
var primaryPhoneNumber;
var primaryEmailAddress
var firstName;

function callParentService() {
    $.getJSON('js/user.json', function(parent) {
        for (var i = 0; i < parent.childResources.length; i++) {

            operatorId = parent.childResources[i].operatorId;
            eUAAccepted = parent.childResources[i].eUAAccepted;
            operatorStatus = parent.childResources[i].operatorStatus;
            snoozeStartTime = parent.childResources[i].snoozeStartTime;
            snoozeEndTime = parent.childResources[i].snoozeEndTime;
            dob = parent.childResources[i].dob;
            resourceName = parent.childResources[i].resourceName;
            primaryPhoneNumber = parent.childResources[i].primaryPhoneNumber;
            primaryEmailAddress = parent.childResources[i].primaryEmailAddress;
            firstName = parent.childResources[i].firstName;
            $.getJSON('js/userChild.json', function(child) {
                for (var i = 0; i < child.length; i++) {
                    if (child[i].operatorId == operatorId) {
                        //alert("processing")
                        var tempChildAndParentIndividual = new function() {
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
                        obj.push(tempChildAndParentIndividual);
                    }
                    console.log(JSON.stringify(obj))
                }
            });
        }
    });
}

obj = []
function callChildService(operatorId, eUAAccepted, operatorStatus, snoozeStartTime, snoozeEndTime, dob, resourceName, primaryPhoneNumber,
        primaryEmailAddress, firstName) {
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