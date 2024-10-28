import Link from "next/link";

const ThirdPart = () => {

  const allLinks = [
    {id:1, text:'Adbluemedia', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:2, text:'Affmine', link: 'https://www.facebook.com/', bgColor:'tomato'},
    {id:3, text:'Maxbountry', link: 'https://www.facebook.com/', bgColor:'black'},
    {id:4, text:'OgAds', link: 'https://www.facebook.com/', bgColor:'yellow'},
    {id:5, text:'Nexussyner', link: 'https://www.facebook.com/', bgColor:'blue'},
    {id:6, text:'MyLead', link: 'https://www.facebook.com/', bgColor:'orange'},
    {id:7, text:'PIN-UP Partners', link: 'https://www.facebook.com/', bgColor:'red'},
    {id:8, text:'AdsEmpire', link: 'https://www.facebook.com/', bgColor:'yellowgreen'},
    {id:9, text:'Zeydoo', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:10, text:'Lospollos', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:11, text:'Affroyal', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:12, text:'Trafee', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:13, text:'PropellerAds', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:14, text:'Golden Goose', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:15, text:'Adsterra', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:16, text:'Terabox', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:17, text:'Monetag', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:18, text:'RichAds', link: 'https://www.facebook.com/', bgColor:'green'},
    {id:19, text:'HilltopAds', link: 'https://www.facebook.com/', bgColor:'green'},
  ]

  return (
    <div className="w-full flex lg:h-screen h-auto flex-col justify-start items-center gap-5 lg:py-0 py-12">
      <div className="bg-yellow-950 sm:w-1/2 w-full rounded-sm text-xl">
        <p className="text-white text-center">
          Best Ad Network For Lead
        </p>
      </div>
      <div className="border border-white rounded-md bg-black  gap-7 p-5 sm:w-1/2 w-full grid  grid-cols-2">
        {
          allLinks && allLinks.map(({id,text,link,bgColor})=> <div className="bg-slate-500 px-4 py-2 rounded-md">
            <Link key={id} href={link}>{text}</Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default ThirdPart;
