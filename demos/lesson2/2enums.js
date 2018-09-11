var Status;
(function (Status) {
    Status[Status["Submitted"] = 0] = "Submitted";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
;
var purchaseOrder = {
    description: 'some new equipment',
    status: Status.Approved,
    toString: function () {
        return "PO for " + this.description + " is " + Status[this.status];
    }
};
console.log(purchaseOrder.toString());
