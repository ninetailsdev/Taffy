
var menuButton:GUITexture;
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
