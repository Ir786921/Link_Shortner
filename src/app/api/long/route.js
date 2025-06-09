import { connectDB } from '@/lib/db';
import { Shortener } from '@/Model/LinkShortner';


export async function POST(req){
   await connectDB();
   
  const body = await req.json(); 
  const { originalUrl } = body;
   let code = "bdchjagfghcfgzxhvabnsdfghajgffhjcaghjxcvzbnvxnbasvchgafghvsbnxasbvcafxghavnbz"
    const urlObj = new URL(originalUrl);
    const mainUrl = urlObj.origin
    const shortcode =  code.substring(Math.floor(Math.random()*10),Math.floor(Math.random()*30));
    const short = new Shortener({ originalUrl: originalUrl, code:shortcode });
    await short.save();

    return Response.json({ShortUrl : `${mainUrl}/${shortcode}`})
}