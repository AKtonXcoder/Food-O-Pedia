var recipes = [
    {
        title: 'Pasta Carbonara',
        ingredients: ['pasta', 'eggs', 'bacon', 'cheese', 'pepper'],
        instructions: '1. Boil pasta until al dente. 2. Cook bacon until crispy. 3. Mix eggs, cheese, and pepper. 4. Toss pasta with egg mixture. 5. Crumble bacon on top.'
    },
    {
        title: 'Chicken Stir-Fry',
        ingredients: ['chicken', 'vegetables', 'soy sauce', 'garlic'],
        instructions: '1. Cut chicken into small pieces. 2. Stir-fry chicken and vegetables in a hot pan. 3. Add soy sauce and garlic. 4. Stir-fry until cooked.'
     },
     {
        title: 'Caprese Salad',
        ingredients: ['tomato', 'mozzarella', 'basil', 'olive oil'],
        instructions: '1. Slice tomatoes and mozzarella. 2. Arrange slices on a plate. 3. Sprinkle basil leaves. 4. Drizzle with olive oil. 5. Season with salt and pepper.'
    },
    {
        title: 'Chocolate Cake',
        ingredients: ['flour', 'sugar', 'cocoa powder', 'eggs', 'butter'],
        instructions: '1. Mix dry ingredients. 2. Beat eggs and sugar. 3. Add cocoa and melted butter. 4. Combine wet and dry ingredients. 5. Bake until done.'
    },
    {
        title: 'Classic Burger',
        ingredients: ['Potato ', 'ketchup', 'tomato', 'onion', 'cheese', 'buns'],
        instructions: '1. Make potato patties (aloo tikki). 2. Grill buns. 3. Assemble burger with ketchup, patties, cheese, and veggies.'
    },
    {
        title: 'Chicken Tikka Masala',
        ingredients: ['chicken', 'yogurt', 'tomatoes', 'spices', 'cream', 'onion', 'garlic', 'ginger'],
        instructions: '1. Marinate chicken in yogurt and spices. 2. Grill chicken. 3. Simmer in tomato-based sauce with cream and spices. 4. Garnish with onions and garlic.'
    },
    {
        title: 'Palak Paneer',
        ingredients: ['paneer (Indian cottage cheese)', 'spinach', 'tomato', 'cream', 'spices'],
        instructions: '1. Cook spinach and tomatoes. 2. Blend into a puree. 3. Add spices and cream. 4. Cook with paneer until creamy.'
    },
    {
        title: 'Aloo Gobi',
        ingredients: ['potatoes', 'cauliflower', 'spices', 'tomato', 'peas'],
        instructions: '1. Sauté potatoes, cauliflower, and peas with spices. 2. Add tomatoes. 3. Cook until tender.'
    },
    {
        title: 'Butter Chicken',
        ingredients: ['chicken', 'butter', 'cream', 'tomato', 'spices'],
        instructions: '1. Marinate chicken in yogurt and spices. 2. Grill chicken. 3. Simmer in a tomato-based sauce with butter and cream.'
    },
    {
        title: 'Biryani',
        ingredients: ['rice', 'chicken or vegetables', 'spices', 'saffron', 'yogurt'],
        instructions: '1. Cook rice. 2. Sauté chicken or vegetables with spices. 3. Layer rice and chicken/vegetables. 4. Garnish with saffron and yogurt.'
    },
    {
        title: 'Tandoori Chicken',
        ingredients: ['chicken', 'yogurt', 'spices', 'lemon juice'],
        instructions: '1. Marinate chicken in yogurt, spices, and lemon juice. 2. Grill until charred and cooked.'
    },
    {
        title: 'Chana Masala',
        ingredients: ['chickpeas (Chana)', 'tomatoes', 'spices', 'onion', 'garlic', 'ginger'],
        instructions: '1. Sauté onions, garlic, and ginger. 2. Add spices and tomatoes. 3. Cook with chickpeas until fragrant.'
    },
    {
        title: 'Dal Makhani',
        ingredients: ['black lentils', 'kidney beans', 'cream', 'spices', 'butter'],
        instructions: '1. Cook black lentils and kidney beans. 2. Simmer in a creamy tomato-based sauce with spices and butter.'
    },
    {
        title: 'Paneer Tikka',
        ingredients: ['paneer', 'yogurt', 'spices', 'bell peppers', 'onion'],
        instructions: '1. Marinate paneer and vegetables in yogurt and spices. 2. Grill until charred.'
    },
    {
        title: 'Vegetable Stir-Fry',
        ingredients: ['assorted vegetables', 'tofu', 'soy sauce', 'ginger', 'garlic', 'sesame oil'],
        instructions: '1. Stir-fry assorted vegetables and tofu in a hot pan with soy sauce, ginger, and garlic. 2. Drizzle with sesame oil.'
    },
    {
        title: 'Mushroom Risotto',
        ingredients: ['rice', 'mushrooms', 'vegetable broth', 'onion', 'butter', 'white wine', 'parmesan cheese'],
        instructions: '1. Sauté onions and mushrooms. 2. Add rice and cook with white wine. 3. Gradually add vegetable broth. 4. Finish with butter and parmesan.'
    },
    {
        title: 'Vegetable Curry',
        ingredients: ['assorted vegetables', 'coconut milk', 'curry spices', 'tomatoes', 'onion', 'garlic', 'ginger'],
        instructions: '1. Sauté onions, garlic, and ginger. 2. Add curry spices and tomatoes. 3. Cook with assorted vegetables and coconut milk.'
    },
    {
        title: 'Spinach and Mushroom Quiche',
        ingredients: ['spinach', 'mushrooms', 'eggs', 'cheese', 'cream', 'pie crust'],
        instructions: '1. Sauté spinach and mushrooms. 2. Combine with eggs, cheese, and cream. 3. Pour into a pie crust and bake.'
    },
    {
        title: 'Eggplant Parmesan',
        ingredients: ['eggplant', 'tomato sauce', 'mozzarella cheese', 'parmesan cheese', 'breadcrumbs', 'olive oil'],
        instructions: '1. Coat eggplant in breadcrumbs and fry until golden. 2. Layer with tomato sauce and cheeses. 3. Bake until bubbly.'
    },
    {
        title: 'Aloo Paratha',
        ingredients: ['wheat flour', 'Potato', 'spices', 'ghee', 'yogurt', 'water'],
        instructions: '1. Knead wheat flour with water. 2. Stuff with spiced potatoes. 3. Roll out and cook with ghee.'
    },
    {
        title: 'Sauve Tamater',
        ingredients: ['tomatoes', 'onion', 'garlic', 'ginger', 'spices', 'oil'],
        instructions: '1. Sauté onions, garlic, and ginger. 2. Add tomatoes and spices. 3. Cook until thickened. 4.Add Sauve and cook 5mint.'
    },
    {
        title: 'Pizza',
        ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'toppings of your choice (e.g., pepperoni, mushrooms, bell peppers, onions, olives)', 'oregano', 'olive oil'],
        instructions: '1. Roll out pizza dough. 2. Spread with tomato sauce. 3. Add cheese and your favorite toppings. 4. Bake until crust is golden.'
    },
    {
        title: 'Mashed Potatoes',
        ingredients: ['potatoes', 'butter', 'milk', 'salt', 'pepper'],
        instructions: '1. Boil potatoes until tender. 2. Mash with butter and milk. 3. Season with salt and pepper.'
    },
    {
        title: 'Potato Salad',
        ingredients: ['potatoes', 'mayonnaise', 'mustard', 'onion', 'celery', 'pickles'],
        instructions: '1. Boil and cube potatoes. 2. Mix with mayonnaise, mustard, diced onion, celery, and pickles.'
    },
    {
        title: 'Roasted Potatoes',
        ingredients: ['potatoes', 'olive oil', 'rosemary', 'garlic', 'salt', 'pepper'],
        instructions: '1. Cut potatoes into wedges. 2. Toss with olive oil, rosemary, and garlic. 3. Roast until crispy.'
    },
    {
        title: 'Potato Soup',
        ingredients: ['potatoes', 'onion', 'garlic', 'chicken broth', 'cream', 'bacon', 'cheese'],
        instructions: '1. Sauté onion and garlic. 2. Add diced potatoes and chicken broth. 3. Simmer, then add cream, bacon, and cheese.'
    },
    {
        title: 'Scalloped Potatoes',
        ingredients: ['potatoes', 'heavy cream', 'cheese', 'butter', 'flour', 'nutmeg'],
        instructions: '1. Slice potatoes. 2. Layer with heavy cream, cheese, butter, and flour. 3. Sprinkle with nutmeg. 4. Bake until bubbly.'
    },
    {
        title: 'Potato Pancakes',
        ingredients: ['potatoes', 'onion', 'flour', 'egg', 'salt', 'sour cream'],
        instructions: '1. Grate potatoes and onion. 2. Mix with flour, egg, and salt. 3. Fry until golden. 4. Serve with sour cream.'
    },
    {
        title: 'Baked Potato',
        ingredients: ['potatoes', 'butter', 'sour cream', 'chives', 'bacon', 'cheese'],
        instructions: '1. Bake potatoes until tender. 2. Fluff with a fork. 3. Top with butter, sour cream, chives, bacon, and cheese.'
    },
    {
        title: 'Potato Gnocchi',
        ingredients: ['potatoes', 'flour', 'egg', 'salt', 'nutmeg', 'parmesan cheese'],
        instructions: '1. Boil and mash potatoes. 2. Mix with flour, egg, salt, nutmeg, and parmesan. 3. Roll into gnocchi shapes. 4. Boil until they float.'
    },
    {
        title: 'Potato Wedges',
        ingredients: ['potatoes', 'olive oil', 'paprika', 'garlic powder', 'salt', 'ketchup'],
        instructions: '1. Cut potatoes into wedges. 2. Toss with olive oil, paprika, garlic powder, and salt. 3. Bake until crispy. 4. Serve with ketchup.'
    },
    {
        title: 'Potato and Leek Gratin',
        ingredients: ['potatoes', 'leeks', 'heavy cream', 'cheese', 'butter', 'thyme'],
        instructions: '1. Slice potatoes and leeks. 2. Layer with heavy cream, cheese, butter, and thyme. 3. Bake until golden and bubbly.'
    },

    // Add instructions for other recipes
    {
         title: 'Shrimp Scampi',
         ingredients: ['shrimp', 'linguine', 'garlic', 'lemon', 'white wine', 'parsley', 'butter'],
         instructions: '1. Cook linguine until al dente. 2. Sauté shrimp and garlic in butter. 3. Add white wine and lemon juice. 4. Toss with cooked linguine. 5. Garnish with parsley.'
    },
    {
        title: 'Cauliflower Wings',
        ingredients: ['cauliflower florets', 'flour', 'milk', 'breadcrumbs', 'Chicken sauce'],
        instructions: '1. Dip cauliflower in batter made of flour and milk. 2. Coat with breadcrumbs. 3. Bake until crispy. 4. Toss in buffalo sauce.'
    },
    {
        title: 'Quinoa Salad',
        ingredients: ['quinoa', 'cucumber', 'tomato', 'red onion', 'feta cheese', 'olive oil', 'lemon'],
        instructions: '1. Cook quinoa according to package instructions. 2. Mix with diced cucumber, tomato, and red onion. 3. Add crumbled feta. 4. Dress with olive oil and lemon.'
    },
    {
        title: 'Sweet Potato Fries',
        ingredients: ['sweet potatoes', 'olive oil', 'paprika', 'salt', 'pepper'],
        instructions: '1. Cut sweet potatoes into fries. 2. Toss with olive oil, paprika, salt, and pepper. 3. Bake until crispy.'
    },
    {
        title: 'Lentil Soup',
        ingredients: ['lentils', 'carrots', 'onion', 'celery', 'garlic', 'vegetable broth', 'cumin', 'coriander'],
        instructions: '1. Sauté onions, carrots, celery, and garlic. 2. Add lentils, vegetable broth, cumin, and coriander. 3. Simmer until lentils are tender.'
    },
    {
        title: 'Greek Salad',
        ingredients: ['cucumber', 'tomato', 'red onion', 'kalamata olives', 'feta cheese', 'olive oil', 'oregano'],
        instructions: '1. Dice cucumber, tomato, and red onion. 2. Mix with olives and crumbled feta. 3. Dress with olive oil and sprinkle with oregano.'
    },
    {
        title: 'Teriyaki Salmon',
        ingredients: ['salmon fillets', 'teriyaki sauce', 'ginger', 'garlic', 'soy sauce', 'sesame seeds'],
        instructions: '1. Marinate salmon in teriyaki sauce, ginger, and garlic. 2. Grill or bake until cooked. 3. Drizzle with soy sauce and sprinkle with sesame seeds.'
    },
    {
        title: 'Pumpkin Soup',
        ingredients: ['pumpkin', 'onion', 'carrots', 'vegetable broth', 'cream', 'nutmeg'],
        instructions: '1. Roast pumpkin, onions, and carrots. 2. Blend with vegetable broth. 3. Add cream and nutmeg. 4. Simmer until heated through.'
    },
    {
        title: 'Mango Salsa Chicken',
        ingredients: ['chicken breasts', 'mango', 'red bell pepper', 'red onion', 'cilantro', 'lime juice'],
        instructions: '1. Grill or sauté chicken breasts. 2. Top with a salsa made of diced mango, red bell pepper, red onion, cilantro, and lime juice.'
    },
    {
        title: 'Ratatouille',
        ingredients: ['eggplant', 'zucchini', 'bell peppers', 'tomatoes', 'onion', 'garlic', 'thyme', 'olive oil'],
        instructions: '1. Slice vegetables thinly. 2. Arrange in a baking dish. 3. Drizzle with olive oil and sprinkle with thyme. 4. Bake until tender.'
    },
    {
        title: 'Vegetarian Burger',
        ingredients: ['vegetarian patty', 'buns', 'lettuce', 'tomato', 'onion', 'cheese', 'mayonnaise'],
        instructions: '1. Grill the vegetarian patty. 2. Toast buns. 3. Assemble burger with lettuce, tomato, onion, cheese, and mayonnaise.'
    },
    {
        title: 'BBQ Chicken Sandwich',
        ingredients: ['chicken breast', 'barbecue sauce', 'buns', 'coleslaw', 'pickles'],
        instructions: '1. Grill chicken with barbecue sauce. 2. Toast buns. 3. Assemble sandwich with coleslaw and pickles.'
    },
    {
        title: 'Mushroom Swiss Burger',
        ingredients: ['ground Chicken ', 'buns', 'Swiss cheese', 'mushrooms', 'onion', 'mayonnaise'],
        instructions: '1. Grill the beef patty. 2. Sauté mushrooms and onions. 3. Toast buns. 4. Assemble burger with Swiss cheese, sautéed mushrooms, and mayonnaise.'
    },
    {
        title: 'Buffalo Chicken Sliders',
        ingredients: ['chicken tenders', 'buns', 'Chicken sauce', 'blue cheese dressing', 'lettuce'],
        instructions: '1. Fry chicken tenders and toss in buffalo sauce. 2. Toast buns. 3. Assemble sliders with buffalo chicken, blue cheese dressing, and lettuce.'
    },
    {
        title: 'Teriyaki Salmon Burger',
        ingredients: ['salmon fillet', 'buns', 'teriyaki sauce', 'lettuce', 'pineapple', 'mayonnaise'],
        instructions: '1. Grill salmon fillet with teriyaki sauce. 2. Toast buns. 3. Assemble burger with lettuce, pineapple, and mayonnaise.'
    },
    {
        title: 'Pulled Pork Sandwich',
        ingredients: ['pulled pork', 'buns', 'barbecue sauce', 'coleslaw', 'pickles'],
        instructions: '1. Warm pulled pork with barbecue sauce. 2. Toast buns. 3. Assemble sandwich with coleslaw and pickles.'
    },
    {
        title: 'Caprese Chicken Burger',
        ingredients: ['chicken breast', 'buns', 'mozzarella', 'tomato', 'basil pesto'],
        instructions: '1. Grill chicken breast. 2. Toast buns. 3. Assemble burger with mozzarella, tomato, and basil pesto.'
    },
    {
        title: 'Vegan Chickpea Burger',
        ingredients: ['chickpeas', 'buns', 'lettuce', 'tomato', 'onion', 'avocado', 'vegan mayo'],
        instructions: '1. Mash chickpeas and form into patties. 2. Pan-fry until golden. 3. Toast buns. 4. Assemble burger with lettuce, tomato, onion, avocado, and vegan mayo.'
    },
    {
        title: 'Turkey Cranberry Slider',
        ingredients: ['turkey patty', 'buns', 'cranberry sauce', 'cream cheese', 'lettuce'],
        instructions: '1. Grill turkey patty. 2. Toast buns. 3. Assemble sliders with cranberry sauce, cream cheese, and lettuce.'
    },
    {
        title: 'Sloppy Joe Sliders',
        ingredients: ['meat', 'buns', 'tomato sauce', 'bell pepper', 'onion', 'cheese'],
        instructions: '1. Cook ground beef with tomato sauce, bell pepper, and onion. 2. Toast buns. 3. Assemble sliders with the sloppy joe mixture and cheese.'
    },
    {
        title: 'Garlic Parmesan Chicken',
        ingredients: ['chicken breasts', 'garlic', 'parmesan cheese', 'breadcrumbs', 'butter', 'olive oil'],
        instructions: '1. Coat chicken breasts in a mixture of breadcrumbs and parmesan. 2. Sauté in garlic-infused butter and olive oil until golden and cooked through.'
    },
    {
        title: 'Honey Mustard Chicken Skewers',
        ingredients: ['chicken thighs', 'honey', 'Dijon mustard', 'soy sauce', 'garlic', 'olive oil'],
        instructions: '1. Marinate chicken thighs in a mixture of honey, Dijon mustard, soy sauce, and garlic. 2. Skewer and grill until fully cooked.'
    },
    {
        title: 'Lemon Herb Roast Chicken',
        ingredients: ['whole chicken', 'lemon', 'rosemary', 'thyme', 'garlic', 'butter', 'salt', 'pepper'],
        instructions: '1. Rub whole chicken with a mixture of lemon, rosemary, thyme, garlic, butter, salt, and pepper. 2. Roast until golden and juices run clear.'
    },
    {
        title: 'Crispy Baked Chicken Tenders',
        ingredients: ['chicken tenders', 'flour', 'eggs', 'breadcrumbs', 'paprika', 'garlic powder', 'salt', 'pepper'],
        instructions: '1. Dredge chicken tenders in a mixture of flour and spices, dip in beaten eggs, then coat with breadcrumbs. 2. Bake until crispy and golden.'
    },
    {
        title: 'Sesame Ginger Chicken Stir-Fry',
        ingredients: ['chicken breast', 'soy sauce', 'sesame oil', 'ginger', 'garlic', 'vegetables', 'rice'],
        instructions: '1. Sauté chicken in a mixture of soy sauce, sesame oil, ginger, and garlic. 2. Add vegetables and stir-fry until chicken is cooked and vegetables are tender.'
    },
    {
        title: 'Coconut Curry Chicken',
        ingredients: ['chicken thighs', 'coconut milk', 'curry powder', 'onion', 'garlic', 'ginger', 'vegetables', 'rice'],
        instructions: '1. Cook chicken thighs in coconut milk with curry powder, onion, garlic, and ginger. 2. Add vegetables and simmer until everything is cooked through.'
    },
    {
        title: 'Chicken Alfredo Pasta',
        ingredients: ['chicken breast', 'fettuccine pasta', 'heavy cream', 'parmesan cheese', 'butter', 'garlic', 'salt', 'pepper'],
        instructions: '1. Sauté chicken breast in butter with garlic. 2. Cook fettuccine pasta. 3. Make a creamy Alfredo sauce with heavy cream and parmesan. 4. Combine everything.'
    },
    {
        title: 'Baked Lemon Garlic Chicken',
        ingredients: ['chicken thighs', 'lemon', 'garlic', 'rosemary', 'thyme', 'olive oil', 'salt', 'pepper'],
        instructions: '1. Marinate chicken thighs in a mixture of lemon, garlic, rosemary, thyme, olive oil, salt, and pepper. 2. Bake until fully cooked and golden.'
    },
    {
        title: 'Teriyaki Chicken Skewers',
        ingredients: ['chicken breasts', 'teriyaki sauce', 'pineapple chunks', 'bell peppers', 'onion', 'sesame seeds'],
        instructions: '1. Marinate chicken in teriyaki sauce. 2. Skewer with pineapple chunks, bell peppers, and onion. 3. Grill until chicken is cooked and slightly charred.'
    },
    {
        title: 'Mango Habanero Grilled Chicken',
        ingredients: ['chicken thighs', 'mango', 'habanero pepper', 'lime', 'cilantro', 'olive oil', 'salt', 'pepper'],
        instructions: '1. Blend mango, habanero pepper, lime, cilantro, olive oil, salt, and pepper into a marinade. 2. Coat chicken thighs and grill until fully cooked.'
    },
    
];