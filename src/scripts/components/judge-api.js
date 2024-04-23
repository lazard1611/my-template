const judgeApi = () => {
    const apiToken = '4Jc0Apaga0bz6IgUwjM4z9pQGyQ';
    const shopDomain = 'lalucyshop.myshopify.com';
    const productHandle = 8385777926392;
    const id = -1;

//     const url = `https://judge.me/api/v1/widgets/preview_badge?api_token=${apiToken}&shop_domain=${shopDomain}&external_id=${productHandle}`;
//     const url = `https://judge.me/api/v1/widgets/featured_carousel?api_token=${apiToken}&shop_domain=${shopDomain}`;
    const url = `https://judge.me/api/v1/reviewers/${id}?api_token=${apiToken}&shop_domain=${shopDomain}&external_id=${productHandle}`;

// Виконання запиту
    fetch(url)
        .then(response => response.json())
        .then((body) => console.log(body))
};

export default judgeApi;
