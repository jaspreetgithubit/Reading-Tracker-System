const mongoose = require('mongoose');
const Book = require('./Book');

mongoose.connect('mongodb://127.0.0.1:27017/reading-tracker-db')
    .then(() => console.log("✅ MongoDB Connected for Seeding"))
    .catch(err => console.log(err));

const books = [
    {
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        coverUrl: "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg",
        status: "Want to Read",
        rating: 5,
        content: `To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind.

Holmes was not a man who relied on guesswork or emotion. He approached every problem with a methodical and scientific mindset, analyzing facts, observing behavior, and drawing conclusions with remarkable accuracy. His powers of deduction were so refined that they often appeared supernatural to those around him.

Despite his brilliance, Holmes lived a solitary life, devoted entirely to his work. His partnership with Dr. Watson provided both companionship and a reliable record of his cases. Together, they navigated the dark alleys of London, unraveling mysteries that baffled the police and exposed the hidden truths behind seemingly ordinary crimes.`
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        coverUrl: "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg",
        status: "Want to Read",
        rating: 4,
        content: `3 May. Bistritz.—Left Munich at 8:35 P.M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late. Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets.

As the journey continued deeper into Eastern Europe, an unsettling atmosphere surrounded me. The villagers grew increasingly fearful, offering warnings through gestures and whispered words. Strange symbols and charms were pressed into my hands as protection against unknown dangers.

Castle Dracula itself stood isolated and ominous, its towering walls casting long shadows. Within its halls, time seemed to lose meaning. What began as a business trip slowly transformed into a nightmare, revealing the existence of an ancient evil that fed upon fear, blood, and the living.`
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
        status: "Want to Read",
        rating: 5,
        content: `In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since. “Whenever you feel like criticizing any one,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.”

This advice shaped my understanding of the people I encountered. Living among the wealthy elite of New York, I witnessed lavish parties, endless conversations, and lives driven by appearances. At the center of it all stood Jay Gatsby, a mysterious man driven by an unshakable dream.

Gatsby’s longing for Daisy revealed the fragile nature of hope and ambition. The story exposes the emptiness beneath wealth and glamour, portraying the American Dream as something both beautiful and tragically flawed.`
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        coverUrl: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
        status: "Want to Read",
        rating: 4,
        content: `Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.

That impulse led me aboard the whaling ship Pequod, a vessel unlike any other. Its captain, Ahab, was a man consumed by obsession, driven by his desire for revenge against the great white whale known as Moby Dick.

As the voyage progressed, the sea became a vast stage for philosophical reflection. The novel explores fate, madness, and humanity’s struggle against nature, turning a whaling journey into a powerful meditation on life itself.`
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        coverUrl: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
        status: "Want to Read",
        rating: 5,
        content: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

This statement introduces a society governed by manners, marriage, and reputation. Elizabeth Bennet, intelligent and independent, navigates family pressures and social expectations with wit and courage.

Her relationship with Mr. Darcy evolves through misunderstandings and self-discovery. The novel highlights the importance of humility, personal growth, and genuine affection over wealth and status.`
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        coverUrl: "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
        status: "Want to Read",
        rating: 4,
        content: `You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings.

Victor Frankenstein’s pursuit of forbidden knowledge leads him to create life itself. However, his abandonment of his creation results in tragedy. The creature, intelligent yet rejected, struggles with loneliness and rage.

The novel raises profound questions about responsibility, ambition, and the consequences of unchecked scientific exploration.`
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        coverUrl: "https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg",
        status: "Want to Read",
        rating: 5,
        content: `The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden.

Dorian Gray’s desire for eternal youth is fulfilled in a mysterious way. While he remains outwardly untouched by age or sin, his portrait reveals the true cost of his actions.

The novel explores vanity, morality, and the dangers of living a life devoted solely to pleasure and appearance.`
    },
    {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        coverUrl: "https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg",
        status: "Want to Read",
        rating: 4,
        content: `“TOM!” No answer. “TOM!” No answer.

Tom Sawyer is a spirited and mischievous boy growing up along the Mississippi River. His days are filled with adventure, imagination, and trouble.

From whitewashing fences to exploring haunted houses, Tom’s journey captures the joy and innocence of childhood while subtly teaching lessons about responsibility, courage, and friendship.`
    },
    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        coverUrl: "https://www.gutenberg.org/cache/epub/98/pg98.cover.medium.jpg",
        status: "Want to Read",
        rating: 5,
        content: `It was the best of times, it was the worst of times.

Set against the chaos of the French Revolution, the novel contrasts love and hatred, justice and revenge. Through unforgettable characters, Dickens shows how personal sacrifice can bring redemption.

The story highlights the power of compassion even in the darkest moments of history.`
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        coverUrl: "https://www.gutenberg.org/cache/epub/2600/pg2600.cover.medium.jpg",
        status: "Want to Read",
        rating: 4,
        content: `“Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes.”

War and Peace follows multiple families through love, loss, and war during the Napoleonic era. Tolstoy blends personal stories with historical events.

The novel explores fate, free will, and the meaning of life, making it one of the most profound works in world literature.`
    }
];

const seedDB = async () => {
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log("✅ Library Seeded with 10 Real Books!");
    mongoose.connection.close();
};

seedDB();
