/* Personal account evidence, transcribed from the user's supplied screenshots. */
(()=>{
  const gallery=(items)=>`<div class="evidence-gallery">${items.map(([src,alt,label,width,height])=>`<figure><a href="${src}" target="_blank" rel="noopener" aria-label="查看${label}原图"><img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy"></a><figcaption>${label} <a href="${src}" target="_blank" rel="noopener">查看原图 ↗</a></figcaption></figure>`).join('')}</div>`;
  const xhs={
    index:'01',title:'把阅读感受，变成可分享的内容。',subtitle:'个人小红书 / 读书分享、标题表达与图文内容',type:'个人实作 · 截图提供于 2026.10.12',
    lead:'个人账号「球球你了我真的开看了」围绕读书分享发布图文。其中《会被波伏娃的内核晒伤》留下了单篇阅读 14,828、点赞 2,160、收藏 662 的结果记录。',
    role:'个人账号内容整理、选题与发布',audience:'阅读与女性成长兴趣用户（由内容主题推定）',scope:'账号与单篇截图；没有增长周期、流量来源或转化记录',
    sections:[
      {id:'planning',title:'策划：从文学片段，到一个情绪入口',html:`<p>账号简介是“读书分享”，主页可见文学摘录、阅读记录与女性成长相关选题。代表笔记把波伏娃作品中的表达与“内核晒伤”这一标题连接起来，采用文本图片承载内容。</p><div class="case-process"><div><h4>选题 / 阅读与女性成长</h4><p>以具体作者和书籍为线索，让阅读内容具有明确的主题入口。</p></div><div><h4>标题 / 用感受组织表达</h4><p>《会被波伏娃的内核晒伤》用个人感受连接阅读内容，比单独呈现书名更有情绪辨识度。</p></div><div><h4>形式 / 文字图文</h4><p>截图可见摘录、拍书页和文字卡片等形式，突出文本阅读与内容整理。</p></div><div><h4>发布 / 保留作者与出处</h4><p>代表作品标明波伏娃与书名；展示的是阅读选题与传播表达，不将原著文字写成个人原创。</p></div></div><p class="source-note">本节为基于已发布作品的策划回看；尚未收到当时的策划稿，不将回顾分析当作已经验证的增长策略。</p>`},
      {id:'data',title:'数据：账号累计与单篇结果分别看',html:`<div class="case-evidence"><div><strong>73</strong><span>账号粉丝<br>主页截图</span></div><div><strong>5,172</strong><span>账号获赞与收藏<br>平台合并口径</span></div><div><strong>14,828</strong><span>代表笔记阅读<br>2025.05.20 发布</span></div><div><strong>2,160</strong><span>代表笔记点赞</span></div><div><strong>662</strong><span>代表笔记收藏</span></div><div><strong>43</strong><span>代表笔记分享<br>另有 6 条评论</span></div></div><table><thead><tr><th>作品</th><th>发布日期</th><th>截图结果</th></tr></thead><tbody><tr><td>会被波伏娃的内核晒伤</td><td>2025.05.20</td><td>阅读 14,828 / 赞 2,160 / 藏 662 / 评论 6 / 分享 43</td></tr><tr><td>我们选择尖叫</td><td>2025.05.22</td><td>阅读 641 / 赞 7 / 藏 1 / 评论 0 / 分享 2</td></tr></tbody></table><p class="source-note">数据为用户提供截图中的记录，截图提供日为 2026.10.12，截图实际拍摄时间未标明。账号累计数据与单篇数据不相加；点赞、收藏不等于独立互动人数；粉丝数不是净增粉丝。</p>`},
      {id:'highlights',title:'亮点：选题辨识度与收藏价值',html:`<ul><li><strong>有明确的内容主题：</strong>围绕读书分享展开，作品之间具备可辨识的阅读场景。</li><li><strong>标题带有个人表达：</strong>将原著内容转化为可进入的情绪话题，体现选题与表达能力。</li><li><strong>有单篇结果证据：</strong>2,160 点赞、662 收藏展示了该篇内容获得的具体反馈；用户评论中也可见对勇气与自我成长的共鸣。</li><li><strong>能连接出版与知识内容：</strong>展示文本筛选、作者出处意识、内容包装与阅读表达。</li></ul><div class="case-callout">下一步可验证：相似选题能否持续带来收藏和关注？目前没有该篇新增粉丝或流量来源，不能把单篇阅读归因到账号涨粉。</div>`},
      {id:'evidence',title:'作品与截图：可查看原图',html:gallery([
        ['assets/xhs-account.png','个人小红书主页：73 粉丝、5172 获赞与收藏，简介读书分享','小红书主页',1630,759],
        ['assets/xhs-note-data.png','两篇小红书笔记的数据列表，代表笔记阅读14828、点赞2160、收藏662','笔记数据列表',1250,581],
        ['assets/xhs-note-detail.png','会被波伏娃的内核晒伤的笔记内容及评论截图','代表笔记与评论',1199,739],
        ['assets/xhs-read-milestone.png','小红书历史里程碑卡：总阅读量破1万','历史阅读里程碑',900,1200],
        ['assets/xhs-engagement-milestone.png','小红书历史里程碑卡：总赞与收藏破1000','历史互动里程碑',900,1200]
      ])+`<p class="source-note">里程碑卡是历史阈值记录，不替代主页截图中的累计数据。卡片中的“同龄创作者”比较为平台提示，统计依据未提供，不据此宣称行业排名。</p>`}
    ]
  };
  const douyin={
    index:'02',title:'让个人表达，形成可辨识的内容。',subtitle:'个人抖音 / 个人出镜、日常场景与作品发布',type:'个人实作 · 截图提供于 2026.10.12',
    lead:'个人账号「2000伏特奶公主」已展示 23 条作品，主页记录 229 粉丝与 4,211 获赞。现有截图可见个人出镜、日常场景与文字表达，补充了我的个人内容实践证据。',
    role:'个人账号出镜与作品发布',audience:'个人生活与表达兴趣用户（由作品形式推定）',scope:'主页与播放截图；原片与制作过程待后续补充',
    sections:[
      {id:'planning',title:'策划：从日常场景，到个人表达',html:`<p>主页截图可见餐饮、书店、户外、健身等日常场景，作品以个人出镜和文字表达为主。封面之间呈现相近的人物形象，形成个人账号的视觉连续性。</p><div class="case-process"><div><h4>素材 / 日常场景</h4><p>使用可持续取得的生活场景作为内容素材，体现个人表达实践。</p></div><div><h4>呈现 / 人物与文案</h4><p>个人出镜与文字标题共同构成作品入口；完整脚本尚未提供。</p></div><div><h4>账号 / 作品积累</h4><p>主页显示 23 条作品，已经形成可查看的发布记录。</p></div><div><h4>回看 / 逐条核对表现</h4><p>用截图中的播放记录识别值得进一步查看的作品；原片与后台明细补齐后再讨论具体制作动作。</p></div></div><p class="source-note">本节是对主页可见内容的回顾分析；未提供受众研究、正式策划稿或拍摄剪辑流程，不补写未经确认的制作职责。</p>`},
      {id:'data',title:'数据：账号快照与可见播放记录',html:`<div class="case-evidence"><div><strong>229</strong><span>账号粉丝<br>主页截图</span></div><div><strong>4,211</strong><span>账号获赞<br>平台主页口径</span></div><div><strong>23</strong><span>已展示作品</span></div><div><strong>6,278</strong><span>截图可见单条播放</span></div><div><strong>4,225</strong><span>另一条作品播放<br>截图可见</span></div><div><strong>2,705</strong><span>另一条作品播放<br>截图可见</span></div></div><p class="source-note">数据按用户提供主页截图记录；提供日为 2026.10.12，截图拍摄时间未标明。播放可能包含重复观看，粉丝为账号快照，不作为周期净增数据。</p>`},
      {id:'highlights',title:'亮点：个人出镜与跨平台内容实践',html:`<ul><li><strong>有实际发布记录：</strong>主页作品与播放记录能够直接核验，不以计划代替个人实作。</li><li><strong>有个人出镜经验：</strong>人物表达与日常场景形成可辨识的个人内容风格。</li><li><strong>与小红书形成形式互补：</strong>抖音侧展示个人出镜与作品发布，小红书侧展示阅读图文与主题表达。</li><li><strong>可以进一步补齐制作证据：</strong>后续接入原片、脚本与分工，具体呈现选题、拍摄、剪辑和发布过程。</li></ul><div class="case-callout">当前可证明：个人账号发布、出镜实践及截图中的结果。持续增长、视频制作细节与投放效果仍需要更多材料。</div>`},
      {id:'evidence',title:'账号截图：完整保留原始记录',html:gallery([
        ['assets/douyin-account.png','个人抖音账号2000伏特奶公主，229粉丝、4211获赞、23条作品及作品播放记录','抖音主页与作品',878,730]
      ])+`<p class="source-note">当前未提供账号原链接和视频原文件，因此本版展示账号截图与结果记录，后续材料到齐后再加入播放入口。</p>`}
    ]
  };
  const current=window.PORTFOLIO_CASES;
  current.product.index='03';current.live.index='04';current.dashboard.index='05';current.concept.index='06';
  current.live.sections[0].title='数据：单场直播的结果记录';
  current.product.sections[0].title='策划：先让受众看懂';
  current.product.sections[2].title='数据与作品：过程稿和修改记录';
  current.product.sections[3].title='亮点：信息提炼与 AI 视觉协同';
  current.concept.sections[3].html=current.concept.sections[3].html.replace('没有账号主页、已发布样本或 90 天增长结果','该 AI 内容方向尚未提供专门账号主页、已发布样本或 90 天增长结果');
  window.PORTFOLIO_CASES={xhs,douyin,product:current.product,live:current.live,dashboard:current.dashboard,concept:current.concept};
  const roles=window.PORTFOLIO_ROLES;
  roles.production.intro='以个人账号实作、产品内容和直播沟通为切入点：小红书有读书图文与单篇结果，抖音有出镜作品与发布记录，同时具备经营数据复盘与 AI 协同经验。';
  roles.production.rows=[
    ['图文与选题表达','阅读分享账号与代表笔记：14,828 阅读、2,160 点赞、662 收藏。','已有实作','xhs','小红书案例'],
    ['个人账号与出镜','抖音主页：23 条作品、229 粉丝、4,211 获赞；原片与制作分工待补。','已有实作','douyin','抖音案例'],
    ['产品内容与 AI 协同','从产品信息提炼受众与价值，迭代海报文案及视觉。','已有经验','product','产品内容案例'],
    ['直播与用户沟通','直播主持与产品解释；保留单场场观、关注与线索记录。','已有经验','live','直播复盘案例'],
    ['数据复盘','经营看板的指标口径与归因路径，可迁移到内容数据分析。','可迁移','dashboard','数据分析案例'],
    ['周期增长与投放','已有账号快照；增长时间线、投放记录与流量归因仍待补。','待补证据','concept','后续验证计划']
  ];
  roles.planning.intro='阅读图文、个人出镜作品和产品海报构成不同内容形式的实践证据。每个案例区分可见作品、数据记录、策划回看与尚待补齐的制作过程。';
  roles.planning.rows=[
    ['主题与标题策划','从文学阅读中选择片段，以个人感受组织标题与图文入口。','已有实作','xhs','阅读内容案例'],
    ['个人内容表达','主页可见不同生活场景的出镜作品，形成个人表达实践。','已有实作','douyin','个人表达案例'],
    ['产品信息梳理','明确受众，组织主标题、服务亮点与咨询入口。','已有经验','product','产品文案案例'],
    ['直播口头表达','产品理解、直播主持与基于结果记录的复盘。','已有经验','live','直播内容案例'],
    ['栏目与内容系统','设计 AI 职场内容的栏目、制作流程和评估节奏。','方案待验证','concept','栏目企划计划'],
    ['视频制作流程','已提供账号截图；脚本、原片与拍摄剪辑职责尚待补充。','待补证据','douyin','当前作品证据']
  ];
})();
