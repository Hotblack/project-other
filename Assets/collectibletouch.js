#pragma strict

var pills : GameObject[];
pills = GameObject.FindGameObjectsWithTag("Pills");

function Start () {

}

function Update () {

}

function OnTriggerEnter (other:Collider){

	if(other.tag == "Player"){
		print("Playertouch");
		
		gameObject.tag = null;
		Destroy(gameObject);
	}
}