//run this in your console

function jack() {
	for (i=0; i<200000; i++) {
		var targetNode = document.getElementById("hplogo").querySelector("canvas");
		if (targetNode) {
	    		setTimeout(function() {
			    triggerMouseEven (targetNode, "mouseover");
			    triggerMouseEvent (targetNode, "mousedown");
			    triggerMouseEvent (targetNode, "mouseup");
			    triggerMouseEvent (targetNode, "click");
	    		},500);
		}
		else
	   	console.log (" -- Target not found! -- ");

		function triggerMouseEvent (node, eventType) {
		    var clickEvent = document.createEvent ('MouseEvents');
		    clickEvent.initEvent (eventType, true, true);
		    node.dispatchEvent (clickEvent);
		}
		console.log('swing');
	}
}
jack();

// run jack(); again after sometime or you can re-factor the code.
