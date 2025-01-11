// 

const allData = [
// Basic
  [`Player`, `玩家`],
  [`Player name`, `玩家昵称`],
  [`sec`, `秒`],
  [`Sec`, `秒`],
  [` seconds`, `秒`],
  [`Cancel`, `取消`],

  [`1st`, `第一名`],
  [`2nd`, `第二名`],
  [`3rd`, `第三名`],
  [`4th`, `第四名`],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  
  
  

// b/Loading 加载
  [`Hold tight! We're spinning the globe...`, `加载中…`],
  [`Plotting Your Next Adventure... Hold Tight!`, `加载中…`],
  [`Loading...`, `加载中…`],
  [`Sign in`, `登录`],
  [`Selected Map:`, `已选择：`],
  [`Vacation Destincations`, `度假目的地`],
  [`Did you know you can sign in with just one click?`, `请登录`],
  [`Sign in and unlock new features!`, `登录以解锁更多功能！`],
// b/Login
  [`By continuing, you are indicating that you accept our`, `继续即表示您接受我们的`],
  [`Sign in with email`, `用电子邮件登录`],
  [`Sign in with Google`, `用谷歌账号登录`],
  [`Sign in with Facebook`, `用Facebook账号登录`],
  [`Sign in with Twitter`, `用Twitter账号登录`],
  [`Sign in with GitHub`, `用Github账号登录`],
  [`Sign in with Yahoo`, `用Yahoo账号登录`],
  [`Sign in with Microsoft`, `用微软账号登录`],
// b/Account
  [`Account`, `个人信息`],
  [`Update photo`, `上传图片`],
  [`Allowed *.jpeg, *.jpg, *.png, *.gif (max size of 1 Mb)`, `允许 jpeg, jpg, png, gif 图片（最大1Mb）`],
  [`Current experience: `, `当前经验：`],
  [`Next level experience: `, `下一级需要：`],
  [`ACCOUNT DETAILS`, `更多信息`],
  [`User Name`, `用户昵称`],
  [`Email`, `电子邮箱`],
  [`Join Date`, `注册时间`],
  [`Save changes`, `保存更改`],
  [`DANGER ZONE`, `危险区`],
  [`Sign Out`, `退出登录`],
  [`Delete Account`, `注销账号`],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],

  
  
// Menu 
  [`Menu`, `菜单`],
  [`Main Menu`, `主菜单`],
  [`SINGLE PLAYER`, `单人模式`],
  [`New Game`, `新游戏`],
  [`Challenges`, `成就`],
  [`Leaderboard`, `排行榜`],
  [`MULTIPLAYER`, `多人游戏`],
  [`Arena`, `加入大厅`],
  [`PARTY`, `聚会`],
  [`Host`, `创建`],
  [`Join`, `加入`],
  [`OPTIONS`, `设置`],
  [`Game Options`, `游戏设置`],
  [`FAQ`, `常见问题`],
  [`Close`, `关闭菜单`],
  [`By entering game, you are indicating that you accept our`, `进入游戏即表示您接受我们的`],
  [`Terms of Service`, `用户协议`],
  [`and`, `和`],
  [`Privacy Policy`, `隐私政策`],
  [`JOIN OUR COMMUNITY`, `加入社区`],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
// Play
  [`Skip this Location`, `跳过此题`],
  [`Return to Start`, `回到原点`],
  [`Report a Bug`, `坏题反馈`],
  [`Pin the Map`, `固定地图`],
  [`Place Pin to Make a Guess`, `标记您的选择`],
  [`Place Pin on the map to Make a Guess`, `在地图上标记您的选择`],
  [`Distance to`, `距离正确地点`],
  [`Earned XP`, `获得经验`],
  [`Elo Rank`, ``],
  [`Level`, `等级`],
  [`You are leading so far!`, `你的猜测太远了！`],
  [`Game Type:`, `游戏类型：`],
  [``, ``],
  [``, ``],
  [``, ``],
  [`World (handpicked)`, `世界（精选题目）`],
  [``, ``],
  [`Current level: `, `当前等级：`],
  [`Current experience: `, `当前经验：`],
  [`Experience need to level up: `, `升级所需经验：`],
  [``, ``],
  [``, ``],
// Mulitplayer
  [`You won this round!`, `你赢了本轮！`],
  [`Round Ranking`, `本轮排名`],
  [`Score`, `经验`],
  [`Player score`, `获得经验`],
  [`Results`, `排名`],

  [`Distance`, `距离`],
  [`Distance from your guess to target location (click to toggle unit of measurement)`, `距离正确位置（点击切换单位）`],
  [`Country`, `国家`],
  [`Next round starts in `, `下一轮开始：`],
  [`Waiting for other players to guess or skip`, `等待其他玩家…`],
  [`Skipped`, `已跳过`],
  [`Scouting...`, `正在选择`],
  [`Experience from this guess: `, `获得经验：`],
  [`(Max: 10000 XP)`, `（最大：10000 XP）`],
  [`Position in this round ranking: `, `本轮排名：`],
  [`(click to open global leaderboard)`, `(点击打开全球排行榜）`],
  [`Arena map:`, `竞技场地图：`],
  [`Next round starts in `, `下一场将开始：`],
  [` seconds`, `秒`],
  [`Leave`, `退出`],
  [`Skip Round`, `跳过本轮`],
  [`Are you sure you want to leave this game?`, `确定要退出吗？`],
  [`You will be redirected to home page.`, `你会返回主页。`],
  [`Leave Game`, `退出`],
  [``, ``],
  [``, ``],

];

const MutationObserverConfig = {
  childList: true,
  subtree: true,
  attributeFilter: ["data-label"],
  characterData: true,
};

const observer = new MutationObserver(function (mutations) {
  const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ALL,
    {
      acceptNode: function (node) {
        if (
          node.nodeType === 3 ||
          (node.hasAttribute &&
            (node.hasAttribute("data-label") ||
              node.hasAttribute("placeholder") ||
              node.hasAttribute("value")))
        ) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_SKIP;
        }
      },
    },
    false
  );
  let dataMap = new Map();
  allData.forEach(([key, val]) => {
    if (key && !dataMap.has(key)) {
      dataMap.set(key, val);
    }
  });
  let currentNode = treeWalker.currentNode;
  while (currentNode) {
    if (currentNode.nodeType === 3) {
      let key1 = currentNode.textContent
        .replace(/^\s*|\s*$/g, "")
        .replace(/\s+/g, " ");
      if (dataMap.has(key1)) currentNode.textContent = dataMap.get(key1);
    } else {
      let key2 = currentNode.getAttribute("data-label");
      if (key2 && dataMap.has(key2))
        currentNode.setAttribute("data-label", dataMap.get(key2));
      let key3 = currentNode.getAttribute("placeholder") || "";
      if ((key3 = key3.trim())) {
        if (dataMap.has(key3))
          currentNode.setAttribute("placeholder", dataMap.get(key3));
      }
      let key4 = currentNode.getAttribute("value");
      if (currentNode.tagName == "INPUT" && dataMap.has(key4)) {
        currentNode.setAttribute("value", dataMap.get(key4));
        let key5 = currentNode.getAttribute("data-signin-label");
        let key6 = currentNode.getAttribute("data-disable-with");
        currentNode.setAttribute("data-signin-label", dataMap.get(key5));
        currentNode.setAttribute("data-disable-with", dataMap.get(key6));
      }
    }
    currentNode = treeWalker.nextNode();
  }
});

observer.observe(document.body, MutationObserverConfig);
