#pragma strict
var totalTime = 0.0;
private var textMeshComponent;

function Start ()
{
	textMeshComponent = GetComponent( "TextMesh" );

}

function Update () 
{
	  // add amount of time since last frame to the totalTime
  totalTime += Time.deltaTime; 
// use substring to get a shorter numerical value
//textMeshComponent = totalTime.ToString().Substring(0,4);

print(Time.realtimeSinceStartup);
}