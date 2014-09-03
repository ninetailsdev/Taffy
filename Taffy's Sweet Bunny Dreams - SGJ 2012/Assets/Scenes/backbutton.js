var Menubackground:GUITexture;
var menuButton:GUITexture;
function Start () 
{
	Screen.showCursor = true;
	Menubackground.pixelInset.width = Screen.width;
	Menubackground.pixelInset.height = Screen.height;
}
function Update()
{

if(Input.GetMouseButton(0))
		{
			if(menuButton.HitTest(Input.mousePosition))
			{
				Application.LoadLevel("MenuScene");
			}
		}
	
}
