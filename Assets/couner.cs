using UnityEngine;
using System.Collections;

public class couner : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	
	private void OnGUI()
	{
    	GUIStyle myStyle = new GUIStyle();
    	GUI.Label(new Rect(10,10, 100, 30), "Hello World!");
	}
	
}