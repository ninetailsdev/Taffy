#pragma strict
var ResumeButton:GUITexture;
var MenuButton:GUITexture;
var Menubackground:GUITexture;
var isPaused:boolean = false;
var savedTimeScale:float;

function Start () 
{
	Time.timeScale = 1;
	UnPauseGame();
	Menubackground.pixelInset.width = Screen.width;
	Menubackground.pixelInset.height = Screen.height;
}

function Update () 
{

}

// Update is called once per frame
	function LateUpdate() 
	{
		if(Input.GetKeyDown(KeyCode.P))
		{
			if(isPaused)
			{
				UnPauseGame();
				
			}
			if(!isPaused)
			{
				PauseGame();
			}
		}
		if(Input.GetMouseButton(0))
		{
			if(ResumeButton.HitTest(Input.mousePosition))
			{
				UnPauseGame();
			}
			if(MenuButton.HitTest(Input.mousePosition))
			{
				Application.LoadLevel("MenuScene");
			}
		}
	}
	
	
	function PauseGame()
	{
		Screen.showCursor = true;
        isPaused = true;
        savedTimeScale = Time.timeScale;
        //Time.timeScale = 0;
        AudioListener.pause = true;
		ResumeButton.gameObject.active = true;
		MenuButton.gameObject.active = true;
		Menubackground.gameObject.active = true;
	}
	function UnPauseGame()
	{
		Screen.showCursor = false;
        isPaused = false;
        AudioListener.pause = false;
		ResumeButton.gameObject.active = false;
		MenuButton.gameObject.active = false;
		Menubackground.gameObject.active = false;
	}
	
	function IsGamePaused()
    {
        return (Time.timeScale == 0);
    }

    function OnApplicationPause(pause:boolean)
    {
        if (IsGamePaused())
        {
            AudioListener.pause = true;
        }
    }

