const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 1. CREATE - Insert one new book
    const newBook = {
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      genre: 'Thriller',
      published_year: 2019,
      price: 15.99,
      in_stock: true,
      pages: 336,
      publisher: 'Celadon Books'
    };
    const insertResult = await collection.insertOne(newBook);
    console.log('Inserted new book:', insertResult.insertedId);

    // 2. READ - Find all books in "Fiction" genre
    const fictionBooks = await collection.find({ genre: 'Fiction' }).toArray();
    console.log('\nFiction books:', fictionBooks);

    // 3. READ with Projection & Sorting - Find all books but show only title & author, sorted by published_year desc
    const booksProjection = await collection
      .find({}, { projection: { title: 1, author: 1, _id: 0 } })
      .sort({ published_year: -1 })
      .toArray();
    console.log('\nBooks with title and author, sorted by year descending:', booksProjection);

    // 4. UPDATE - Update the price of "The Hobbit"
    const updateResult = await collection.updateOne(
      { title: 'The Hobbit' },
      { $set: { price: 17.99 } }
    );
    console.log('\nUpdated "The Hobbit" price:', updateResult.modifiedCount);

    // 5. DELETE - Delete books that are out of stock
    const deleteResult = await collection.deleteMany({ in_stock: false });
    console.log('\nDeleted out of stock books:', deleteResult.deletedCount);

    // 6. AGGREGATION - Count number of books by genre
    const aggregationResult = await collection.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]).toArray();
    console.log('\nBook count by genre:', aggregationResult);

    // 7. CREATE INDEX - Create index on author field for faster queries
    const indexName = await collection.createIndex({ author: 1 });
    console.log('\nCreated index:', indexName);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('\nConnection closed');
  }
}

runQueries();

