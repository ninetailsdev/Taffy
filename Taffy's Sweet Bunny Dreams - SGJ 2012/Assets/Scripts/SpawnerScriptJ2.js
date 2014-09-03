#pragma strict

var timer:float = 3;
var doubleTime:float;
var normTime:float;
var editorScript:EditorScript;

public var SpawnItem:GameObject[];

var pauseScript:PauseScript;

function Start () 
{
	editorScript = GameObject.FindGameObjectWithTag("Editor").GetComponent(EditorScript);
	pauseScript = GameObject.FindGameObjectWithTag("MainCamera").GetComponent(PauseScript);
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
			Instantiate(SpawnItem[0],transform.position, transform.rotation);
			if(editorScript.doubleTime)
			{
				timer = doubleTime;
			}
			else
			{
				timer = normTime;
			}
				}
		timer-=Time.deltaTime;
	}
}

