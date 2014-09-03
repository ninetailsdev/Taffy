var count : int = 1;

function Update () 
{

//iPhoneUtils.PlayMovie("introMovie",Color.black, iPhoneMovieControlMode.CancelOnTouch);
if(Application.platform != RuntimePlatform.IPhonePlayer);
renderer.material.mainTexture.Play();

count = count + 1;

if (count > 1000 || Input.GetKeyDown("space"))
Application.LoadLevel("MenuScene");


}