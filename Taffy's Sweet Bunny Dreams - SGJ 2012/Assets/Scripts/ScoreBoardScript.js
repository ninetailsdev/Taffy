#pragma strict

var MenuButton:GUITexture;
var Menubackground:GUITexture;
function Start () 
{
	Menubackground.pixelInset.width = Screen.width;
	Menubackground.pixelInset.height = Screen.height;
	Screen.showCursor =true;
}

function Update () 
{
	if(Input.GetMouseButton(0))
		{
		if(MenuButton.HitTest(Input.mousePosition))
				{
					Application.LoadLevel("MenuScene");
				}
		}
}