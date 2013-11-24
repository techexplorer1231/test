var childArray = [];
var compOperatorId = null;
var noOfChild = null;
var tempSumJson = [];
var tempTripSummary;

//variables to create array
var tmpGeoFenceViolationCnt = 0;
var tmpCurfewViolationCnt = 0;
var tmpTotalPointsAfterTrip = 0;
var tmpTotalBadgesAfterTrip = 0;
var tmpDistanceCovered = 0;
var tmpSpeedViolationCnt = 0;
var tmpTripPoints = 0;
var tmpBadgesInTrip = 0;
var tmpTotalCredits = 0;

//
var flagCount = -1;

$(document).ready(function(e) {
    //console.log("will Start test now");
    test();
    //console.log("Completed Test");
    console.log("call trip summary");
    tripSummary();
});

function test() {
    childArray = callParentService();
    //console.log(JSON.stringify(childArray));
}

function callParentService() {
    var temp = new function() {
        $.ajax({
            type: "GET",
            url: 'js/user.json',
            async: false,
            success: function(parent) {
                for (var i = 0; i < parent.childResources.length; i++) {
                    noOfChild = parent.childResources.length;
                    childArray = callChildService(parent.childResources[i], parent.childResources[i].operatorId);
                }
            }
        });
    };
    return childArray;
}

function callChildService(parent, opId) {
    var temp = new function() {
        $.ajax({
            type: "GET",
            url: 'js/userChild.json',
            async: false,
            success: function(child) {
                for (var i = 0; i < child.length; i++) {
                    if (opId === child[i].operatorId) {
                        var tempJson = new function() {
                            this.operatorId = parent.operatorId;
                            this.eUAAccepted = parent.eUAAccepted;
                            this.operatorStatus = parent.operatorStatus;
                            this.snoozeStartTime = parent.snoozeStartTime;
                            this.snoozeEndTime = parent.snoozeEndTime;
                            this.dob = parent.dob;
                            this.resourceName = parent.resourceName;
                            this.primaryPhoneNumber = parent.primaryPhoneNumber;
                            this.primaryEmailAddress = parent.primaryEmailAddress;
                            this.firstName = parent.firstName;
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
                        };
                        childArray.push(tempJson);
                    }
                }
            }
        });
    };
    return childArray;
}

function tripSummary() {
    for (var i = 0; i < childArray.length; i++) {
        tempTripSummary = null;
        
        tempTripSummary = new function() {
            //create Json
            //console.log("will Start test now");
            //console.log(JSON.stringify(childArray[i]));
            //console.log("Completed Test");
            this.operatorId = childArray[i].operatorId;
            this.eUAAccepted = childArray[i].eUAAccepted;
            this.operatorStatus = childArray[i].operatorStatus;
            this.snoozeStartTime = childArray[i].snoozeStartTime;
            this.snoozeEndTime = childArray[i].snoozeEndTime;
            this.dob = childArray[i].dob;
            this.resourceName = childArray[i].resourceName;
            this.primaryPhoneNumber = childArray[i].primaryPhoneNumber;
            this.primaryEmailAddress = childArray[i].primaryEmailAddress;
            this.firstName = childArray[i].firstName;
            this.geoFenceViolationCnt = addPoints(childArray[i].geoFenceViolationCnt, "tmpGeoFenceViolationCnt");
            this.curfewViolationCnt = addPoints(childArray[i].curfewViolationCnt, "tmpCurfewViolationCnt");
            this.totalPointsAfterTrip = addPoints(childArray[i].totalPointsAfterTrip, "tmpTotalPointsAfterTrip");
            this.totalBadgesAfterTrip = addPoints(childArray[i].totalBadgesAfterTrip, "tmpTotalBadgesAfterTrip");
            this.tripStartDateTime = childArray[i].tripStartDateTime;
            this.tripEndTime = childArray[i].tripEndTime;
            this.distanceCovered = addPoints(childArray[i].distanceCovered, "tmpDistanceCovered");
            this.speedViolationCnt = addPoints(childArray[i].speedViolationCnt, "tmpSpeedViolationCnt");
            this.tripPoints = addPoints(childArray[i].tripPoints, "tmpTripPoints");
            this.badgesInTrip = addPoints(childArray[i].badgesInTrip, "tmpBadgesInTrip");
            this.totalCredits = addPoints(childArray[i].totalCredits, "tmpTotalCredits");
            this.tripProcessed = childArray[i].tripProcessed;
            this.tripDetail = childArray[i].tripDetail;
            this.tripId = childArray[i].tripId;
            this.tripSnoozed = childArray[i].tripSnoozed;
            //create Json
        };
        if (compOperatorId != childArray[i].operatorId) {
            compOperatorId = childArray[i].operatorId;
            tempSumJson.push(tempTripSummary);
            console.log(JSON.stringify(tempSumJson));
        }
    }
}

function addPoints(actual, tmp) {
    var returnValue;
    if (tmp == "tmpGeoFenceViolationCnt") {
        tmpGeoFenceViolationCnt = actual + tmpGeoFenceViolationCnt;
        returnValue = tmpGeoFenceViolationCnt;
    }
    else if (tmp == "tmpCurfewViolationCnt") {
        tmpCurfewViolationCnt = actual + tmpCurfewViolationCnt;
        returnValue = tmpCurfewViolationCnt;
    }
    else if (tmp == "tmpTotalPointsAfterTrip") {
        tmpTotalPointsAfterTrip = actual + tmpTotalPointsAfterTrip;
        returnValue = tmpTotalPointsAfterTrip;
    }
    else if (tmp == "tmpTotalBadgesAfterTrip") {
        tmpTotalBadgesAfterTrip = actual + tmpTotalBadgesAfterTrip;
        returnValue = tmpTotalBadgesAfterTrip;
    }
    else if (tmp == "tmpDistanceCovered") {
        tmpDistanceCovered = actual + tmpDistanceCovered;
        returnValue = tmpDistanceCovered;
    }
    else if (tmp == "tmpSpeedViolationCnt") {
        tmpSpeedViolationCnt = actual + tmpSpeedViolationCnt;
        returnValue = tmpSpeedViolationCnt;
    }
    else if (tmp == "tmpTripPoints") {
        tmpTripPoints = actual + tmpTripPoints;
        returnValue = tmpTripPoints;
    }
    else if (tmp == "tmpBadgesInTrip") {
        tmpBadgesInTrip = actual + tmpBadgesInTrip;
        returnValue = tmpBadgesInTrip;
    }
    else if (tmp == "tmpTotalCredits") {
        tmpTotalCredits = actual + tmpTotalCredits;
        returnValue = tmpTotalCredits;
    }

    return returnValue;
}

function tripSummaryDetails() {

}

function callCreateSumJSON() {

}