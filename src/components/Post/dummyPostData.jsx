const oneDummyPost = {
    title: 'my first post',
    selftext: "This is a story about how I ...",
    author: 'anderai',
    score: 44,
    subreddit: 'worldnews',
    num_comments: 12,
    created: 1755700000
}

//now we attempt dummy data of 3 posts, for prep for running a feed

const dummyFeed = [
    oneDummyPost,
    {
        title: 'my second post',
        selftext: 'What did you say about me? I have you know I ...',
        author: 'Seal team 6 operative',
        score: 100,
        subreddit: 'casualuk',
        num_comments: 100,
        created: 1755700000
    },
    {
        title: 'my third post',
        selftext: 'They say I\'m dead.....',
        author: 'Johnny',
        score: 5,
        subreddit: 'videos',
        num_comments: 5,
        created: 1755700000
    }

]


export { dummyFeed };
export { oneDummyPost };