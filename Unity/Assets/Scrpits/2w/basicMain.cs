using System.Collections;  
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;

public class basicMain : MonoBehaviour 
{
    public Button Hello;               
    public string host;                
    public int port;                   
    public string route;               

    private void Start()               
    {
        this.Hello.onClick.AddListener(() =>
        {
            var url = string.Format("{0}:{1}/{2}", host, port, route); // 127.0.0.1:3000/about
            Debug.Log(url);

            StartCoroutine(this.GetBasic(url, (raw) =>                  
            {
                Debug.LogFormat("{0}", raw);
            }));
        });
    }

    private IEnumerator GetBasic(string url, System.Action<string> callback)
    {
        var webRequest = UnityWebRequest.Get(url);
        yield return webRequest.SendWebRequest();

        if (webRequest.result == UnityWebRequest.Result.ConnectionError ||
    webRequest.result == UnityWebRequest.Result.ProtocolError)
        {
            Debug.LogError("네트워크 환경이 좋지 않아서 통신 불가");
            callback(null);
        }
        else
        {
            callback(webRequest.downloadHandler.text);
        }

    }
}