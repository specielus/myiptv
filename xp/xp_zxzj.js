//www.dm55.cc
{
  "ua": "",
  "homeUrl": "http://www.88dmw.com",
  "cateManual": {
    "新番连载": "1", 
    "完结日漫": "3",
    "热门国漫": "4",
    "剧场动漫": "16"
  },
  
// Home Summary ================================================  
  "homeVodNode": "//div[@class='cn2_l']/div[@class='c2_contact']/div[@class='c1_l_wap_contact']/ul/li",
  "homeVodName": "/a/@title",
  "homeVodId": "/a/@href",
  "homeVodIdR": "/detail/(\\w+).html",
  "homeVodImg": "/a/img/@src",
  "homeVodMark": "/p[@class='time']/font/text()",
  
// Category Summary ================================================  
  "cateUrl": "http://www.88dmw.com/vod-list-id-{cateId}-pg-{catePg}-order--by--class--year-{year}-letter--area--lang-.html",
  "cateVodNode": "//div[@class='list3_cn_box']/div[@class='cn_box2']",
  "cateVodName": "/div/div/a/@title",
  "cateVodId": "/div/div/a/@href",
  "cateVodIdR": "/detail/(\\w+).html",
  "cateVodImg": "/div/div/a/img/@src",
  "cateVodMark": "/ul[@class='list_20']/li[2]/span/font/text()",

// Category Details ================================================    
  "dtUrl": "http://www.88dmw.com/detail/{vid}.html",
  "dtNode": "//div[(@class='warp')]",
  "dtName": "//div[@class='info-title']/h1/text()",
  "dtImg": "//div[@class='info-box']/div[@class='o_list']/div[@class='o_big_img_bg_b']/img/@src",
  "dtCate": "//div[@class='o_r_contact']/ul/li[8]/label/font[1]/text()",
  "dtYear": "//div[@class='o_r_contact']/ul/li[6]/text()",
  "dtArea": "//div[@class='o_r_contact']/ul/li[4]/label/text()",
  "dtActor": "//div[@class='o_r_contact']/ul/li[3]/span/text()",  
  "dtMark": "//div[@class='o_r_contact']/ul/li[7]/label/font[1]/text()", 
  "dtDirector": "//div[@class='o_r_contact']/ul/li[2]/span/text()",
  "dtDesc": "",

// Playlist =====================================================     
//  "dtFromNode": "//div[contains(@class,'from-tabs')]/label[contains(text(),'线路') or contains(text(),'云')]",  
  "dtFromNode": "//div[contains(@class,'from-tabs')]/label",
  "dtFromName": "/text()"{
  "ua": "",
  "homeUrl": "https://www.zxzjtv.com",
  "dcVipFlag": "true",
    "pCfgJs": "https://www.zxzjtv.com/static/js/playerconfig.js",
    "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
    "dcShow2Vip": {},
    "dcPlayUrl": "true",
  "cateNode": "//ul[contains(@class,'stui-header__menu')]/li/a[contains(@href, 'list')]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/list/(\\d+).html",
  "cateManual":{},
  "homeVodNode": "//a[contains(@class,'stui-vodlist__thumb')]",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/detail/(\\w+).html",
  "homeVodImg": "/@data-original",
  "homeVodImgR": "(http\\S+)",
  "homeVodMark": "/span[contains(@class,'pic-text')]/text()",
  "cateUrl": "https://www.zxzjtv.com/vodshow/{cateId}-{area}-{by}--{lang}----{catePg}---{year}.html",
  "cateVodNode": "//a[contains(@class,'stui-vodlist__thumb')]",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/detail/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodImgR": "(http\\S+)",
  "cateVodMark": "/span[contains(@class,'pic-text')]/text()",
  "dtUrl": "https://www.zxzjtv.com/detail/{vid}.html",
  "dtNode": "//body",
  "dtName": "//div[@class='stui-content__thumb']/a[contains(@class,'pic')]/@title",
  "dtNameR": "",
  "dtImg": "//div[@class='stui-content__thumb']/a[contains(@class,'pic')]/img/@data-original",
  "dtImgR": "(http\\S+)",
  "dtCate": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '类型')]/following-sibling::*/text()",
  "dtCateR": "",
  "dtArea": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '地区')]/following-sibling::*/text()",
  "dtAreaR": "",
  "dtYear": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '年份')]/following-sibling::*/text()",
  "dtYearR": "",
  "dtActor": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '主演')]/following-sibling::*/text()",
  "dtActorR": "",
  "dtDirector": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '导演')]/following-sibling::*/text()",
  "dtDirectorR": "",
  "dtMark": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '更新')]/following-sibling::*/text()",
  "dtMarkR": "",
  "dtDesc": "//span[@class='detail-sketch']/text()",
  "dtDescR": "",
  "dtFromNode":"//div[@class='stui-vodlist__head']/h3[contains(text(),'播放')]",
  "dtFromName": "/text()",
  "dtUrlNode": "//ul[contains(@class, 'stui-content__playlist clearfix')]",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/video/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "https://www.zxzjtv.com/video/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://www.zxzjtv.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": "",
  "filter": {
    "1": [
      {
        "key": "class",
        "name": "剧情",
        "value": [
          {"n": "全部剧情","v": ""},
          {"n": "喜剧","v": "喜剧"},
          {"n": "爱情","v": "爱情"},
          {"n": "恐怖","v": "恐怖"},
          {"n": "动作","v": "动作"},
          {"n": "科幻","v": "科幻"},
          {"n": "剧情","v": "剧情"},
          {"n": "战争","v": "战争"},
          {"n": "警匪","v": "警匪"},
          {"n": "犯罪","v": "犯罪"},
          {"n": "动画","v": "动画"},
          {"n": "奇幻","v": "奇幻"},
          {"n": "冒险","v": "冒险"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "大陆","v": "大陆"},
          {"n": "香港","v": "香港"},
          {"n": "台湾","v": "台湾"},        
          {"n": "欧美","v": "欧美"},
          {"n": "韩国","v": "韩国"},
          {"n": "日本","v": "日本"},
          {"n": "泰国","v": "泰国"},
          {"n": "印度","v": "印度"},
          {"n": "俄罗斯","v": "俄罗斯"},
          {"n": "其他","v": "其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"},
          {"n": "2011","v": "2011"},
          {"n": "2010","v": "2010"},
          {"n": "2009","v": "2009"},
          {"n": "2008","v": "2008"},
          {"n": "2007","v": "2007"},
          {"n": "2006","v": "2006"},
          {"n": "2005","v": "2005"},
          {"n": "2004","v": "2004"},
          {"n": "2003","v": "2003"},
          {"n": "2002","v": "2002"},
          {"n": "2001","v": "2001"},
          {"n": "2000","v": "2000"}
        ]
      }
    ],
    "2": [
      {
        "key": "class",
        "name": "剧情",
        "value": [
          {"n": "全部剧情","v": ""},
          {"n": "剧情","v": "剧情"},
          {"n": "喜剧","v": "喜剧"},
          {"n": "爱情","v": "爱情"},
          {"n": "动作","v": "动作"},
          {"n": "悬疑","v": "悬疑"},
          {"n": "恐怖","v": "恐怖"},
          {"n": "奇幻","v": "奇幻"},
          {"n": "惊悚","v": "惊悚"},
          {"n": "犯罪","v": "犯罪"},
          {"n": "科幻","v": "科幻"},
          {"n": "音乐","v": "音乐"},
          {"n": "其他","v": "其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"},
          {"n": "2011","v": "2011"}
        ]
      }
    ],
    "3": [
      {
        "key": "class",
        "name": "剧情",
        "value": [
          {"n": "全部剧情","v": ""},
          {"n": "剧情","v": "剧情"},
          {"n": "喜剧","v": "喜剧"},
          {"n": "爱情","v": "爱情"},
          {"n": "动作","v": "动作"},
          {"n": "悬疑","v": "悬疑"},
          {"n": "恐怖","v": "恐怖"},
          {"n": "奇幻","v": "奇幻"},
          {"n": "惊悚","v": "惊悚"},
          {"n": "犯罪","v": "犯罪"},
          {"n": "科幻","v": "科幻"},
          {"n": "音乐","v": "音乐"},
          {"n": "其他","v": "其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"},
          {"n": "2011","v": "2011"}
        ]
      }
    ],
    "4": [
      {
        "key": "class",
        "name": "剧情",
        "value": [
          {"n": "全部剧情","v": ""},
          {"n": "剧情","v": "剧情"},
          {"n": "喜剧","v": "喜剧"},
          {"n": "爱情","v": "爱情"},
          {"n": "动作","v": "动作"},
          {"n": "悬疑","v": "悬疑"},
          {"n": "恐怖","v": "恐怖"},
          {"n": "奇幻","v": "奇幻"},
          {"n": "惊悚","v": "惊悚"},
          {"n": "犯罪","v": "犯罪"},
          {"n": "科幻","v": "科幻"},
          {"n": "音乐","v": "音乐"},
          {"n": "其他","v": "其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"},
          {"n": "2011","v": "2011"}
        ]
      }
    ],
    "5": [
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"},
          {"n": "2011","v": "2011"}
        ]
      }
    ],
    "6": [
      {
        "key": "class",
        "name": "剧情",
        "value": [
          {"n": "全部剧情","v": ""},
          {"n": "情感","v": "情感"},
          {"n": "科幻","v": "科幻"},
          {"n": "热血","v": "热血"},
          {"n": "推理","v": "推理"},
          {"n": "搞笑","v": "搞笑"},
          {"n": "冒险","v": "冒险"},
          {"n": "萝莉","v": "萝莉"},
          {"n": "校园","v": "校园"},
          {"n": "动作","v": "动作"},
          {"n": "机战","v": "机战"},
          {"n": "运动","v": "运动"},
          {"n": "战争","v": "战争"},
          {"n": "少年","v": "少年"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "国产","v": "国产"},
          {"n": "日本","v": "日本"},
          {"n": "欧美","v": "欧美"},
          {"n": "其他","v": "其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"},
          {"n": "2011","v": "2011"}
        ]
      }
    ]
  }
}
  "dtFromNameR": "",
