// Interpolate light color between two colors back and forth
var duration : float = 1.0;
var color0 : Color = Color.red;
var color1 : Color = Color.blue;
var color01 : Color = Color.black;
var color02 : Color = Color.grey;

function Update () {
    // set light color
    var t : float = Mathf.PingPong (Time.time, duration) / duration;
    light.color = Color.Lerp (color0, color1, t);
    RenderSettings.ambientLight = Color.Lerp (color01, color02, t);
   // RenderSettings.skybox.SetFloat("_Blend", t);
    
  
}