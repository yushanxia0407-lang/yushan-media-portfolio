/* Work accounts: participation confirmed by the user, individual posts not located. */
(()=>{
  const screenshot=(src,alt,label,width,height)=>`<div class="account-evidence"><a href="${src}" target="_blank" rel="noopener" aria-label="查看${label}原图"><img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy"></a><p>${label} <a class="evidence-link" href="${src}" target="_blank" rel="noopener">查看原始截图 ↗</a></p></div>`;
  const jinji={
    index:'01',title:'参与教育产品的视频内容制作。',subtitle:'金吉列大学通 / 企业视频号内容实践',type:'工作实作 · 参与部分内容制作',
    lead:'在金吉列工作期间，参与「金吉列大学通」视频号其中部分内容的制作。账号主页作为工作场景与内容方向的证据，展示教育产品在视频号中的表达形式。',
    role:'参与部分视频内容制作（本人确认）',audience:'教育规划、留学与升学咨询相关受众',scope:'个人参与部分作品；截图中的具体单条归属暂未定位',
    sections:[
      {id:'planning',title:'策划：教育话题如何进入用户视野',html:`<p>主页截图可见升学选择、留学注意事项、新加坡生活与教育分流等主题，采用出镜讲解、场景介绍和文字封面组织内容。</p><div class="case-process"><div><h4>受众问题 / 教育选择</h4><p>账号可见主题从具体困惑切入，如升学路径和留学选择。</p></div><div><h4>内容呈现 / 讲解与场景</h4><p>人物讲解、生活场景和封面文字构成不同内容入口。</p></div></div><p class="source-note">以上是对账号可见内容的策划回看。本人参与制作其中几条，但当前无法定位具体单条，不将截图中每一条作品的策划归属写为个人独立完成。</p>`},
      {id:'data',title:'数据：个人参与与账号背景分别记录',html:`<table><thead><tr><th>记录项</th><th>当前信息</th></tr></thead><tbody><tr><td>账号内容量</td><td>截图显示 30 条原创内容，属于账号总量。</td></tr><tr><td>个人制作</td><td>参与其中部分内容制作，准确条数未提供。</td></tr><tr><td>单条表现</td><td>暂未提供可对应个人制作作品的播放、互动或线索数据。</td></tr></tbody></table><p class="source-note">截图提供于 2026.10.12，实际拍摄时间未标明。账号总量用于说明项目背景，个人成果以已确认的制作参与为准。</p>`},
      {id:'highlights',title:'亮点：从产品运营到企业内容实践',html:`<ul><li><strong>企业视频号制作参与：</strong>在实际业务工作中参与教育主题视频内容制作。</li><li><strong>产品理解与内容表达连接：</strong>产品运营经历支持对教育服务、用户问题与销售场景的理解。</li><li><strong>多形式传播经历：</strong>与产品海报、直播主持和个人账号作品共同展示图文与视频内容实践。</li></ul>`},
      {id:'evidence',title:'作品证据：账号截图与参与说明',html:screenshot('assets/jinjilie-video-account.png','金吉列大学通视频号主页，显示30条原创内容及教育主题作品','金吉列大学通 / 工作账号截图',1084,864)+`<p class="source-note">本人确认参与制作其中几条。当前以账号截图和参与说明呈现工作经历，暂不提供单条播放入口。</p>`}
    ]
  };
  const netease={
    index:'02',title:'参与考研教育的视频内容制作。',subtitle:'网易实习 / 有道考研备考视频号',type:'实习实作 · 参与部分内容制作',
    lead:'在网易实习期间，参与「有道考研备考」视频号其中部分内容的制作。主页截图保留了官方教育账号的内容场景，作为实习内容实践的项目记录。',
    role:'实习期间参与部分视频内容制作（本人确认）',audience:'考研备考与课程咨询相关受众',scope:'个人参与部分作品；截图中的具体单条归属暂未定位',
    sections:[
      {id:'planning',title:'策划：考研场景中的陪伴与品牌内容',html:`<p>账号简介围绕考研陪伴与课程咨询展开。截图可见考研心愿活动、人物故事、主题活动与团队培训等内容类型，体现教育账号在信息、情绪和活动传播之间的不同表达方式。</p><div class="case-process"><div><h4>受众场景 / 备考过程</h4><p>账号面向考研人，内容场景连接备考需求与情绪体验。</p></div><div><h4>内容类型 / 活动与故事</h4><p>主页可见活动记录和叙事内容，展示官方教育账号的多种内容形式。</p></div></div><p class="source-note">本节是账号内容类型的回顾分析。本人确认制作了其中几条，暂不能逐条对应截图中的内容，不将全部活动或策划写为个人负责。</p>`},
      {id:'data',title:'数据：以已确认的参与范围展示经历',html:`<table><thead><tr><th>记录项</th><th>当前信息</th></tr></thead><tbody><tr><td>账号内容量</td><td>截图显示 99 条原创内容，属于账号总量。</td></tr><tr><td>个人制作</td><td>实习期间参与其中部分内容制作，准确条数未提供。</td></tr><tr><td>单条表现</td><td>暂未提供可对应个人制作作品的播放、互动或转化数据。</td></tr></tbody></table><p class="source-note">账号名称为「有道考研备考」，主页显示官方账号认证。截图提供于 2026.10.12，账号内容量与个人制作数量分别记录。</p>`},
      {id:'highlights',title:'亮点：官方教育账号中的制作经历',html:`<ul><li><strong>有实习内容制作实践：</strong>在网易实习期间参与视频号部分内容制作。</li><li><strong>覆盖不同教育受众：</strong>与当前留学产品工作共同形成面向备考、升学与教育咨询场景的经历。</li><li><strong>具备组织内容的参与经历：</strong>个人表达之外，也有官方教育账号内容制作的工作场景。</li></ul>`},
      {id:'evidence',title:'作品证据：账号截图与参与说明',html:screenshot('assets/netease-video-account.png','有道考研备考视频号主页，显示官方认证、99条原创内容及视频封面','有道考研备考 / 网易实习账号截图',1110,859)+`<p class="source-note">该截图用于展示实习参与的账号与内容场景；个人制作的具体单条暂未定位。</p>`}
    ]
  };
  const article={
    index:'03',title:'研究生会公众号推文写作。',subtitle:'研究生会公众号 / 文章撰写',type:'写作实作 · 作者本人确认',
    lead:'研究生阶段为研究生会公众号撰写推文，保留微信原文链接作为公开作品入口。与视频号、个人图文实践一起，展示不同传播形式中的内容经历。',
    role:'推文撰写（作者本人确认）',audience:'研究生会公众号读者',scope:'已提供原文链接；文章正文与阅读数据暂未读取',
    sections:[
      {id:'planning',title:'策划：组织公众号的文章表达',html:`<p>这是一项面向研究生会公众号读者的写作实践，当前确认的个人工作是推文撰写。文章的具体选题、结构与配图方式以原文为准。</p><p class="source-note">本次未能直接读取微信正文，因此不补写未经核验的文章主题或策划过程。作品入口保留原始链接。</p>`},
      {id:'data',title:'数据：保留原文入口与作者信息',html:`<table><thead><tr><th>记录项</th><th>当前信息</th></tr></thead><tbody><tr><td>发布渠道</td><td>此前研究生会的公众号（本人说明）。</td></tr><tr><td>个人贡献</td><td>本篇推文撰写。</td></tr><tr><td>阅读与互动</td><td>阅读量、点赞、分享与发布时间暂未提供。</td></tr></tbody></table>`},
      {id:'highlights',title:'亮点：组织传播中的文字写作经历',html:`<ul><li><strong>有原文作品入口：</strong>招聘方可通过微信链接查看文章。</li><li><strong>有明确的个人贡献：</strong>文章撰写由作者本人确认。</li><li><strong>传播形式覆盖更完整：</strong>公众号文章、阅读图文和视频制作参与，共同形成多形式内容经历。</li></ul>`},
      {id:'evidence',title:'作品入口：阅读公众号原文',html:`<div class="article-entry"><p class="eyebrow">STUDENT UNION / WECHAT ARTICLE</p><h4>研究生会公众号推文</h4><p>作者：夏羽珊 · 推文撰写</p><a class="button button-dark" href="https://mp.weixin.qq.com/s/9PGDgTZ73GIcbvMPqscjcw" target="_blank" rel="noopener">阅读公众号原文 <span aria-hidden="true">↗</span></a><p class="source-note">原文链接由本人提供。微信可能要求在其环境中打开。</p></div>`}
    ]
  };
  const existing=window.PORTFOLIO_CASES;
  const order={jinji,netease,article,xhs:existing.xhs,douyin:existing.douyin,product:existing.product,live:existing.live,dashboard:existing.dashboard,concept:existing.concept};
  Object.values(order).forEach((c,i)=>c.index=String(i+1).padStart(2,'0'));
  window.PORTFOLIO_CASES=order;
  const roles=window.PORTFOLIO_ROLES;
  roles.production.intro='企业视频号的部分内容制作、公众号写作与个人账号实作，构成新媒体实践的三个场景。内容表达之外，也有直播与经营数据复盘经验。';
  roles.production.rows.unshift(
    ['企业视频号制作','在金吉列参与视频号部分内容制作，企业账号截图与个人参与范围分别说明。','本人确认','jinji','金吉列视频号'],
    ['教育账号实习','网易实习期间参与有道考研视频号部分内容制作。','本人确认','netease','网易实习视频号'],
    ['公众号写作','为研究生会公众号撰写推文，保留微信原文入口。','本人确认','article','公众号原文']
  );
  roles.planning.intro='公众号文章、个人阅读图文和企业视频号制作参与，展示文字与视频两类内容经历。作品中明确区分个人撰写、团队制作参与及基于截图的策划回看。';
  roles.planning.rows.unshift(
    ['组织公众号写作','研究生会公众号推文撰写，有原文链接可查看。','本人确认','article','公众号文章'],
    ['企业内容制作','参与金吉列教育主题视频号的部分内容制作。','本人确认','jinji','工作内容实践'],
    ['教育内容实习','参与网易实习期间官方考研账号的部分视频内容制作。','本人确认','netease','实习内容实践']
  );
})();
