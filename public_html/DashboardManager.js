$(document).ready(function(e) {
    callParentService()
});
var length = 0;
var tempObj = [];

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
                    for (var i = 0; i < parent.childResources.length; i++) {
                        for (var j = 0; j < child.length; j++) {
                            if (parent.childResources[i].operatorId === child[j].operatorId) {
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
                                    this.geoFenceViolationCnt = child[j].geoFenceViolationCnt;
                                    this.curfewViolationCnt = child[j].curfewViolationCnt;
                                    this.totalPointsAfterTrip = child[j].totalPointsAfterTrip;
                                    this.totalBadgesAfterTrip = child[j].totalBadgesAfterTrip;
                                    this.tripStartDateTime = child[j].tripStartDateTime;
                                    this.tripEndTime = child[j].tripEndTime;
                                    this.distanceCovered = child[j].distanceCovered;
                                    this.speedViolationCnt = child[j].speedViolationCnt;
                                    this.tripPoints = child[j].tripPoints;
                                    this.badgesInTrip = child[j].badgesInTrip;
                                    this.totalCredits = child[j].totalCredits;
                                    this.tripProcessed = child[j].tripProcessed;
                                    this.tripDetail = child[j].tripDetail;
                                    this.tripId = child[j].tripId;
                                    this.tripSnoozed = child[j].tripSnoozed;
                                };
                                tempObj.push(tempJson);
                                console.log(JSON.stringify(tempObj));
                            }
                        }

                    }
                }
            });
        }
    });
}

