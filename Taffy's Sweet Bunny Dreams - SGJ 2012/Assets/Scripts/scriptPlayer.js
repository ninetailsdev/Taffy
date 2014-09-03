var editorScript:EditorScript;
var pauseScript:PauseScript;
var hurt:AudioSource;
var munch:AudioSource;

function Start()
{
editorScript = GameObject.FindGameObjectWithTag("Editor").GetComponent(EditorScript);
pauseScript = GameObject.FindGameObjectWithTag("MainCamera").GetComponent(PauseScript);
}

function Update()
{
	if(!pauseScript.isPaused)
	{
		animation.CrossFade("Run");
	
		//Controls
		if(Input.GetKey("a") && transform.position.x > -3.0)
		{
		
			transform.Translate(Vector3(-0.1,0,0));
			
		}
		
		if(Input.GetKey("d") && transform.position.x < 3.0)
		{
		
			transform.Translate(Vector3(0.1,0,0));
		
		}
	}
}

function OnTriggerEnter(hit : Collider)
{
		if(hit.gameObject.tag=="Cone")
		{
			//Score++;
			munch.Play();
			editorScript.doubleTime = true;
			editorScript.doubleTimer = 10;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Cupcake")
		{
			//Score++;
			munch.Play();
			editorScript.doubleTime = true;
			editorScript.doubleTimer = 10;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Gingerbread")
		{
			//Score++;
			munch.Play();
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="OrangeBassett")
		{
			//Score++;
			munch.Play();
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="PinkBassett")
		{
			//Score++;
			audio.Play();
			editorScript.spawnerMinTime -= 1;
			editorScript.spawnerMaxTime -= 2;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="RoundBassett")
		{
			//Score++;
			munch.Play();
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Shoelaces")
		{
			//Score++;
			munch.Play();
			editorScript.spawnerMinTime -= 1;
			editorScript.spawnerMaxTime -= 2;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="WhiteBassett")
		{
			//Score++;d
			munch.Play();
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Chocolate")
		{
			//Score++;
			munch.Play();
			editorScript.health++;
			GameObject.Destroy(hit.gameObject);
		}
		if(hit.gameObject.tag=="Hurdle")
		{
			//Score++;#
			hurt.Play();
			editorScript.health -= 1;			
			GameObject.Destroy(hit.gameObject);
		}
}