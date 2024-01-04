import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles =[
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Hamas deputy leader Saleh al-Arouri killed in Beirut blast - BBC.com",
            "description": "Saleh al-Arouri is the most senior Hamas figure killed since the Israel-Hamas war began in October.",
            "url": "https://www.bbc.com/news/world-middle-east-67866346",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1D73/production/_132193570_ruinafp.jpg",
            "publishedAt": "2024-01-03T09:23:11Z",
            "content": "By Raffi Berg &amp; Graeme BakerBBC News\r\nSaleh al-Arouri (left) masterminded attacks in the occupied West Bank\r\nIsrael has insisted the assassination of a Hamas leader in Beirut was not an attack on… [+6145 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Samantha Subin",
            "title": "Stock futures fall overnight after Nasdaq registers worst day since October: Live updates - CNBC",
            "description": "The tech-heavy index slid to begin the new year on Tuesday.",
            "url": "https://www.cnbc.com/2024/01/02/stock-market-today-live-updates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107350102-1703094182710-Traders-TF-Photo-ACJ-20231220-PRESS-1.jpg?v=1703094231&w=1920&h=1080",
            "publishedAt": "2024-01-03T08:40:00Z",
            "content": "Stock futures are little changed Wednesday after the Nasdaq Composite on Tuesday registered its worst session since October.\r\nFutures tied to the Dow Jones Industrial Average slipped 23 points, or 0.… [+2502 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "COLLIN BINKLEY, MORIAH BALINGIT",
            "title": "Harvard president quits: Claudine Gay resignation highlights new conservative weapon - The Associated Press",
            "description": "The downfall of Harvard’s president has elevated allegations of plagiarism as a possible new weapon in conservative attacks on higher education. President Claudine Gay’s resignation Tuesday followed weeks of mounting accusations that she lifted language from …",
            "url": "https://apnews.com/article/harvard-president-plagiarism-claudine-gay-3b048da1f2ee17b5edec3680b5828e8f",
            "urlToImage": "https://dims.apnews.com/dims4/default/9393b0a/2147483647/strip/true/crop/3139x1766+0+164/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fcb%2F33d8a941fb0a37051564855e903b%2Fc4baf86246ab4e9e9887e633d61bd9cb",
            "publishedAt": "2024-01-03T06:41:00Z",
            "content": "WASHINGTON (AP) The downfall of Harvards president has elevated the threat of unearthing plagiarism, a cardinal sin in academia, as a possible new weapon in conservative attacks on higher education.\r… [+7716 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Axios",
            "title": "Trump appeals ruling barring him from primary ballot in Maine - Axios",
            "description": "Saleh al-Arouri is the most senior Hamas figure killed since the Israel-Hamas war began in Octobe",
            "url": "https://www.axios.com/2024/01/02/trump-appeal-maine-colorado-14th-amendment",
            "urlToImage": "https://images.axios.com/I3Txjmsd0FxiJ4VlJOAZYmvpZ78=/0x350:6000x3725/1920x1080/2024/01/02/1704220212664.jpg?w=1920",
            "publishedAt": "2024-01-03T06:32:29Z",
            "content": null
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Alexa Philippou",
            "title": "Caitlin Clark's logo 3-pointer leads Iowa past Michigan St. - ESPN",
            "description": "Reigning national player of the year Caitlin Clark added to her highlight reel on Tuesday night, hitting a buzzer-beating 3-pointer from the fringe of Iowa's half-court logo to secure a 76-73 victory for the host Hawkeyes over the Michigan State Spartans.",
            "url": "https://www.espn.com/womens-college-basketball/story/_/id/39232582/caitlin-clark-logo-3-pointer-leads-iowa-michigan-st",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0103%2Fr1273026_1296x729_16%2D9.jpg",
            "publishedAt": "2024-01-03T05:15:00Z",
            "content": "Reigning national player of the year Caitlin Clark added to her highlight reel Tuesday night, hitting a buzzer-beating 3-pointer from the fringe of Iowa's half-court logo to secure a 76-73 victory fo… [+2874 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Alexander Nicholson",
            "title": "Stock Market Today: Dow, S&P Live Updates for January 3 - Bloomberg",
            "description": "Bonds extended their drop as traders braced for a swathe of US data that could show whether bets on interest-rate cuts this year are justified.",
            "url": "https://www.bloomberg.com/news/articles/2024-01-02/stock-market-today-dow-s-p-live-updates",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/igZWTQgO3tMU/v0/1200x675.png",
            "publishedAt": "2024-01-03T04:52:30Z",
            "content": "Bonds extended their drop as traders braced for a swathe of US data that could show whether bets on interest-rate cuts this year are justified.\r\nGovernment debt fell across Europe and US Treasury yie… [+249 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Tesla delivers record Q4 cars, but China's BYD steals top EV spot - Reuters",
            "description": "Saleh al-Arouri is the most senior Hamas figure killed since the Israel-Hamas war began in Octobe",
            "url": "https://www.reuters.com/business/autos-transportation/teslas-fourth-quarter-deliveries-beat-estimates-2024-01-02/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2019/08/21185315/USATSI_11304598.jpg",
            "publishedAt": "2024-01-03T04:35:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sheila Chiang",
            "title": "Shares of Apple suppliers fall in Asia after Barclays downgrades the iPhone maker - CNBC",
            "description": "Shares of Apple suppliers fall in Asia on Wednesday after Barclays downgraded Apple on Tuesday.",
            "url": "https://www.cnbc.com/2024/01/03/shares-of-apple-suppliers-fall-after-barclays-downgrades-iphone-maker.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107353515-1704250803106-gettyimages-1676670101-0j7a2363_ojermvd2.jpeg?v=1704255922&w=1920&h=1080",
            "publishedAt": "2024-01-03T04:18:00Z",
            "content": "Shares of Apple suppliers fell in Asia on Wednesday after Barclays downgraded the iPhone maker on concerns that demand for its products would remain weak in 2024.\r\nTaiwan Semiconductor Manufacturing … [+1945 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "KRUTIKA PATHI, JULHAS ALAM",
            "title": "Sheikh Hasina once fought for democracy in Bangladesh. Her critics say she now threatens it - The Associated Press",
            "description": "The elections in Bangladesh are all about one person: Prime Minister Sheikh Hasina. Analysts predict that since the main opposition party is staying out of the vote Sunday, the 76-year-old leader is practically guaranteed her fifth term in office. Hasina's en…",
            "url": "https://apnews.com/article/bangladesh-elections-sheikh-hasina-opposition-bnp-485da99f50959e6cdf5b11e24fe6efe5",
            "urlToImage": "https://dims.apnews.com/dims4/default/29c20fc/2147483647/strip/true/crop/3679x2069+0+181/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F80%2F95%2F8fa08c62407cad9c1916f951d0b8%2Fda7b7f4d9a2a444c9d003feaa31a2d62",
            "publishedAt": "2024-01-03T04:02:08Z",
            "content": "DHAKA, Bangladesh (AP) Prime Minister Sheikh Hasina was Bangladeshs opposition leader in 2007, when hundreds of troops raided her home and took her to a court in the capital of Dhaka, where she was a… [+10544 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Gabrielle Chung",
            "title": "Rachel Lindsay Admitted She and Bryan Abasolo Lived \"Totally Different Lives\" Before Breakup News - E! NEWS",
            "description": "The Bachelorette's Rachel Lindsay shared insight into the \"ups and downs\" of her relationship with Bryan Abasolo weeks before he filed for divorce to end their four-year marriage.",
            "url": "https://www.eonline.com/news/1392316/rachel-lindsay-admitted-she-and-bryan-abasolo-lived-totally-different-lives-before-breakup-news",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202402/cr_1200x1200-240102174549-GettyImages-1409637774.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2024-01-03T03:41:00Z",
            "content": "The rose-colored glasses are off.\r\nNearly two weeks before Rachel Lindsay's husband Bryan Abasolo filed for divorce, the former The Bachelorette star shared insight into their four-year marriage, adm… [+941 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Tess DeMeyer",
            "title": "Jimmy Kimmel threatens ‘court’ action over Aaron Rodgers’ Epstein allegation - The Athletic",
            "description": "The talk show host has previously made jabs at the quarterback about his stance on vaccines and theories about UFOs.",
            "url": "https://theathletic.com/5175873/2024/01/02/jimmy-kimmel-threatens-court-action-over-aaron-rodgers-epstein-allegation/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/01/02215852/kimmel.jpg",
            "publishedAt": "2024-01-03T03:12:13Z",
            "content": "Jimmy Kimmel threatened New York Jets quarterback Aaron Rodgers with court action Tuesday after Rodgers alleged the late-night talk show hosts name would be included in soon-to-be unsealed informatio… [+1936 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Julia Buckley",
            "title": "How safety rules ‘written in blood’ saved lives in Tokyo plane crash - CNN",
            "description": "The evacuation of 379 people on Japan Airlines flight 516 is no casual miracle, but the result of years of work to hone safety procedures and save lives, experts say.",
            "url": "https://www.cnn.com/2024/01/02/travel/tokyo-plane-crash-safety-rules-analysis-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240102100732-03-haneda-plane-incident-010224.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-01-03T02:59:00Z",
            "content": "Watching the footage of the Japan Airlines collision at Tokyos Haneda airport, it seems miraculous that anyone has emerged unscathed.\r\nYet while, tragically, five of six crew on the Japan Coast Guard… [+10081 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "NASA Captures Sun's Fury: Strongest Solar Flare Since 2017 - SciTechDaily",
            "description": "The Sun emitted a strong solar flare, peaking at 4:55 p.m. EST, on December 31, 2023. NASA’s Solar Dynamics Observatory, which watches the Sun constantly, captured an image of the event. Solar flares are powerful bursts of energy. Flares and solar eruptions c…",
            "url": "https://scitechdaily.com/nasa-captures-suns-fury-strongest-solar-flare-since-2017/",
            "urlToImage": "https://scitechdaily.com/images/Solar-Flare-December-2023.jpg",
            "publishedAt": "2024-01-03T02:52:27Z",
            "content": "NASA’s Solar Dynamics Observatory captured this image of a solar flare – as seen in the bright flash on the far left – on December 31, 2023. The image shows a subset of extreme ultraviolet light that… [+4029 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Shayna Jacobs",
            "title": "Sen. Bob Menendez accused of aiding Qatar in exchange for bribes - The Washington Post",
            "description": "A superseding indictment unsealed Tuesday accuses the New Jersey Democrat of providing assistance to the government of Qatar as well as Egypt.",
            "url": "https://www.washingtonpost.com/national-security/2024/01/02/menendez-qatar-bribery-indictment/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AYERBFMAXWOKH7ALH4GWMUT6QE_size-normalized.jpg&w=1440",
            "publishedAt": "2024-01-03T02:37:00Z",
            "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nNEW YORK Sen. Bob Menendez (D-N.J.) is facing a new set of federal bribery allegations in a superseding indictment unsealed Tuesday th… [+4234 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Times of Israel"
            },
            "author": "The Times of Israel",
            "title": "US slams ‘irresponsible’ calls by Smotrich and Ben Gvir for emigration of Gazans - The Times of Israel",
            "description": "Saleh al-Arouri is the most senior Hamas figure killed since the Israel-Hamas war began in Octobe",
            "url": "https://www.timesofisrael.com/us-slams-irresponsible-calls-by-smotrich-and-ben-gvir-for-emigration-of-gazans/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2019/08/21185315/USATSI_11304598.jpg",
            "publishedAt": "2024-01-03T02:02:33Z",
            "content": null
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Yoolim Lee, Vlad Savov",
            "title": "Samsung Galaxy S24 Unpacked Event to Kickstart Year of AI Phones - Bloomberg",
            "description": "The world’s most prolific smartphone maker is leaning into artificial intelligence as the key to unlocking greater sales this year.",
            "url": "https://www.bloomberg.com/news/articles/2024-01-03/samsung-galaxy-s24-unpacked-event-to-kickstart-year-of-ai-phones",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iekDZ5j2h1Qs/v0/1200x800.jpg",
            "publishedAt": "2024-01-03T01:56:55Z",
            "content": "The worlds most prolific smartphone maker is leaning into artificial intelligence as the key to unlocking greater sales this year.\r\nSamsung Electronics Co. announced it plans to launch its next flags… [+384 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Associated Press",
            "title": "Mickey Mouse horror movies announced as 'Steamboat Willie' enters public domain - MarketWatch",
            "description": "The earliest iteration of Mickey Mouse is on a rampage, barely two days in the public domain.",
            "url": "https://www.marketwatch.com/story/mickey-mouse-horror-movies-announced-as-steamboat-willie-enters-public-domain-1c997232",
            "urlToImage": "https://images.mktw.net/im-66627497/social",
            "publishedAt": "2024-01-03T01:49:00Z",
            "content": "LOS ANGELES The earliest iteration of Mickey Mouse is on a rampage, barely two days in the public domain.Slashed free of Disneys \r\n DIS,\r\n +0.47%\r\ncopyright as of Monday, the iconic character from St… [+2747 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Morik",
            "title": "NFL officiating crew at center of Cowboys-Lions controversy gets crucial Week 18 game - Fox News",
            "description": "The referee crew from Saturday's controversial Cowboys-Lions will be manning a game with playoff implications this Saturday in Baltimore.",
            "url": "https://www.foxnews.com/sports/nfl-officiating-crew-center-cowboys-lions-controversy-gets-crucial-week-18-game",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/01/dan-campell-refs.jpg",
            "publishedAt": "2024-01-03T01:21:00Z",
            "content": "The officiating crew from this past weekend's Cowboys-Lions game has been assigned yet another high-profile game, this one with playoff implications.\r\nBrad Allen and his crew became Public Enemy No. … [+2600 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Joseph Person",
            "title": "NFL fines David Tepper $300K after Panthers owner throws drink at fans in Jacksonville - The Athletic",
            "description": "“I am deeply passionate about this team and regret my behavior on Sunday,” Tepper said in a statement.",
            "url": "https://theathletic.com/5175685/2024/01/02/david-tepper-panthers-fine/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2019/08/21185315/USATSI_11304598.jpg",
            "publishedAt": "2024-01-03T00:14:54Z",
            "content": "The NFL fined Carolina Panthers owner David Tepper $300,000 on Tuesday in response to Tepper throwing a drink at fans near the end of the Panthers 26-0 loss to the Jaguars on Sunday in Jacksonville.\r… [+2198 chars]"
        }];
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/everything?q=tesla&from=2023-12-04&sortBy=publishedAt&apiKey=aa8657647fa6452ba3c85d56f5a2e5c0";
        let data= await fetch(url);
        let parsedata= await data.json();
        console.log(parsedata);
        this.setState({articles:parsedata.articles});
    }
  render() {
    return (
        <div className='container my-auto'>
        <h1>Top HeadLine</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <NewsItems title={!element.title?element.title.slice(0,30):""} discription={element.description?element.description.slice(0,70):""} imageUrl= {element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
