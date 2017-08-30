markInit({
	appId: localStorage.appId || 'test',
	env: 'local'
});

var markId = 0;
window.onload = function () {
	var actionType = 'enter';
	var url = location.href;
	var page = (url.match(/(\w+)\.html/) || [0, 'index'])[1];
	var ops = {actionType, url, page};
	if (localStorage.userId) {
		ops.userId = localStorage.userId;
	}
	Mark(ops, data => markId=data.markId);
};

var exitWin = function(){
	var actionType = 'leave';
	var url = location.href;
	var page = (url.match(/(\w+)\.html/) || [0, 'index'])[1];
	var ops = {actionType, url, page, markId};
	if (localStorage.userId) {
		ops.userId = localStorage.userId;
	}
	markId && Mark(ops);
};
window.addEventListener('beforeunload', exitWin);
