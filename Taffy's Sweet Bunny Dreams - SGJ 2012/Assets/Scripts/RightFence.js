#pragma strict

var pauseScript:PauseScript;
var editorScript:EditorScript;
var fowardBack:int;
function Start () 
{
	transform.rotation = Quaternion.Euler(0,180,0);
	editorScript = GameObject.FindGameObjectWithTag("Editor").GetComponent(EditorScript);
	pauseScript = GameObject.FindGameObjectWithTag("MainCamera").GetComponent(PauseScript);
	
}

function Update () 
{
	if(!pauseScript.isPaused)
	{
		rigidbody.transform.position += transform.forward*50/editorScript.terrainSlower * Time.deltaTime;
	}
}