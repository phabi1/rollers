export async function useNewsDetails(newsId: string) {
    return {
        content: {
            id: newsId,
            title: 'News Title',
            body: 'News Body',
        },
    }
}