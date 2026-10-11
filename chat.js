import OpenAI from "openai";
const client = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
export default async function handler(req,res){
 if(req.method!=="POST") return res.status(405).json({error:"Use POST."});
 if(!process.env.OPENAI_API_KEY) return res.status(500).json({error:"Setup incomplete: add OPENAI_API_KEY in Vercel Environment Variables."});
 try{
  const {messages=[],mode="personal"}=req.body||{};
  const business=`You are Jazib AI, business assistant for LINKS INN Interior, Pakistan. Products: Ceiling Panel 8x4, PVC Ceiling Panel, Ceiling 2x2, PVC Wall Panel, Wallpaper, Glass Paper, Vinyl Flooring, Wood Flooring, UV Sheet, Aluminium Doors & Windows, PVC Doors & Windows. WhatsApp +923182064707. Help draft quotations, customer replies and marketing. Never invent prices, stock, delivery promises or address.`;
  const personal="You are Jazib AI, a helpful personal assistant. Reply in the user's language, including Roman Urdu, Urdu, or English. Be practical and honest.";
  const safe=messages.filter(m=>m&&["user","assistant"].includes(m.role)&&typeof m.content==="string").slice(-16).map(m=>({role:m.role,content:m.content.slice(0,6000)}));
  const out=await client.responses.create({model:process.env.OPENAI_MODEL||"gpt-4.1-mini",instructions:mode==="business"?business:personal,input:safe});
  return res.status(200).json({reply:out.output_text||"Jawab nahi mila."});
 }catch(e){console.error(e);return res.status(500).json({error:"AI request failed. API key/model ya hosting logs check karein."});}
}