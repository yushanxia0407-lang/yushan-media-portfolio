/* Presentation hierarchy only: retain all evidence and contribution boundaries. */
(()=>{
  const c=window.PORTFOLIO_CASES;
  const keys=['xhs','live','product','article','jinji','netease','douyin','dashboard','concept'];
  window.PORTFOLIO_CASES=Object.fromEntries(keys.map((key,i)=>{c[key].index=String(i+1).padStart(2,'0');return [key,c[key]]}));
  c.xhs.summaryFacts=[['14,828','单篇阅读'],['2,160','点赞'],['662','收藏']];
  c.live.summaryFacts=[['2,405','场观'],['41','新增粉丝'],['7','线索']];
  c.product.summaryFacts=[['信息提炼','内容结构'],['文案修订','价值表达'],['AI 协同','视觉迭代']];
  const roles=window.PORTFOLIO_ROLES;
  roles.production.intro='以内容表达、视频制作参与、直播沟通和数据复盘为核心，以下作品分别提供对应证据。';
  roles.production.rows=[
    ['图文选题与表达','个人阅读笔记有明确主题与单篇阅读、互动记录。','已有实作','xhs','阅读图文案例'],
    ['企业视频制作','在金吉列制作部分视频号内容；个人贡献范围已注明。','本人确认','jinji','企业视频号'],
    ['直播沟通与承接','直播主持与产品解释，保留场观、关注和线索记录。','已有经验','live','直播复盘'],
    ['内容与 AI 协同','产品海报的信息结构、文案修订和 AI 视觉反馈。','已有经验','product','海报内容案例'],
    ['数据分析与复盘','经营看板中的指标口径、变化解释与归因路径。','可迁移','dashboard','经营分析案例']
  ];
  roles.production.footnote='账号增长周期、投放与流量归因尚待补齐；现有数据按各项目的实际记录展示。';
  roles.planning.intro='从阅读选题、产品信息到组织写作，展示内容策划中最直接的表达与制作经历。';
  roles.planning.rows=[
    ['选题与标题包装','以阅读主题和个人感受组织标题与图文入口。','已有实作','xhs','阅读选题案例'],
    ['产品价值表达','明确受众，梳理主标题、服务亮点与信息层级。','已有经验','product','产品内容案例'],
    ['公众号文章写作','研究生会公众号推文撰写，保留微信原文入口。','本人确认','article','公众号文章'],
    ['视频内容制作','网易实习期间制作官方考研账号的部分内容。','本人确认','netease','实习视频号']
  ];
  roles.planning.footnote='视频制作的单条归属与过程材料暂未定位；内容计划作为补充方案保留在更多作品中。';
})();
