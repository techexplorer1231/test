$(document).ready(function(e) {
    $.getJSON('js/user.json', function(parent) {
        $.getJSON('js/userChild.json', function(teen) {
            getdata(parent, teen)
        });
    });
});

function getdata(parent, teen) {
    var jsonDataNoTrip = [
        {"Operator": "Susan", "Status": 1, "Manage": "<select class='operatorRoleNoTrip'></select>"},
        {"Operator": "Jacqueline", "Status": 1, "Manage": "<select class='operatorRoleNoTrip'></select>"},
        {"Operator": "Clara", "Status": 1, "Manage": "<select class='operatorRoleNoTrip'></select>"},
        {"Operator": "Elaina", "Status": 1, "Manage": "<select class='operatorRoleNoTrip'></select>"}
    ]
//    $("#operatorNoTrip").jsonTable({
//        head: ['Operator', 'Status', 'Manage'],
//        json: ['Operator', 'Status', 'Manage']
//    });
//
//    $("#operatorNoTrip").jsonTableUpdate({
//        source: jsonDataNoTrip,
//        rowClass: "rowClass",
//        callback: function() {
//            $("#msg").html("Table updated at " + new Date());
//        }
//    });

//    $.each(data, function(key, value) {
//        
//    });

    jsonObjParent = [];
    jsonObjChild = [];
    for (var i = 0; i < parent.childResources.length; i++) {
        tempParent = getFromChildCurrentResourceObj(parent.childResources[i])
        jsonObjParent.push(tempParent)
    console.log(parent.childResources[i].operatorId);
    }
    //console.log(JSON.stringify(jsonObjParent));
    
    


}
function getFromTripsummaryObj() {
    var resourceChild = new function() {
        this.geoFenceViolationCnt
        this.curfewViolationCnt
        this.totalPointsAfterTrip
        this.totalBadgesAfterTrip
        this.operatorId
        this.tripStartDateTime
        this.tripEndTime
        this.distanceCovered
        this.speedViolationCnt
        this.tripPoints
        this.totalCredits
    }
    return resourceChild;
}
function getFromChildCurrentResourceObj(childCurrentResource) {

    var resourceParent = new function() {
        this.operatorId = childCurrentResource.operatorId;
        this.eUAAccepted = childCurrentResource.eUAAccepted;
        this.operatorStatus = childCurrentResource.operatorStatus;
        this.dob = childCurrentResource.dob;
        this.primaryPhoneNumber = childCurrentResource.primaryPhoneNumber;
        this.primaryEmailAddress = childCurrentResource.primaryEmailAddress;
    };
    return resourceParent;

}
