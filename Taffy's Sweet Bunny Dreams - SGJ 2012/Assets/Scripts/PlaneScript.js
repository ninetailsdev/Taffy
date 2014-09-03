#pragma strict
var pauseScript:PauseScript;

function Start () 
{
	pauseScript = GameObject.FindGameObjectWithTag("MainCamera").GetComponent(PauseScript);
}

function Update () 
{
	if(!pauseScript.isPaused)
	rigidbody.transform.position -= transform.up/10;
	transform.rotation = Quaternion.Euler(-90, 0, 180);
}