export async function useBrikzContent(slug: string) {
  return {
    content: {
      component: 'page',
      body: [
        {
          component: 'hero',
          title: 'Welcome to Brikz',
          subtitle: 'Your one-stop solution for all your needs',
          image: 'https://example.com/hero-image.jpg',
        },
        {
          component: 'container',
          children: [
            {
              component: 'section',
              title: 'Top News',
              children: [],
            },
          ],
        },
      ],
    },
  };
}
