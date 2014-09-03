#pragma strict

var timer:float;
var maxTime:float;
var minTime:float;
var maxItems:float;
var type:float;
public var SpawnItem:GameObject[];

var editorScript:EditorScript;
var pauseScript:PauseScript;

function Start () 
{
	editorScript = GameObject.FindGameObjectWithTag("Editor").GetComponent(EditorScript);
	pauseScript = GameObject.FindGameObjectWithTag("MainCamera").GetComponent(PauseScript);
	//maxTime= editorScript.spawnerMaxTime;
	//minTime = editorScript.spawnerMinTime;
	timer = Random.Range(minTime,maxTime);
}
function Update () 
{
	if(!pauseScript.isPaused)
	{
		if(timer <= 0)
		{
		/*
			if(day)
			{
			Instantiate(SpawnItem[Random.Range(0,2)],transform.position, transform.rotation);
			timer = Random.Range(minTime,maxTime);
			}
			if(midday)
			{
			Instantiate(SpawnItem[Random.Range(3,5)],transform.position, transform.rotation);
			timer = Random.Range(minTime,maxTime);
			}
			if(night)
			{
			Instantiate(SpawnItem[Random.Range(6,8)],transform.position, transform.rotation);
			timer = Random.Range(minTime,maxTime);
			}
			*/
			
			Instantiate(SpawnItem[Random.Range(0,maxItems)],transform.position, transform.rotation);
			if(editorScript.doubleTime)
			{
			timer = Random.Range(minTime/2,maxTime/2);
			}
			else
			{
			timer = Random.Range(minTime,maxTime);
			}
		}
		timer-=Time.deltaTime;
	}
}

