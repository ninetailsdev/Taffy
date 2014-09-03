#pragma strict
public var spawnerMaxTime:float;
public var spawnerMinTime:float;
public var terrainSlower:float;
public var spawnerTimerValue : float;
var texture : Texture2D;
var texture2 : Texture2D;
var texture3 : Texture2D;
var healthState : int;
public var health : int;
var doubleTime:boolean;
var doubleTimer:float;
var Score:int;
var scoreText:TextMesh;
var pauseScript:PauseScript;

function Start () 
{
	pauseScript = GameObject.FindGameObjectWithTag("MainCamera").GetComponent(PauseScript);

	health = 3;
}

function Update() 
{
/*
if(spawnerMaxTime <=5)
spawnerMaxTime = 5;

if(spawnerMinTime <=1)
spawnerMinTime =1;
*/
if(!pauseScript.isPaused)
{
if(health ==0)
{
Application.LoadLevel("GameOver");
}
if(health>3)
health=3;

if(!doubleTime)
{
Score+=(Time.deltaTime)*100;
terrainSlower=2;
}
else
{
Score+=(Time.deltaTime*2)*100;
terrainSlower=1;
doubleTimer-=Time.deltaTime;
}
if(doubleTimer <= 0)
{
	doubleTime=false;
}

scoreText.text = "Distance:"+Score;
}
}



function OnGUI () 
{
	if( health == 3)
	{
   		GUI.Label (Rect (Screen.width -Screen.width/10, Screen.height/100, Screen.width/6, Screen.height/4), texture);
    }
    
    if( health == 2)
    {
    	GUI.Label (Rect (Screen.width -Screen.width/10, Screen.height/100, Screen.width/6, Screen.height/4), texture2);
    }
    if( health == 1)
    {
    	GUI.Label (Rect (Screen.width -Screen.width/10, Screen.height/100, Screen.width/6, Screen.height/4), texture3);
    }
}