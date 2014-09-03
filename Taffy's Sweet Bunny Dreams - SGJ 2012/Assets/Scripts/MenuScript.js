#pragma strict
var playButton:GUITexture;
var quitButton:GUITexture;
var creditsButton:GUITexture;
var scoreBoardButton:GUITexture;
var Menubackground:GUITexture;

function Start () 
{
	Screen.showCursor = true;
	Menubackground.pixelInset.width = Screen.width;
	Menubackground.pixelInset.height = Screen.height;
}

function Update () 
{
	if(Input.GetMouseButton(0))
	{
		if(playButton.HitTest(Input.mousePosition))
		{
			Application.LoadLevel("lolScene");
		}
		if(quitButton.HitTest(Input.mousePosition))
		{
			Application.Quit();
		}
		if(creditsButton.HitTest(Input.mousePosition))
		{
			Application.LoadLevel("Credits");
		}
		if(scoreBoardButton.HitTest(Input.mousePosition))
		{
			Application.LoadLevel("Instructions");
		}
	}
}