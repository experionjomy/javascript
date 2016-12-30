
var userName="demo@experionglobal.com";
var password="exp@123";

var login=function(){
	
	return new Promise(function (resolve,reject){
		if(userName=="demo@experionglobal.com" && password=="exp@123"){
			resolve()
		}
		else{
			reject();
		}

	});
}

login()
	.then(function(){
	console.log("success");
	var xhttpObject1=new XMLHttpRequest();
	xhttpObject1.onreadystatechange=function(){

		if(this.readyState==4 && this.status==200){
		 			 console.log(this.responseText);
		}
		};
	xhttpObject1.open("GET","https://exptest.herokuapp.com/api/imageGallery",true);
	//xhttpObject.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttpObject1.send();
	})
	.catch(function(){
			console.log("failed!!");
	});

