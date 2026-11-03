// Netlify Function: optional live Google review retrieval, sorted newest first.
// Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in Netlify Environment Variables.
// Uses Place Details (Legacy), which may not be available to every new Google Cloud project.
// Google Places API New currently returns up to five reviews sorted by relevance, not recency.
exports.handler = async function(){
  const key=process.env.GOOGLE_PLACES_API_KEY;
  const placeId=process.env.GOOGLE_PLACE_ID;
  if(!key||!placeId){
    return {statusCode:503,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:'Live Google reviews not configured'})};
  }
  const params=new URLSearchParams({place_id:placeId,key,fields:'name,rating,user_ratings_total,reviews,url',reviews_sort:'newest',language:'en'});
  const url='https://maps.googleapis.com/maps/api/place/details/json?'+params.toString();
  try{
    const response=await fetch(url,{signal:AbortSignal.timeout(6500)});
    if(!response.ok)throw Error('Places API HTTP '+response.status);
    const payload=await response.json();
    if(payload.status!=='OK')throw Error('Places API '+String(payload.status));
    const r=payload.result||{};
    const entries=Array.isArray(r.reviews)?r.reviews:[];
    const reviews=entries.map(review=>({
      author:String(review.author_name||'Google reviewer').slice(0,90),
      rating:Number(review.rating)||null,
      text:String(review.text||'').slice(0,900),
      date:Number(review.time)?new Date(Number(review.time)*1000).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}):'',
      time:Number(review.time)||0,
      url: typeof review.author_url==='string'&&review.author_url.startsWith('https://')?review.author_url: r.url||'https://www.google.com/maps'
    })).filter(review=>review.text).sort((a,b)=>b.time-a.time);
    return {statusCode:200,headers:{'Content-Type':'application/json','Cache-Control':'public,max-age=300,s-maxage=1800'},body:JSON.stringify({rating:Number(r.rating)||null,total:Number(r.user_ratings_total)||null,reviews})};
  }catch(e){
    console.error('IFS Google reviews fetch failed:',String(e));
    return {statusCode:503,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:'Google reviews unavailable'})};
  }
};
