var ka = document.createElement('script');
ka.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";// author : k-a
document.getElementsByTagName('head')[0].appendChild(ka);

window.k_a = 0;
setInterval(function() {
	var lastSeen = $('.pane-header .chat-body .emojitext').last().text();
	var currentdate = new Date(); 
	var datetime = k_a+" " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

	console.log(datetime + ", " + lastSeen);
	k_a++;
}, 1000);
