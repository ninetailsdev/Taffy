#pragma strict

var terrainSpawner:GameObject;
function Start () 
{
	terrainSpawner = GameObject.FindGameObjectWithTag("TerrainSpawner");
}

function Update () 
{

}

function OnTriggerEnter(collision : Collider)
{
    if(collision.gameObject.tag == "Terrain")
    {
    terrainSpawner.SendMessage("Spawn", SendMessageOptions.DontRequireReceiver);
    }

}
