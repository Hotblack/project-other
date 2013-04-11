#pragma strict

var i : int = 0;
var pills : GameObject[];

var isSucceed : boolean = false;
var successText : GameObject;

function Start () {

}

function Update () {
	
	pills = GameObject.FindGameObjectsWithTag("Pills");
	
	if(pills.Length >0){
		successText.active = false;
	}
	
	else{
		successText.active = true;
	}
}