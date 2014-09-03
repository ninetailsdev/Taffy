#pragma strict
var terrainSpawner:GameObject;

function Start () 
{
	terrainSpawner = GameObject.FindGameObjectWithTag("TerrainSpawner");
}

function Update () 
{

}

function OnTriggerEnter(hit : Collider)
{
   if(hit.gameObject.tag=="Cone")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Cupcake")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Gingerbread")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="OrangeBassett")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="PinkBassett")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="RoundBassett")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Shoelaces")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="WhiteBassett")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Chocolate")
		{
			//Score++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Hurdle")
		{
			GameObject.Destroy(hit.gameObject);
		}

			if(hit.gameObject.tag == "Item")
		    {
		    GameObject.Destroy(hit.gameObject);
		    }
}
