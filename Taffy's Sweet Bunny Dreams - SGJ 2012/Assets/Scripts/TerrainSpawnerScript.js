#pragma strict

public var terrain:GameObject[];

var editorScript:EditorScript;
var spawnTerrain:boolean;
var terrainSpawnerTrigger:terraintriggerScript;
function Start () 
{
spawnTerrain = true;
editorScript = GameObject.FindGameObjectWithTag("Editor").GetComponent(EditorScript);
//terrainSpawnerTrigger = GameObject.FindGameObjectWithTag("TerrainTrigger").GetComponent(terraintriggerScript);
}
function Update () 
{
	if(spawnTerrain)
	{
		Instantiate(terrain[Random.Range(0,9)],	transform.position, transform.rotation);

		spawnTerrain = false;
	}

}

public function Spawn()
{
	spawnTerrain = true;

}

