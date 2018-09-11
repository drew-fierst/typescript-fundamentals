
enum Status { Submitted, Approved, Rejected };

const purchaseOrder = {
	description: 'some new equipment',
	status: Status.Approved,
	toString: function () {
		return `PO for ${this.description} is ${Status[this.status]}`;
	}
};

console.log(purchaseOrder.toString());
