
document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            title: '终极懒人番茄饭',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🍅',
            description: '电饭煲邪修的开山之作，极致简单，出人意料的美味。',
            difficulty: '入门',
            time: '≈25分钟'
        },
        {
            title: '可乐鸡翅 (电饭煲版)',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🥤',
            description: '用碳酸饮料替代复杂炒糖色，效果惊人地好，色泽红亮。',
            difficulty: '入门',
            time: '≈30分钟'
        },
        {
            title: '速冻万物复苏术',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🧊',
            description: '任何速冻半成品，在空气炸锅加持下，都能焕发第二春。',
            difficulty: '入门',
            time: '≈15分钟'
        },
        {
            title: '蔬菜脱水脆化术',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🥦',
            description: '赋予蔬菜“薯片化”的邪道潜力，口感类似肉干，风味十足。',
            difficulty: '进阶',
            time: '≈15分钟'
        },
        {
            title: '三分钟完美蒸蛋',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🥚',
            description: '将传统蒸蛋耗时压缩至3分钟以内，成品光滑如镜。',
            difficulty: '入门',
            time: '≈5分钟'
        },
        {
            title: '神仙泡面 (芝士部队锅版)',
            category: 'danyaoliu',
            categoryName: '丹药流',
            icon: '🍜',
            description: '将廉价泡面升华为一锅丰盛、热烈、满足感爆棚的韩式大餐。',
            difficulty: '入门',
            time: '≈10分钟'
        },
        {
            title: '饺子皮万能变身术',
            category: 'danyaoliu',
            categoryName: '丹药流',
            icon: '🥟',
            description: '速冻饺子吃腻了？饺子皮本身就是极佳的“炼丹基材”。',
            difficulty: '进阶',
            time: '≈15分钟'
        },
        {
            title: '老干妈冰淇淋',
            category: 'guidaoliu',
            categoryName: '诡道流',
            icon: '🌶️',
            description: '冰凉甜腻与咸香辛辣的强烈反差，带来奇妙的复合体验。',
            difficulty: '冒险',
            time: '≈1分钟'
        },
        {
            title: '香菜/折耳根柠檬茶',
            category: 'guidaoliu',
            categoryName: '诡道流',
            icon: '🌿',
            description: '两种“异香”与柠檬果香的豪赌，刷新你对饮品的认知。',
            difficulty: '地狱',
            time: '≈5分钟'
        },
        {
            title: '万物皆可白灼/水煮',
            category: 'wuzhaoliu',
            categoryName: '无招流',
            icon: '💧',
            description: '“无招流”的终极答案，直指食物本味，蘸料定乾坤。',
            difficulty: '入门',
            time: '≈5分钟'
        },
        {
            title: '生菜包万物',
            category: 'wuzhaoliu',
            categoryName: '无招流',
            icon: '🥬',
            description: '一种形式，无限内容。是饭是菜也是面，充满了哲学思辨。',
            difficulty: '入门',
            time: '≈3分钟'
        },
        {
            title: '脆皮五花肉 (空气炸锅)',
            category: 'faqiliu',
            categoryName: '法器流',
            icon: '🥓',
            description: '无需烤箱，无需复杂操作，轻松复刻烧腊店的镇店之宝。',
            difficulty: '进阶',
            time: '≈40分钟'
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
                </div>
            `;
            recipesGrid.appendChild(recipeCard);
        });
    };

    // 分类筛选
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按钮激活状态
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
