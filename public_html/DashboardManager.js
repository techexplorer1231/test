var childArray = [];

$(document).ready(function(e) {
    test();
});

function test() {
    var temp = callParentService();
    console.log(JSON.stringify(temp));
}

function callParentService() {
    var temp = new function() {
        $.ajax({
            type: "GET",
            url: 'js/user.json',
            async: false,
            success: function(parent) {
                for (var i = 0; i < parent.childResources.length; i++) {
                    //alert("In Parent");
                    childArray = callChildService(parent.childResources[i], parent.childResources[i].operatorId);
                    // console.log(JSON.stringify(childArray));
                }
            }
        });
    }
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
                // console.log(JSON.stringify(childArray));
            }
        });
    }
    return childArray;
}

//var parentItems = [];
//var countChildren;
//function callParentService() {
//    $.ajax({
//        type: "GET",
//        url: 'js/user.json',
//        async: false,
//        success: function(parent) {
//
//            for (var i = 0; i < parent.childResources.length; i++) {
//                parentItems.push(parent.childResources[i]);
//                countChildren = i;
//            }
//            //alert("In Parent" + i);
//        }
//
//    });
//}
//
//function callParentService() {
//    for (var i = 0; i <= countChildren; i++) {
//        $.ajax({
//            type: "GET",
//            url: 'js/userChild.json',
//            async: false,
//            success: function(child) {
//
//
//            }
//        });
//}



//var length = 0;
//var tempObj = [];
//function callParentService() {
//    var thisObj = this;
//    $.ajax({
//        type: "GET",
//        url: 'js/user.json',
//        async: "false",
//        success: function(parent) {
//            $.ajax({
//                type: "GET",
//                url: 'js/userChild.json',
//                async: "false",
//                success: function(child) {
//                    for (var i = 0; i < parent.childResources.length; i++) {
//                        for (var j = 0; j < child.length; j++) {
//                            if (parent.childResources[i].operatorId === child[j].operatorId) {
//                                var tempJson = new function() {
//                                    this.operatorId = parent.childResources[i].operatorId;
//                                    this.eUAAccepted = parent.childResources[i].eUAAccepted;
//                                    this.operatorStatus = parent.childResources[i].operatorStatus;
//                                    this.snoozeStartTime = parent.childResources[i].snoozeStartTime;
//                                    this.snoozeEndTime = parent.childResources[i].snoozeEndTime;
//                                    this.dob = parent.childResources[i].dob;
//                                    this.resourceName = parent.childResources[i].resourceName;
//                                    this.primaryPhoneNumber = parent.childResources[i].primaryPhoneNumber;
//                                    this.primaryEmailAddress = parent.childResources[i].primaryEmailAddress;
//                                    this.firstName = parent.childResources[i].firstName;
//                                    this.geoFenceViolationCnt = child[j].geoFenceViolationCnt;
//                                    this.curfewViolationCnt = child[j].curfewViolationCnt;
//                                    this.totalPointsAfterTrip = child[j].totalPointsAfterTrip;
//                                    this.totalBadgesAfterTrip = child[j].totalBadgesAfterTrip;
//                                    this.tripStartDateTime = child[j].tripStartDateTime;
//                                    this.tripEndTime = child[j].tripEndTime;
//                                    this.distanceCovered = child[j].distanceCovered;
//                                    this.speedViolationCnt = child[j].speedViolationCnt;
//                                    this.tripPoints = child[j].tripPoints;
//                                    this.badgesInTrip = child[j].badgesInTrip;
//                                    this.totalCredits = child[j].totalCredits;
//                                    this.tripProcessed = child[j].tripProcessed;
//                                    this.tripDetail = child[j].tripDetail;
//                                    this.tripId = child[j].tripId;
//                                    this.tripSnoozed = child[j].tripSnoozed;
//                                };
//                                tempObj.push(tempJson);
//                                console.log(JSON.stringify(tempObj));
//                            }
//                        }
//
//                    }
//                }
//            });
//        }
//    });
//}

