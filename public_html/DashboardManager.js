$(document).ready(function(e) {
    callParentService()
    test();
});
var length = 0;
function callParentService() {
    var thisObj = this;
    $.ajax({
        type: "GET",
        url: 'js/user.json',
        async: "false",
        success: function(parent) {
            $.ajax({
                type: "GET",
                url: 'js/userChild.json',
                async: "false",
                success: function(child) {
                    tempObj = [];
                    for (var i = 0; i < parent.childResources.length; i++) {
                        for (var i = 0; i < child.length; i++) {
                            if (child[i].operatorId == parent.childResources[i].operatorId) {
                                var tempJson = new function() {
                                    this.operatorId = parent.childResources[i].operatorId;
                                    this.eUAAccepted = parent.childResources[i].eUAAccepted;
                                    this.operatorStatus = parent.childResources[i].operatorStatus;
                                    this.snoozeStartTime = parent.childResources[i].snoozeStartTime;
                                    this.snoozeEndTime = parent.childResources[i].snoozeEndTime;
                                    this.dob = parent.childResources[i].dob;
                                    this.resourceName = parent.childResources[i].resourceName;
                                    this.primaryPhoneNumber = parent.childResources[i].primaryPhoneNumber;
                                    this.primaryEmailAddress = parent.childResources[i].primaryEmailAddress;
                                    this.firstName = parent.childResources[i].firstName;
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
                                tempObj.push(tempJson)
                                console.log(JSON.stringify(tempObj))  
                                alert("Hi");
                            }
                        }
                    }
                }
            });
        }
    });
}

function test() {
alert("in test")
}


