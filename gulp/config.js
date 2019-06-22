var date = new Date(),
	year = date.getFullYear(),
	month = date.getMonth()+1,
	day = date.getDate();

month = month > 9 ? month : '0' + month;
day = day > 9 ? day : '0' + day;

module.exports = {
	//打包模块名以及打包包名
	build: {
		module_name: 'hello_world',
		release_name: 'Hello_World-frontend-install-runtime-0.0.1-allsystem-' + year + month + day
	}
}