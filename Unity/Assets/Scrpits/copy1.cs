using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Protocols
{

    public class Packets
    {
        public class common
        {
            public int cmd;
            public string message;
        }

        public class req_data : common
        {
            public int id;
            public string data;
        }
    }
}
