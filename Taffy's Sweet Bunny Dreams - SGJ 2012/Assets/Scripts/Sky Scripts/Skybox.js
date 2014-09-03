
function Update () 
{
	if ( transform.position.x > 20 )
	{
		transform.position.x = -20;
	}
	
	transform.Translate( 0.1, 0 , 0 );
}