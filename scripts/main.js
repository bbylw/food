document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            title: '终极懒人番茄饭',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🍅',
            description: '电饭煲邪修的开山之作，极致简单，出人意料的美味。',
            difficulty: '入门',
            time: '≈25分钟',
            steps: [
                '大米正常淘洗，水量比平时稍少一点点。',
                '加入一勺生抽、一勺蚝油、半勺香油、适量黑胡椒。',
                '放入切好的午餐肉/火腿肠丁、青豆、玉米粒。',
                '最关键的：中间放上一个洗干净、划了十字刀的番茄。',
                '按下电饭煲煮饭键，静待“法器”完成它的使命。',
                '饭好后，用饭勺把番茄捣烂，和所有食材一起拌匀即可。'
            ]
        },
        {
            title: '可乐鸡翅 (电饭煲版)',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🥤',
            description: '用碳酸饮料替代复杂炒糖色，效果惊人地好，色泽红亮。',
            difficulty: '入门',
            time: '≈30分钟',
            steps: [
                '鸡翅洗净，两面划几刀以便入味。',
                '将鸡翅、几片姜、一罐可乐、两勺生抽、一勺老抽全部倒入电饭煲。',
                '可乐的量以基本没过鸡翅为准。',
                '按下煮饭键，等待程序自动完成。',
                '程序结束后，如果汤汁还比较多，可以开着盖子收一下汁，或者直接保温模式焖一会儿。'
            ]
        },
        {
            title: '速冻万物复苏术',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🧊',
            description: '任何速冻半成品，在空气炸锅加持下，都能焕发第二春。',
            difficulty: '入门',
            time: '≈15分钟',
            steps: [
                '空气炸锅180度预热3分钟。',
                '将速冻半成品（如鸡块、薯条、小油条）直接放入炸篮，无需解冻。',
                '（可选）喷上薄薄一层油，如果食材本身油脂多则无需。',
                '180度炸10-15分钟，中途可以拉出炸篮晃动一下使其受热均匀。',
                '出锅后根据个人喜好撒上盐、胡椒粉或辣椒粉。'
            ]
        },
        {
            title: '蔬菜脱水脆化术',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🥦',
            description: '赋予蔬菜“薯片化”的邪道潜力，口感类似肉干，风味十足。',
            difficulty: '进阶',
            time: '≈15分钟',
            steps: [
                '将西兰花、杏鲍菇、藕片等适合脱水的蔬菜切成薄片或小块。',
                '加入一勺油、一勺生抽、一勺烧烤料（或任何你喜欢的粉料），拌匀。',
                '将处理好的蔬菜平铺进空气炸锅炸篮，尽量不要重叠。',
                '160度炸10-15分钟，直到蔬菜边缘焦黄，口感变脆。',
                '注意：不同蔬菜含水量不同，需要随时观察以防炸糊。'
            ]
        },
        {
            title: '三分钟完美蒸蛋',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🥚',
            description: '将传统蒸蛋耗时压缩至3分钟以内，成品光滑如镜。',
            difficulty: '入门',
            time: '≈5分钟',
            steps: [
                '一个鸡蛋打散。',
                '加入约1.5倍的温水（用蛋壳量取即可），水温不烫手为宜。',
                '加入少许盐或一勺蒸鱼豉油，搅拌均匀。',
                '用滤网将蛋液过滤到碗中，这一步是保证顺滑的关键。',
                '盖上保鲜膜（或一个盘子），用牙签扎几个小孔。',
                '放入微波炉，中高火（或解冻档）加热2-3分钟。',
                '取出后淋上香油和葱花即可。'
            ]
        },
        {
            title: '神仙泡面 (芝士部队锅版)',
            category: 'danyaoliu',
            categoryName: '丹药流',
            icon: '🍜',
            description: '将廉价泡面升华为一锅丰盛、热烈、满足感爆棚的韩式大餐。',
            difficulty: '入门',
            time: '≈10分钟',
            steps: [
                '锅中烧水，放入泡面自带的调料包和蔬菜包。',
                '加入你喜欢的任何速食“丹药”：午餐肉、鱼豆腐、蟹棒、年糕片。',
                '水开后放入面饼。',
                '面饼煮到八成熟时，在最上面铺上一片芝士。',
                '关火，盖上锅盖焖30秒，让芝士融化。',
                '可以打入一个“无菌蛋”做成溏心蛋。'
            ]
        },
        {
            title: '饺子皮万能变身术',
            category: 'danyaoliu',
            categoryName: '丹药流',
            icon: '🥟',
            description: '速冻饺子吃腻了？饺子皮本身就是极佳的“炼丹基材”。',
            difficulty: '进阶',
            time: '≈15分钟',
            steps: [
                '快手葱油饼: 饺子皮刷油，撒上盐和葱花，三五张叠在一起，擀薄，用平底锅烙熟。',
                '迷你披萨: 饺子皮上抹番茄酱，撒上芝士和喜欢的食材，空气炸锅180度5分钟。',
                '一口烧卖: 把米饭、香菇、肉末等剩菜包入饺子皮，蒸熟。',
                '油泼面: 饺子皮扯开，下锅煮熟，捞出后加入葱蒜、辣椒粉，热油一泼。'
            ]
        },
        {
            title: '老干妈冰淇淋',
            category: 'guidaoliu',
            categoryName: '诡道流',
            icon: '🌶️',
            description: '冰凉甜腻与咸香辛辣的强烈反差，带来奇妙的复合体验。',
            difficulty: '冒险',
            time: '≈1分钟',
            steps: [
                '准备一盒香草或原味冰淇淋。',
                '挖一勺到碗里。',
                '淋上一小勺老干妈辣酱（主要是红油和豆豉，避免大块辣椒）。',
                '（可选）稍微搅拌几下，观察其诡异的纹路。',
                '闭上眼睛，勇敢地吃下去，感受味蕾的爆炸。'
            ]
        },
        {
            title: '香菜/折耳根柠檬茶',
            category: 'guidaoliu',
            categoryName: '诡道流',
            icon: '🌿',
            description: '两种“异香”与柠檬果香的豪赌，刷新你对饮品的认知。',
            difficulty: '地狱',
            time: '≈5分钟',
            steps: [
                '柠檬切片，放入杯中，用勺子捣出汁水。',
                '加入大量的冰块。',
                '倒入你喜欢的茶底（绿茶或红茶皆可），或直接用苏打水。',
                '插入灵魂：一把洗净的香菜或几根折耳根。',
                '用吸管搅拌几下，让“异香”充分融入茶中。',
                '拍照发朋友圈，然后根据评论区决定是否要喝下它。'
            ]
        },
        {
            title: '万物皆可白灼/水煮',
            category: 'wuzhaoliu',
            categoryName: '无招流',
            icon: '💧',
            description: '“无招流”的终极答案，直指食物本味，蘸料定乾坤。',
            difficulty: '入门',
            time: '≈5分钟',
            steps: [
                '锅里烧水，可以加几片姜和一勺料酒去腥。',
                '水开后，放入任何你想吃的食材：蔬菜、肉片、海鲜、豆腐等。',
                '根据食材的易熟程度，烫煮几十秒到几分钟不等，熟了就捞出。',
                '捞出，沥干水分，装盘。',
                '调制你的“乾坤蘸料”：生抽+蒜末+小米辣 / 芝麻酱+腐乳汁 / 蚝油+香油... 蘸料才是本体。'
            ]
        },
        {
            title: '生菜包万物',
            category: 'wuzhaoliu',
            categoryName: '无招流',
            icon: '🥬',
            description: '一种形式，无限内容。是饭是菜也是面，充满了哲学思辨。',
            difficulty: '入门',
            time: '≈3分钟',
            steps: [
                '准备好新鲜、完整的生菜叶，洗净沥干。',
                '准备好你的“核心内容物”，例如：',
                '  - 刚出锅的米饭 + 一勺拌饭酱',
                '  - 炒好的任意菜肴',
                '  - 一根烤肠或几片午餐肉',
                '  - 甚至是捏碎的方便面饼',
                '将“核心内容物”放在生菜叶上。',
                '像卷春饼一样包起来。',
                '一口塞进嘴里，完成一次能量的快速转化。'
            ]
        },
        {
            title: '脆皮五花肉 (空气炸锅)',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🥓',
            description: '无需烤箱，无需复杂操作，轻松复刻烧腊店的镇店之宝。',
            difficulty: '进阶',
            time: '≈40分钟',
            steps: [
                '五花肉皮朝下，冷水下锅，加姜片、料酒煮20分钟。',
                '捞出，用厨房纸吸干表面所有水分，尤其是肉皮，这是起泡的关键。',
                '用牙签或叉子在肉皮上扎满密集的小孔，越密越好。',
                '在瘦肉部分抹上盐和五香粉。',
                '肉皮上刷一层白醋。',
                '用锡纸把瘦肉部分包起来，只露出肉皮。',
                '放入空气炸锅，皮朝上，200度烤30-40分钟，直到肉皮金黄酥脆，发出噼啪声。'
            ]
        }
    ];

    const recipesGrid = document.getElementById('recipes-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // 渲染食谱卡片
    const renderRecipes = (filteredRecipes) => {
        recipesGrid.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card fade-in-up';
            recipeCard.innerHTML = `
                <div class="recipe-image">${recipe.icon}</div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipe-school">${recipe.categoryName}</p>
                    <p class="recipe-description">${recipe.description}</p>
                    <div class="recipe-meta">
                        <span>难度: ${recipe.difficulty}</span>
                        <span>时间: ${recipe.time}</span>
                    </div>
                    <div class="recipe-actions">
                        <button class="toggle-steps-btn">查看详情</button>
                    </div>
                    <div class="recipe-steps" style="display: none;">
                        <h4>制作步骤：</h4>
                        <ol>
                            ${recipe.steps ? recipe.steps.map(step => `<li>${step}</li>`).join('') : ''}
                        </ol>
                    </div>
                </div>
            `;
            
            const toggleBtn = recipeCard.querySelector('.toggle-steps-btn');
            const stepsContainer = recipeCard.querySelector('.recipe-steps');

            if (toggleBtn && stepsContainer && recipe.steps && recipe.steps.length > 0) {
                toggleBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isHidden = stepsContainer.style.display === 'none';
                    stepsContainer.style.display = isHidden ? 'block' : 'none';
                    toggleBtn.textContent = isHidden ? '收起步骤' : '查看详情';
                    // 展开时，卡片可能会变高，需要父容器重新计算布局
                    if(isHidden) {
                        recipeCard.classList.add('is-expanded');
                    } else {
                        recipeCard.classList.remove('is-expanded');
                    }
                });
            } else if (toggleBtn) {
                toggleBtn.style.display = 'none';
            }

            recipesGrid.appendChild(recipeCard);
        });
    };

    // 分类筛选
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            if (category === 'all') {
                renderRecipes(recipes);
            } else {
                const filteredRecipes = recipes.filter(recipe => recipe.category === category);
                renderRecipes(filteredRecipes);
            }
        });
    });

    // 初始加载全部食谱
    renderRecipes(recipes);
});