//  "dtUrlNode": "//div[contains(@class,'current-tab')]",
  "dtUrlNode": "//div[contains(@class,'tabs-list')]",
  "dtUrlSubNode": "/div/ul/li/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/play/(\\S+).html",
  "dtUrlName": "/text()",
  "playUrl": "http://www.88dmw.com/play/{playUrl}.html",
  "playUa": "",
  
// Search Results ================================================     
  "searchUrl": "http://www.88dmw.com/index.php?m=vod-search-wd-{wd}",
  "scVodNode": "//div[@class='list3_cn_box']/div[@class='cn_box2']",
  "scVodName": "/div/div/a/@title",
  "scVodId": "/div/div/a/@href",
  "scVodIdR": "/detail/(\\w+).html",
  "scVodImg": "/div/div/a/img/@src",
  "scVodMark": "/ul[@class='list_20']/li[2]/span/font/text()",
  
// Filters =======================================================
    "filter": {
      "1": [
        {
          "key": "year",
          "name": "年份",
          "value": [           
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"},
            {"n": "2007","v": "2007"},
            {"n": "2006","v": "2006"},
            {"n": "2005","v": "2005"},            
            {"n": "2004","v": "2004"}
          ]
        }
      ],      
      "3": [
        {
          "key": "year",
          "name": "年份",
          "value": [           
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},              
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"},
            {"n": "2007","v": "2007"},
            {"n": "2006","v": "2006"},
            {"n": "2005","v": "2005"},            
            {"n": "2004","v": "2004"}
          ]
        }
      ],
      "4": [
        {
          "key": "year",
          "name": "年份",
          "value": [            
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},              
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"},
            {"n": "2007","v": "2007"},
            {"n": "2006","v": "2006"},
            {"n": "2005","v": "2005"},            
            {"n": "2004","v": "2004"}
          ]
        }
      ],
      "16": [
        {
          "key": "year",
          "name": "年份",
          "value": [        
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},              
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"},
            {"n": "2007","v": "2007"},
            {"n": "2006","v": "2006"},
            {"n": "2005","v": "2005"},            
            {"n": "2004","v": "2004"}
          ]
        }
      ]
    }
  
}
