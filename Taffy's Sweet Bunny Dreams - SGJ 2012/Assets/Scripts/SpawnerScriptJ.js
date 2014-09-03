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
	maxTime= editorScript.spawnerMaxTime;
	minTime = editorScript.spawnerMinTime;
	timer = Random.Range(minTime,maxTime);
}
function Update () 
{
	maxTime = editorScript.spawnerMaxTime;
	minTime = editorScript.spawnerMinTime;

	if(!pauseScript.isPaused)
	{
		if(timer <= 0)
		{
			type=Random.Range(0,48);
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
			if(type > 0 && type < 24)
			{
			Instantiate(SpawnItem[0],transform.position- new Vector3(2.3,0,0), transform.rotation);
			}
			if(type > 24 && type < 36)
			{
			Instantiate(SpawnItem[3],transform.position, transform.rotation);
			}
			if(type > 36 && type < 44)
			{
			Instantiate(SpawnItem[1],transform.position, transform.rotation);
			}
			if(type > 44 && type < 48)
			{
			Instantiate(SpawnItem[2],transform.position, transform.rotation);
			}
			
			timer = Random.Range(minTime,maxTime);
		}
		timer-=Time.deltaTime;
	}
}

