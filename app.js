(()=>{
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
  const cases=window.PORTFOLIO_CASES, roles=window.PORTFOLIO_ROLES;
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dialog=$('#case-dialog');let activeCase=null,returnHash='#work',returnFocus=null;
  function setMenu(open){$('#mobile-nav').hidden=!open;$('.menu-toggle').setAttribute('aria-expanded',String(open));$('.menu-toggle').setAttribute('aria-label',open?'关闭导航':'打开导航');}
  $('.menu-toggle').addEventListener('click',()=>setMenu($('.menu-toggle').getAttribute('aria-expanded')!=='true'));
  $$('#mobile-nav a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && !dialog.open)setMenu(false)});
  $$('.portrait-thumb').forEach((button,index)=>button.addEventListener('click',()=>{
    const image=$('#hero-portrait');image.setAttribute('src',button.dataset.src);image.setAttribute('alt',button.dataset.alt);image.setAttribute('width',button.dataset.width);image.setAttribute('height',button.dataset.height);
    $('#portrait-original').setAttribute('href',button.dataset.src);$('#portrait-link').setAttribute('href',button.dataset.src);
    $$('.portrait-thumb').forEach(b=>{const on=b===button;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
    $('#portrait-status').textContent=`${button.dataset.alt} / ${String(index+1).padStart(2,'0')}`;
  }));
  function renderRole(key,focus=false){
    const role=roles[key];if(!role)return;
    $$('.role-tabs button').forEach(b=>{const selected=b.dataset.role===key;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;if(selected&&focus)b.focus()});
    const panel=$('#role-panel');panel.setAttribute('aria-labelledby',`tab-${key}`);
    panel.innerHTML=`<p class="fit-intro">${escape(role.intro)}</p><table class="fit-table"><thead><tr><th scope="col">岗位要求</th><th scope="col">经验与证据</th><th scope="col">当前状态</th><th scope="col">查看项目</th></tr></thead><tbody>${role.rows.map(r=>`<tr><td>${escape(r[0])}</td><td>${escape(r[1])}</td><td><span class="fit-badge ${r[2].includes('待')?'gap':''}">${escape(r[2])}</span></td><td><a class="evidence-link" href="#case/${r[3]}">${escape(r[4])} ↗</a></td></tr>`).join('')}</tbody></table><p class="fit-footnote">${escape(role.footnote)}</p>`;
  }
  $$('.role-tabs button').forEach(b=>{b.addEventListener('click',()=>renderRole(b.dataset.role));b.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const key=e.key==='Home'?'production':e.key==='End'?'planning':b.dataset.role==='production'?'planning':'production';renderRole(key,true)}})});
  function renderStep(index){const step=window.PORTFOLIO_STEPS[index];if(!step)return;$$('.system-steps button').forEach(b=>{const on=Number(b.dataset.step)===index;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});$('#system-detail').innerHTML=`<h3>${escape(step[0])}</h3><p>${escape(step[1])}</p>`;}
  $$('.system-steps button').forEach(b=>b.addEventListener('click',()=>renderStep(Number(b.dataset.step))));
  function calculatePlan(postsPerWeek,fansPerPost){const posts=Math.floor(90/7*postsPerWeek);return {posts,growth:posts*fansPerPost,required:Math.ceil(1000/posts)}}
  function updateCalculator(){if(!$('#posts-week'))return;const posts=Number($('#posts-week').value),fans=Number($('#fans-post').value),r=calculatePlan(posts,fans);$('#posts-value').textContent=posts+' 条';$('#fans-value').textContent=fans+' 人';$('#calc-posts').textContent=r.posts+' 条';$('#calc-growth').textContent=r.growth.toLocaleString('zh-CN')+' 人';$('#calc-required').textContent=r.required+' 人 / 条';}
  function openCase(id){
    const c=cases[id];if(!c)return;
    if(!dialog.open){returnFocus=document.activeElement;document.body.style.overflow='hidden';}
    activeCase=id;const keys=Object.keys(cases),next=keys[(keys.indexOf(id)+1)%keys.length];
    $('#case-top-label').textContent=`PROJECT / ${c.index} · ${c.type}`;
    $('#case-content').innerHTML=`<header class="case-hero"><p class="case-kicker">${escape(c.subtitle)}</p><h2 id="case-title">${escape(c.title)}</h2><p class="case-lead">${escape(c.lead)}</p>${c.summaryFacts?`<div class="case-highlights ${id==='product'?'text-highlights':''}">${c.summaryFacts.map(([value,label])=>`<div><strong>${escape(value)}</strong><span>${escape(label)}</span></div>`).join('')}</div>`:''}<dl class="case-facts"><div><dt>我的角色</dt><dd>${escape(c.role)}</dd></div><div><dt>面向对象</dt><dd>${escape(c.audience)}</dd></div></dl><p class="case-source-note">资料范围：${escape(c.scope)}</p></header><div class="case-body"><nav class="case-toc" aria-label="案例内导航"><small>IN THIS PROJECT</small>${c.sections.map((s,i)=>`<a href="#detail-${s.id}" data-section="${s.id}">${String(i+1).padStart(2,'0')} / ${escape(s.title.split('：')[0])}</a>`).join('')}<button class="detail-print" type="button">打印此案例 ↗</button></nav><div>${c.sections.map((s,i)=>`<section id="detail-${s.id}" class="case-section"><h3><span>${String(i+1).padStart(2,'0')}</span>${escape(s.title)}</h3>${s.html}</section>`).join('')}</div></div><div class="case-next"><a href="#case/${next}"><small>NEXT PROJECT / ${cases[next].index}</small>${escape(cases[next].title)} ↗</a><button class="close-inline" type="button">返回作品集 ↑</button></div>`;
    if(!dialog.open)dialog.showModal();dialog.scrollTop=0;$('#close-case').focus();
    $$('.case-toc a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();$('#detail-'+a.dataset.section).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}));
    $('.close-inline').addEventListener('click',closeCase);$('.detail-print').addEventListener('click',()=>window.print());
    $$('.calculator input').forEach(input=>input.addEventListener('input',updateCalculator));updateCalculator();
  }
  function closeCase(){if(dialog.open)dialog.close();activeCase=null;document.body.style.overflow='';history.replaceState(null,'',returnHash);if(returnFocus?.isConnected)returnFocus.focus();else $('#work').scrollIntoView();}
  function route(){const match=location.hash.match(/^#case\/([a-z]+)$/);if(match&&cases[match[1]])openCase(match[1]);else if(dialog.open){dialog.close();activeCase=null;document.body.style.overflow='';if(returnFocus?.isConnected)returnFocus.focus()}}
  document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#case/"]');if(link&&!dialog.open){returnHash=location.hash&&!location.hash.startsWith('#case/')?location.hash:'#work';returnFocus=link;}});
  $('#close-case').addEventListener('click',closeCase);dialog.addEventListener('cancel',e=>{e.preventDefault();closeCase()});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeCase()}});
  window.addEventListener('hashchange',route);window.addEventListener('beforeprint',()=>document.body.classList.toggle('print-case',dialog.open));window.addEventListener('afterprint',()=>document.body.classList.remove('print-case'));
  const summary='夏羽珊｜新媒体运营 / 内容策划 / 直播运营。现任金吉列产品运营，支持全国 40+ 分公司；参与产品内容、直播主持与数据看板；在金吉列和网易实习期间制作过部分视频号内容，并撰写研究生会公众号推文。个人小红书代表笔记：14,828 阅读、2,160 点赞、662 收藏；个人抖音截图：23 条作品、229 粉丝、4,211 获赞。平台数据按本次提供截图记录。2025.10.14 直播：2,405 场观、41 新粉、7 线索。翻译硕士，TEM-8。擅长信息提炼、内容表达、数据复盘与 AI 辅助迭代。';
  $('#copy-summary').addEventListener('click',async()=>{try{if(!navigator.clipboard)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(summary+'\n作品集：'+location.href.split('#')[0]);$('#contact-status').textContent='候选人摘要已复制。';}catch{const el=document.createElement('textarea');el.value=summary;el.className='summary-fallback';el.setAttribute('aria-label','候选人摘要，可手动复制');$('#contact-status').textContent='自动复制不可用，请从下方文本框复制。';const old=$('.summary-fallback');if(old)old.remove();$('.contact-actions').append(el);el.focus();el.select();}});
  $('#print-portfolio').addEventListener('click',()=>window.print());renderRole('production');renderStep(0);route();
  window.PORTFOLIO_UTILS={calculatePlan};
})();
