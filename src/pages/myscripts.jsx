import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  doc
} from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function MyScripts() {
  const [scripts, setScripts] = useState([]);
  const navigate = useNavigate();



useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (!user) return;
    try {
    const scriptsQuery = query(
  collection(db, "scripts"),
  where("userId", "==", user.uid),
  orderBy("createdAt", "desc")
);
const snapshot = await getDocs(scriptsQuery);
      const data = snapshot.docs.map((doc) => {
        const scriptData = {
          id: doc.id,
          ...doc.data(),
        };

        console.log("FIREBASE SCRIPT:", scriptData);

        return scriptData;
      });

      setScripts(data);
    } catch (error) {
      console.error(error);
    }
  });

  return () => unsubscribe();
}, []);

const copyScript = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Script copied!"); 
  } catch (error) {
    console.error(error);
    toast.error("Failed to copy");
  }
};


const deleteScript = async (id) => {
  try {
    console.log("Deleting:", id);

    await deleteDoc(doc(db, "scripts", id));

    setScripts((prev) =>
      prev.filter((script) => script.id !== id)
    );

    toast.success("Script deleted!");
  } catch (error) {
    console.error("DELETE ERROR:", error);
    toast.error(error.message);
  }
};


<button
  onClick={() => deleteScript(item.id)}
>
  Delete
</button>



const openScript = (script) => {

  navigate("/dashboard", {
    state: {
      script,
    },
  });

};


  return (
  
<div style={{ padding: "40px", color: "white" }}>
  <h1
    style={{
      fontSize: "42px",
      marginBottom: "30px",
    }}
  >
    My Scripts
  </h1>

  {scripts.length === 0 ? (
    <p>No scripts found</p>
  ) : (
    scripts.map((item) => (
      <div
        key={item.id}
onDoubleClick={() => openScript(item)}


        style={{
          background:
            "linear-gradient(to bottom, #12001d, #1a0129)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "22px",
      
width: "100%",
maxWidth: "100%",
padding: "16px",
boxSizing: "border-box",
overflow: "hidden",

          marginBottom: "24px",
          boxShadow:
            "0 0 40px rgba(140,82,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
      

  <h2
    style={{
      fontSize: "28px",
      margin: 0,
      textTransform: "capitalize",
    }}
  >
    {item.niche}
  </h2>


  <div
style={{
display:"flex",
gap:12,
marginTop:10,
marginBottom:18,
fontSize:13,
opacity:.75
}}
>

<span>
📱 {item.platform}
</span>

<span>
🧬 {item.dnaMode}
</span>

<span>
⭐ {item.scores?.overall ?? item.scores?.viralScore ?? 0}
</span>

</div>

  
<div
  style={{

  display: "flex",
gap: "10px",
position: "relative",
zIndex: 999,

  }}
>

<button
  onClick={() =>
    navigate("/dashboard", {
      state: {
        script: item,
      },
    })
  }
  style={{
    background: "#6d4aff",
    border: "none",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  View
</button>



<button
  onClick={async () => {
    try {
      await navigator.clipboard.writeText(item.script);

      console.log("COPIED:", item.script);

      alert("Copied Successfully!");
    } catch (err) {
      console.error("COPY ERROR:", err);

      // fallback copy
      const textarea = document.createElement("textarea");
      textarea.value = item.script;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      alert("Copied using fallback!");
    }
  }}
  style={{
    background: "linear-gradient(90deg,#8b5cf6,#a855f7)",
    border: "none",
    color: "white",
    padding: "10px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  Copy Script
</button>



</div>

</div>
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            padding: "20px",
            borderRadius: "14px",
          }}
        >

         <div
  style={{
    color:"#d1d1d1",
    lineHeight:1.8,
    fontSize:16,
    whiteSpace:"pre-wrap",
    wordBreak:"break-word",
    padding:"20px"
  }}
>

<div style={{marginBottom:24}}>
<h3 style={{color:"#9d6cff"}}>
🔥 Hook
</h3>

<p>{item.hook}</p>
</div>


<div style={{marginBottom:24}}>
<h3 style={{color:"#9d6cff"}}>
🎬 Script
</h3>

<p>{item.script}</p>
</div>


<div>
<h3 style={{color:"#9d6cff"}}>
🚀 CTA
</h3>

<p>{item.cta}</p>
</div>

</div>


        </div>
      </div>
    ))
  )}
</div>

  );
}